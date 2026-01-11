import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import Cart from "@/components/Cart";

const SalesRules = () => {
  const { cartItems, updateQuantity, removeItem, getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <div className="bg-vt-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-4 text-white/80">
            <Link to="/" className="hover:text-white transition">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-white">Правила продажи</span>
          </nav>
          <h1 className="text-4xl font-bold">Правила продажи товаров</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">1. Общие положения</h2>
            <p className="text-vt-gray-700 mb-4">
              Настоящие Правила регулируют отношения между интернет-магазином VTcosmetic 
              и покупателем, возникающие при покупке товаров через интернет-магазин. 
              Оформляя заказ, покупатель соглашается с условиями данных Правил.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">2. Оформление заказа</h2>
            <p className="text-vt-gray-700 mb-4">
              Заказ товара осуществляется покупателем через функционал интернет-магазина. 
              При оформлении заказа покупатель предоставляет следующую информацию:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Фамилия, имя, отчество покупателя;</li>
              <li>Адрес доставки товара;</li>
              <li>Контактный телефон;</li>
              <li>Адрес электронной почты (по желанию);</li>
              <li>Способ оплаты;</li>
              <li>Способ доставки.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">3. Цены и оплата</h2>
            <p className="text-vt-gray-700 mb-4">
              Цены на товары в интернет-магазине указаны в рублях РФ. Интернет-магазин имеет право 
              в одностороннем порядке изменять цены на товары. Стоимость уже оформленного и 
              подтвержденного заказа изменению не подлежит.
            </p>
            <p className="text-vt-gray-700 mb-4">
              Оплата товара производится одним из следующих способов:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Наличными курьеру при получении товара;</li>
              <li>Банковской картой на сайте;</li>
              <li>Банковским переводом на расчетный счет.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">4. Доставка</h2>
            <p className="text-vt-gray-700 mb-4">
              Доставка товара осуществляется по адресу, указанному покупателем при оформлении заказа. 
              Сроки доставки зависят от выбранного способа доставки и региона.
            </p>
            <p className="text-vt-gray-700 mb-4">
              При получении товара покупатель обязан:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Проверить внешний вид товара и его комплектность;</li>
              <li>Убедиться в соответствии товара заказу;</li>
              <li>Подписать документы о получении товара.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">5. Возврат и обмен товара</h2>
            <p className="text-vt-gray-700 mb-4">
              Возврат товара надлежащего качества возможен в течение 7 дней с момента получения, 
              если сохранены товарный вид, потребительские свойства, пломбы, ярлыки, а также 
              документы, подтверждающие факт покупки.
            </p>
            <p className="text-vt-gray-700 mb-4">
              Товар ненадлежащего качества может быть возвращен или обменян в течение гарантийного 
              срока при наличии производственного брака.
            </p>
            <p className="text-vt-gray-700 mb-4">
              Косметические и парфюмерные товары надлежащего качества обмену и возврату не подлежат 
              в соответствии с Постановлением Правительства РФ от 19.01.1998 №55.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">6. Гарантии</h2>
            <p className="text-vt-gray-700 mb-4">
              Интернет-магазин гарантирует соответствие товаров обязательным требованиям 
              законодательства РФ. Гарантийный срок на товар устанавливается производителем 
              и указывается на упаковке или в сопроводительной документации.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">7. Ответственность</h2>
            <p className="text-vt-gray-700 mb-4">
              Интернет-магазин не несет ответственности за убытки, возникшие в результате:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Неправильного использования товара покупателем;</li>
              <li>Действий третьих лиц;</li>
              <li>Непреодолимой силы.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">8. Контактная информация</h2>
            <p className="text-vt-gray-700 mb-4">
              По всем вопросам, связанным с продажей товаров, вы можете обратиться по адресу: 
              <a href="mailto:info@cosmeticstar.ru" className="text-vt-green-500 hover:underline ml-1">
                info@cosmeticstar.ru
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SalesRules;
