import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import Cart from "@/components/Cart";

const Privacy = () => {
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
            <span className="text-white">Политика конфиденциальности</span>
          </nav>
          <h1 className="text-4xl font-bold">Политика конфиденциальности</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">1. Общие положения</h2>
            <p className="text-vt-gray-700 mb-4">
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении 
              всей информации, которую интернет-магазин VTcosmetic, расположенный на доменном имени данного сайта, 
              может получить о Пользователе во время использования сайта интернет-магазина.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">2. Персональная информация пользователей</h2>
            <p className="text-vt-gray-700 mb-4">
              Под персональной информацией в данной Политике понимается:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Персональная информация, которую Пользователь предоставляет о себе самостоятельно при регистрации 
              или в процессе использования Сервисов, включая персональные данные Пользователя: имя, фамилия, 
              отчество, номер телефона, адрес электронной почты, адрес доставки товара.</li>
              <li>Данные, которые автоматически передаются Сервисами в процессе их использования с помощью 
              установленного на устройстве Пользователя программного обеспечения, в том числе IP-адрес, 
              информация из cookie, информация о браузере пользователя.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">3. Цели сбора и обработки персональной информации</h2>
            <p className="text-vt-gray-700 mb-4">
              Интернет-магазин собирает и хранит только те персональные данные, которые необходимы для:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Предоставления Сервисов, оказания услуг по доставке Товара;</li>
              <li>Обработки заказов Пользователя и осуществления обязательств;</li>
              <li>Связи с Пользователем при обработке запросов и заявок;</li>
              <li>Улучшения качества обслуживания и содержания сайта;</li>
              <li>Информирования о новых товарах и специальных предложениях (с согласия Пользователя).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">4. Условия обработки персональной информации</h2>
            <p className="text-vt-gray-700 mb-4">
              Интернет-магазин обрабатывает персональные данные Пользователя в следующих случаях:
            </p>
            <ul className="list-disc pl-6 text-vt-gray-700 mb-4 space-y-2">
              <li>Персональные данные являются общедоступными;</li>
              <li>Пользователь дал согласие на обработку своих персональных данных;</li>
              <li>Обработка необходима для исполнения договора, стороной которого является Пользователь;</li>
              <li>Обработка необходима для защиты жизни, здоровья или иных жизненно важных интересов субъекта персональных данных.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">5. Защита персональной информации</h2>
            <p className="text-vt-gray-700 mb-4">
              Интернет-магазин принимает необходимые организационные и технические меры для защиты 
              персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, 
              изменения, блокирования, копирования, распространения, а также от иных неправомерных действий 
              третьих лиц.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">6. Изменение Политики конфиденциальности</h2>
            <p className="text-vt-gray-700 mb-4">
              Интернет-магазин имеет право вносить изменения в настоящую Политику конфиденциальности. 
              При внесении изменений в актуальной редакции указывается дата последнего обновления. 
              Новая редакция Политики вступает в силу с момента ее размещения, если иное не предусмотрено 
              новой редакцией Политики.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-4">7. Обратная связь</h2>
            <p className="text-vt-gray-700 mb-4">
              Все предложения или вопросы по поводу настоящей Политики следует направлять по адресу: 
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

export default Privacy;
