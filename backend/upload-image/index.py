import json
import os
import base64
import boto3
import psycopg2
from urllib.parse import quote

def handler(event: dict, context) -> dict:
    """Загрузка изображений товаров в S3 и обновление базы данных"""
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        product_name = body.get('productName')
        image_base64 = body.get('imageBase64')
        filename = body.get('filename')
        
        if not all([product_name, image_base64, filename]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Missing required fields: productName, imageBase64, filename'})
            }
        
        image_data = base64.b64decode(image_base64)
        
        s3 = boto3.client('s3',
            endpoint_url='https://bucket.poehali.dev',
            aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
            aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
        )
        
        content_type = 'image/jpeg'
        if filename.lower().endswith('.png'):
            content_type = 'image/png'
        elif filename.lower().endswith('.webp'):
            content_type = 'image/webp'
        elif filename.lower().endswith('.gif'):
            content_type = 'image/gif'
        
        s3_key = f'products/{filename}'
        
        s3.put_object(
            Bucket='files',
            Key=s3_key,
            Body=image_data,
            ContentType=content_type
        )
        
        cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{s3_key}"
        
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        
        safe_cdn_url = cdn_url.replace("'", "''")
        safe_product_name = product_name.replace("'", "''")
        
        cur.execute(
            f"UPDATE products SET image = '{safe_cdn_url}' WHERE name = '{safe_product_name}'"
        )
        
        updated_rows = cur.rowcount
        conn.commit()
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'cdnUrl': cdn_url,
                'productName': product_name,
                'updated': updated_rows > 0
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }