import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import Cart from "@/components/Cart";

const Consent = () => {
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
            <span className="text-white">Согласие на обработку персональных данных</span>
          </nav>
          <h1 className="text-4xl font-bold">Согласие на обработку персональных данных</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">Согласие субъекта персональных данных</h2>
            <p className="text-vt-gray-700 mb-4">
              Настоящим я, далее – «Субъект Персональных Данных», во исполнение требований 
              Федерального закона от 27.07.2006 г. № 152-ФЗ «О персональных данных» (с изменениями 
              и дополнениями) свободно, своей волей и в своем интересе даю свое согласие интернет-магазину 
              VTcosmetic (далее – «Оператор») на обработку своих персональных данных, указанных при 
              регистрации и/или оформлении заказа на сайте Оператора.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">1. Персональные данные</h2>
            <p className="text-vt-gray-700 mb-4">
              Под персональными данными я понимаю любую информацию, относящуюся ко мне как к 
              Субъекту Персональных Данных, в том числе:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Мои фамилия, имя, отчество;</li>
              <li>Контактный телефон;</li>
              <li>Адрес электронной почты;</li>
              <li>Адрес доставки;</li>
              <li>Информация о заказах и покупках.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">2. Цели обработки персональных данных</h2>
            <p className="text-vt-gray-700 mb-4">
              Согласие дано Оператору для совершения следующих действий с моими персональными данными:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Обработка заказов и осуществление доставки товаров;</li>
              <li>Предоставление информации об акциях, специальных предложениях и новых товарах;</li>
              <li>Улучшение качества обслуживания клиентов;</li>
              <li>Проведение статистических и иных исследований;</li>
              <li>Связь с покупателем для уточнения деталей заказа;</li>
              <li>Выполнение обязательств перед покупателем.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">3. Способы обработки персональных данных</h2>
            <p className="text-vt-gray-700 mb-4">
              Оператор осуществляет обработку моих персональных данных следующими способами:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Сбор, запись, систематизация, накопление, хранение;</li>
              <li>Уточнение (обновление, изменение);</li>
              <li>Извлечение, использование;</li>
              <li>Передача (предоставление, доступ) третьим лицам в целях исполнения обязательств;</li>
              <li>Обезличивание, блокирование, удаление, уничтожение.</li>
            </ul>
            <p className="text-vt-gray-700 mb-4">
              Обработка персональных данных осуществляется с использованием средств автоматизации 
              и без использования таких средств.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">4. Передача персональных данных</h2>
            <p className="text-vt-gray-700 mb-4">
              Я даю согласие на передачу моих персональных данных третьим лицам в следующих случаях:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Для осуществления доставки заказанных товаров (курьерским службам);</li>
              <li>Для обработки платежей (платежным системам и банкам);</li>
              <li>В случаях, предусмотренных законодательством РФ.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">5. Срок действия согласия</h2>
            <p className="text-vt-gray-700 mb-4">
              Настоящее согласие действует с момента его предоставления и в течение всего периода 
              использования сайта и сервисов Оператора. Согласие может быть отозвано мною в любой 
              момент путем направления письменного уведомления Оператору по адресу: 
              <a href="mailto:info@cosmeticstar.ru" className="text-vt-green-500 hover:underline ml-1">
                info@cosmeticstar.ru
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">6. Права субъекта персональных данных</h2>
            <p className="text-vt-gray-700 mb-4">
              Я подтверждаю, что проинформирован о следующих правах:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Право на получение информации, касающейся обработки моих персональных данных;</li>
              <li>Право на уточнение, блокирование или уничтожение персональных данных;</li>
              <li>Право на отзыв настоящего согласия;</li>
              <li>Право на обжалование действий или бездействия Оператора в уполномоченный орган 
              по защите прав субъектов персональных данных или в судебном порядке.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">7. Подтверждение</h2>
            <p className="text-vt-gray-700 mb-4">
              Я подтверждаю, что ознакомлен с положениями Федерального закона от 27.07.2006 г. 
              № 152-ФЗ «О персональных данных», права и обязанности в области защиты персональных 
              данных мне разъяснены.
            </p>
            <p className="text-vt-gray-700 mb-4">
              Оформляя заказ или регистрируясь на сайте интернет-магазина VTcosmetic, я подтверждаю 
              свое согласие с условиями обработки персональных данных.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consent;
