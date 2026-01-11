import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const Help = () => {
  const [cartItems, setCartItems] = useState<Array<{id: number; name: string; brand: string; price: string; image: string; quantity: number}>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

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

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const faqSections = [
    {
      id: "how-to-choose",
      question: "Как выбрать товар?",
      answer: "В каталоге товары удобно разбиты по категориям: по способу применения (маски, кремы, сыворотки) и по линейкам продуктов (REEDLE SHOT, PDRN, CICA). Вы можете воспользоваться поиском или фильтрами для быстрого подбора нужного средства."
    },
    {
      id: "how-to-add-cart",
      question: "Как сформировать заказ?",
      answer: "Для добавления товара в корзину нажмите кнопку «В корзину» на карточке товара. При наведении на товар эта кнопка появляется поверх изображения. Вы можете изменить количество товаров прямо в корзине с помощью кнопок «+» и «−»."
    },
    {
      id: "how-to-checkout",
      question: "Как оформить заказ?",
      answer: "Оформление заказа происходит в три этапа:\n1. Выберите способ доставки (курьер, пункт выдачи или самовывоз)\n2. Укажите контактные данные и адрес доставки\n3. Выберите способ оплаты (онлайн, при получении или для юр. лиц)"
    },
    {
      id: "how-to-pay",
      question: "Как оплатить заказ?",
      answer: "Доступны следующие способы оплаты:\n• Банковской картой онлайн (Visa, MasterCard, Мир)\n• Системой быстрых платежей (СБП)\n• Наличными курьеру при получении\n• По счету для юридических лиц с НДС"
    },
    {
      id: "how-to-track-order",
      question: "Как отследить заказ?",
      answer: "После оформления заказа вы получите SMS с трек-номером для отслеживания. Также информацию о статусе заказа можно посмотреть в личном кабинете в разделе «Мои заказы». Мы отправляем уведомления на каждом этапе доставки."
    },
    {
      id: "how-to-log-in",
      question: "Как войти в личный кабинет?",
      answer: "Для входа в личный кабинет используйте email и пароль, указанные при первом заказе. В личном кабинете вы можете отслеживать заказы, управлять подпиской на рассылку и просматривать историю покупок."
    },
    {
      id: "return-policy",
      question: "Правила возврата и обмена",
      answer: "В соответствии с законодательством РФ, косметические средства надлежащего качества обмену и возврату не подлежат. Если вы обнаружили производственный брак или повреждение товара, мы примем претензию в течение 14 дней с момента получения при условии целостности упаковки. Свяжитесь с нами по email info@vtcosmetic.ru для решения вопроса."
    }
  ];

  const productLines = [
    { name: "REEDLE SHOT", link: "/catalog?line=REEDLE%20SHOT" },
    { name: "PDRN", link: "/catalog?line=PDRN" },
    { name: "CICA", link: "/catalog?line=CICA" },
    { name: "GLUCAMUNE", link: "/catalog?line=GLUCAMUNE" },
    { name: "TX-TONING", link: "/catalog?line=TX-TONING" },
    { name: "JUMBO SOLUTION", link: "/catalog?line=JUMBO%20SOLUTION" },
    { name: "COLLAGEN PACT", link: "/catalog?line=COLLAGEN%20PACT" },
    { name: "SUPER HYALON", link: "/catalog?line=SUPER%20HYALON" },
    { name: "MILD REEDLE SHOT", link: "/catalog?line=MILD%20REEDLE%20SHOT" },
    { name: "PRO CICA", link: "/catalog?line=PRO%20CICA" }
  ];

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
          <h1 className="text-4xl font-bold mb-4">Помощь</h1>
          <p className="text-lg text-white/90">
            Ответы на часто задаваемые вопросы
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Часто задаваемые вопросы</h2>
              
              <div className="space-y-4">
                {faqSections.map((section) => (
                  <div 
                    key={section.id}
                    className="border border-vt-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-vt-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-vt-green-500 pr-4">
                        {section.question}
                      </h3>
                      <Icon 
                        name={openSection === section.id ? "ChevronUp" : "ChevronDown"} 
                        size={24} 
                        className="text-vt-green-500 flex-shrink-0"
                      />
                    </button>
                    
                    {openSection === section.id && (
                      <div className="px-6 pb-6 text-vt-gray-700 whitespace-pre-line">
                        {section.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12" id="contact-form">
              <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Форма обратной связи</h2>
              <div className="bg-vt-gray-100 rounded-lg p-8">
                <p className="text-vt-gray-700 mb-6">
                  Есть вопросы? Заполните форму ниже, и мы свяжемся с вами в ближайшее время
                </p>
                
                <ContactForm />
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="border border-vt-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-vt-green-500">Линейки продукции</h3>
              <ul className="space-y-2">
                {productLines.map((line, index) => (
                  <li key={index}>
                    <Link 
                      to={line.link} 
                      className="text-sm text-vt-gray-700 hover:text-vt-green-500 transition-colors flex items-center gap-2 group"
                    >
                      <Icon name="ChevronRight" size={14} className="text-vt-green-500 opacity-0 group-hover:opacity-100 transition" />
                      {line.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-vt-green-500 text-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Нужна консультация?</h3>
              <p className="text-sm text-white/90 mb-4">
                Получите персональную программу ухода от наших специалистов
              </p>
              <Button 
                variant="outline" 
                className="w-full bg-white text-vt-green-500 hover:bg-white/90"
              >
                Заказать консультацию
              </Button>
            </div>

            <div className="border border-vt-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-vt-green-500">Полезные ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="text-vt-gray-700 hover:text-vt-green-500 transition-colors">
                    О магазине
                  </a>
                </li>
                <li>
                  <a href="/delivery" className="text-vt-gray-700 hover:text-vt-green-500 transition-colors">
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a href="/discounts" className="text-vt-gray-700 hover:text-vt-green-500 transition-colors">
                    Скидки и акции
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Help;