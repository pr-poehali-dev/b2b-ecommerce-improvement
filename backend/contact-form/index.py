import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def handler(event: dict, context) -> dict:
    """
    Отправляет сообщение из формы обратной связи на почту администратора
    """
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
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
        print(f"Received contact form: {json.dumps(body)[:200]}")
        
        name = body.get('name', '')
        email = body.get('email', '')
        phone = body.get('phone', '')
        message = body.get('message', '')
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        print(f"SMTP config: host={smtp_host}, port={smtp_port}, user={smtp_user}, has_password={bool(smtp_password)}")
        
        if not all([smtp_host, smtp_user, smtp_password]):
            print("ERROR: SMTP settings missing!")
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP настройки не заполнены'})
            }

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Новое сообщение от {name}"
        msg['From'] = smtp_user
        msg['To'] = smtp_user

        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <h1 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
                        💬 Новое сообщение из формы обратной связи
                    </h1>
                    
                    <h2 style="color: #555; margin-top: 30px;">Контактная информация</h2>
                    <table style="width: 100%; background: white; border-radius: 5px; padding: 15px;">
                        <tr><td style="padding: 8px;"><strong>Имя:</strong></td><td>{name}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Email:</strong></td><td>{email}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Телефон:</strong></td><td>{phone}</td></tr>
                    </table>

                    <h2 style="color: #555; margin-top: 30px;">Сообщение</h2>
                    <div style="background: white; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
                        {message}
                    </div>

                    <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        Дата: {datetime.now().strftime('%d.%m.%Y %H:%M')}
                    </p>
                </div>
            </body>
        </html>
        """

        html_part = MIMEText(html_body, 'html', 'utf-8')
        msg.attach(html_part)

        print("Connecting to SMTP...")
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            print("STARTTLS success, logging in...")
            server.login(smtp_user, smtp_password)
            print("Login success, sending message...")
            server.send_message(msg)
        print("Email sent successfully!")

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Сообщение отправлено'})
        }

    except Exception as e:
        print(f"ERROR: {type(e).__name__}: {str(e)}")
        import traceback
        traceback.print_exc()
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
