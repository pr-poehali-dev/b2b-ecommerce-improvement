import { useState } from "react";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Discounts = () => {
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
          <h1 className="text-4xl font-bold mb-4">Накопительная система скидок</h1>
          <p className="text-lg text-white/90">
            Экономьте больше с каждой покупкой
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <div className="bg-gradient-to-r from-vt-green-500 to-vt-green-600 text-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Ваша скидка никогда не сгорает!</h2>
              <p className="text-lg text-white/90">
                Совершайте покупки и получайте постоянную скидку на все последующие заказы
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Уровни накопительной скидки</h2>
            
            <div className="space-y-4">
              <div className="border-2 border-vt-green-500 rounded-lg p-6 bg-vt-green-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-vt-green-500">5% скидка</h3>
                  <Icon name="Award" size={32} className="text-vt-green-500" />
                </div>
                <p className="text-lg font-semibold mb-2">от 15 000 ₽</p>
                <p className="text-sm text-vt-gray-700">
                  Сделайте первую покупку на сумму от 15 000 рублей и получите постоянную скидку 5%
                </p>
              </div>

              <div className="border-2 border-vt-green-500 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-vt-green-500">7% скидка</h3>
                  <Icon name="Award" size={32} className="text-vt-green-500" />
                </div>
                <p className="text-lg font-semibold mb-2">от 30 000 ₽</p>
                <p className="text-sm text-vt-gray-700">
                  При сумме покупок 30 000 рублей ваша скидка увеличивается до 7%
                </p>
              </div>

              <div className="border-2 border-vt-green-500 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-vt-green-500">10% скидка</h3>
                  <Icon name="Award" size={32} className="text-vt-green-500" />
                </div>
                <p className="text-lg font-semibold mb-2">от 45 000 ₽</p>
                <p className="text-sm text-vt-gray-700">
                  Накопите 45 000 рублей покупок и получите скидку 10%
                </p>
              </div>

              <div className="border-2 border-vt-green-500 rounded-lg p-6 bg-amber-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-vt-green-500">13% скидка</h3>
                  <Icon name="Star" size={32} className="text-amber-500" />
                </div>
                <p className="text-lg font-semibold mb-2">от 75 000 ₽</p>
                <p className="text-sm text-vt-gray-700">
                  VIP-уровень с увеличенной скидкой 13% для наших постоянных клиентов
                </p>
              </div>

              <div className="border-2 border-amber-500 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-amber-600">16% скидка</h3>
                  <Icon name="Crown" size={32} className="text-amber-500" />
                </div>
                <p className="text-lg font-semibold mb-2">от 120 000 ₽</p>
                <p className="text-sm text-vt-gray-700">
                  Максимальная скидка 16% для самых преданных покупателей
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Дополнительные преимущества</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Gift" size={28} className="text-vt-green-500" />
                  <h3 className="font-semibold text-lg">Скидка в день рождения</h3>
                </div>
                <p className="text-sm text-vt-gray-700 mb-3">
                  Получите дополнительную персональную скидку в свой день рождения:
                </p>
                <ul className="text-sm text-vt-gray-700 space-y-1">
                  <li>• Накопительная скидка 5-7%: <strong>+10%</strong></li>
                  <li>• Накопительная скидка 10-13%: <strong>+15%</strong></li>
                  <li>• Накопительная скидка 16%: <strong>+20%</strong></li>
                </ul>
                <p className="text-xs text-vt-gray-600 mt-3">
                  Действует 4 дня до и 4 дня после дня рождения
                </p>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Tag" size={28} className="text-vt-green-500" />
                  <h3 className="font-semibold text-lg">Промокоды</h3>
                </div>
                <p className="text-sm text-vt-gray-700">
                  Используйте промокоды для получения дополнительных скидок или подарков к заказу. 
                  Промокоды можно суммировать с накопительной скидкой.
                </p>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Users" size={28} className="text-vt-green-500" />
                  <h3 className="font-semibold text-lg">Партнерская сеть</h3>
                </div>
                <p className="text-sm text-vt-gray-700">
                  Делитесь персональными промокодами с друзьями. Ваши друзья получают скидку, 
                  а вы накапливаете бонусы быстрее.
                </p>
              </div>

              <div className="border border-vt-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Mail" size={28} className="text-vt-green-500" />
                  <h3 className="font-semibold text-lg">Еженедельные акции</h3>
                </div>
                <p className="text-sm text-vt-gray-700">
                  Подпишитесь на рассылку и получайте уведомления о скидках 10% на отдельные 
                  группы товаров каждую неделю.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-vt-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Info" size={24} className="text-vt-green-500" />
                Как работает система
              </h3>
              <ul className="space-y-3 text-sm text-vt-gray-700">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Скидка рассчитывается от общей суммы всех ваших покупок</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Система работает в 13 интернет-магазинах партнерской сети</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Скидка автоматически применяется при оформлении заказа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Вы можете отслеживать накопленную сумму в личном кабинете</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-vt-green-500 mt-1 flex-shrink-0" />
                  <span>Полученная скидка сохраняется навсегда</span>
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

export default Discounts;