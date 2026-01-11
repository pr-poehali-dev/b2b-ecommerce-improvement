import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    '''Получение списка товаров из базы данных'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    dsn = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(dsn)
    cursor = conn.cursor()
    
    cursor.execute('SELECT id, name, price, image_url, category, in_stock, description FROM products WHERE in_stock = true ORDER BY id')
    
    rows = cursor.fetchall()
    
    products = []
    for row in rows:
        products.append({
            'id': row[0],
            'name': row[1],
            'price': row[2],
            'image': row[3],
            'category': row[4] or 'Косметика',
            'inStock': row[5],
            'description': row[6] or ''
        })
    
    cursor.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps(products)
    }