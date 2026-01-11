import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def handler(event: dict, context) -> dict:
    """
    Отправляет информацию о заказе на почту администратора
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
        
        order_data = body.get('order', {})
        items = body.get('items', [])
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        if not all([smtp_host, smtp_user, smtp_password]):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP настройки не заполнены'})
            }

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Новый заказ от {order_data.get('firstName', '')} {order_data.get('lastName', '')}"
        msg['From'] = smtp_user
        msg['To'] = smtp_user

        items_html = ""
        total = 0
        for item in items:
            price = int(item.get('price', '0').replace('₽', '').replace(' ', '').strip())
            quantity = item.get('quantity', 1)
            item_total = price * quantity
            total += item_total
            items_html += f"""
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">{item.get('name', 'Неизвестный товар')}</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">{quantity} шт</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">{price} ₽</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">{item_total} ₽</td>
            </tr>
            """

        delivery_cost = order_data.get('deliveryCost', 0)
        final_total = total + delivery_cost

        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <h1 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
                        🛒 Новый заказ
                    </h1>
                    
                    <h2 style="color: #555; margin-top: 30px;">Контактная информация</h2>
                    <table style="width: 100%; background: white; border-radius: 5px; padding: 15px;">
                        <tr><td style="padding: 8px;"><strong>Имя:</strong></td><td>{order_data.get('firstName', '')} {order_data.get('lastName', '')}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Телефон:</strong></td><td>{order_data.get('phone', '')}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Email:</strong></td><td>{order_data.get('email', '')}</td></tr>
                    </table>

                    <h2 style="color: #555; margin-top: 30px;">Доставка</h2>
                    <table style="width: 100%; background: white; border-radius: 5px; padding: 15px;">
                        <tr><td style="padding: 8px;"><strong>Тип доставки:</strong></td><td>{order_data.get('deliveryType', '')}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Город:</strong></td><td>{order_data.get('city', '')}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Адрес:</strong></td><td>{order_data.get('address', '')}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Квартира:</strong></td><td>{order_data.get('apartment', '')}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Подъезд:</strong></td><td>{order_data.get('entrance', '')}</td></tr>
                        <tr><td style="padding: 8px;"><strong>Этаж:</strong></td><td>{order_data.get('floor', '')}</td></tr>
                    </table>

                    <h2 style="color: #555; margin-top: 30px;">Состав заказа</h2>
                    <table style="width: 100%; background: white; border-collapse: collapse;">
                        <thead>
                            <tr style="background-color: #22c55e; color: white;">
                                <th style="padding: 10px; text-align: left;">Товар</th>
                                <th style="padding: 10px; text-align: left;">Кол-во</th>
                                <th style="padding: 10px; text-align: left;">Цена</th>
                                <th style="padding: 10px; text-align: left;">Сумма</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items_html}
                            <tr>
                                <td colspan="3" style="padding: 10px; text-align: right; font-weight: bold;">Доставка:</td>
                                <td style="padding: 10px; font-weight: bold;">{delivery_cost} ₽</td>
                            </tr>
                            <tr style="background-color: #f0fdf4;">
                                <td colspan="3" style="padding: 15px; text-align: right; font-weight: bold; font-size: 18px;">ИТОГО:</td>
                                <td style="padding: 15px; font-weight: bold; font-size: 18px; color: #22c55e;">{final_total} ₽</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 style="color: #555; margin-top: 30px;">Способ оплаты</h2>
                    <p style="background: white; padding: 15px; border-radius: 5px;">{order_data.get('paymentMethod', '')}</p>

                    {f'<h2 style="color: #555; margin-top: 30px;">Комментарий</h2><p style="background: white; padding: 15px; border-radius: 5px;">{order_data.get("comment", "")}</p>' if order_data.get('comment') else ''}

                    <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        Дата заказа: {datetime.now().strftime('%d.%m.%Y %H:%M')}
                    </p>
                </div>
            </body>
        </html>
        """

        html_part = MIMEText(html_body, 'html', 'utf-8')
        msg.attach(html_part)

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заказ отправлен на почту'})
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
