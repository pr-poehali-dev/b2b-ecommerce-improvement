import { useState } from "react";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Delivery = () => {
  const [cartItems, setCartItems] = useState<Array<{id: number; name: string; brand: string; price: string; image: string; quantity: number}>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <div className="bg-vt-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Доставка и оплата</h1>
          <p className="text-lg text-white/90">
            Удобные способы получения и оплаты заказа
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Способы доставки</h2>
            
            <div className="space-y-6">
              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vt-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Курьерская доставка</h3>
                    <div className="space-y-2 text-sm text-vt-gray-700">
                      <p><strong>Москва и МО:</strong> 1-2 дня, 350 ₽ (бесплатно от 8 000 ₽)</p>
                      <p><strong>Санкт-Петербург:</strong> 2-3 дня, 400 ₽ (бесплатно от 8 000 ₽)</p>
                      <p><strong>Другие города РФ:</strong> 3-7 дней, от 450 ₽ (бесплатно от 8 000 ₽)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vt-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Package" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Пункты выдачи (СДЭК, Boxberry)</h3>
                    <div className="space-y-2 text-sm text-vt-gray-700">
                      <p><strong>По всей России:</strong> 3-7 дней</p>
                      <p><strong>Стоимость:</strong> от 250 ₽ (бесплатно от 8 000 ₽)</p>
                      <p>Более 15 000 пунктов выдачи по всей стране</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vt-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Store" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Самовывоз из магазина</h3>
                    <div className="space-y-2 text-sm text-vt-gray-700">
                      <p><strong>Бесплатно</strong></p>
                      <p>Москва, ул. Профессиональная, д. 1</p>
                      <p>Ежедневно с 10:00 до 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Способы оплаты</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="CreditCard" size={24} className="text-vt-green-500" />
                  <h3 className="font-semibold">Онлайн оплата</h3>
                </div>
                <p className="text-sm text-vt-gray-700">
                  Банковские карты Visa, MasterCard, Мир. Безопасная оплата через защищенное соединение.
                </p>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Banknote" size={24} className="text-vt-green-500" />
                  <h3 className="font-semibold">Наличными курьеру</h3>
                </div>
                <p className="text-sm text-vt-gray-700">
                  Оплата наличными при получении заказа. Доступно для курьерской доставки.
                </p>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Smartphone" size={24} className="text-vt-green-500" />
                  <h3 className="font-semibold">СБП (Система быстрых платежей)</h3>
                </div>
                <p className="text-sm text-vt-gray-700">
                  Мгновенные переводы через приложение вашего банка без комиссии.
                </p>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Building" size={24} className="text-vt-green-500" />
                  <h3 className="font-semibold">Для юридических лиц</h3>
                </div>
                <p className="text-sm text-vt-gray-700">
                  Оплата по счету с НДС. Предоставляем полный пакет закрывающих документов.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-vt-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Info" size={24} className="text-vt-green-500" />
                Важная информация
              </h3>
              <ul className="space-y-3 text-sm text-vt-gray-700">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Бесплатная доставка при заказе от 8 000 ₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Отправка в день заказа при оформлении до 14:00</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>SMS-уведомления о статусе доставки</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Возможность примерки при получении (проверка целостности упаковки)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Гарантия качества и подлинности товара</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;