import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const About = () => {
  const navigate = useNavigate();
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
          <h1 className="text-4xl font-bold mb-4">О магазине VT Cosmetics</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Прямой договор с официальным дистрибьютором в России.
            Вся продукция имеет сертификаты качества.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">О бренде VT Cosmetics</h2>
            <div className="space-y-4 text-vt-gray-700">
              <p>
                VT Cosmetics — южнокорейский бренд профессиональной косметики, известный своими инновационными 
                разработками в области ухода за кожей. Компания основана на принципах научного подхода и 
                использования передовых технологий.
              </p>
              <p>
                Флагманская линейка REEDLE SHOT с запатентованной технологией микроигл произвела революцию 
                в домашнем уходе, обеспечивая профессиональный результат без визита в салон.
              </p>
              <p>
                Линия PDRN с экстрактом дикого женьшеня и ДНК лосося обеспечивает мощный anti-age эффект, 
                стимулируя регенерацию кожи на клеточном уровне.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Наши преимущества</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-vt-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">100% оригинал</h3>
                  <p className="text-sm text-vt-gray-600">
                    Прямые поставки от производителя с сертификатами подлинности
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-vt-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Truck" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                  <p className="text-sm text-vt-gray-600">
                    По всей России от 1 дня. Бесплатно от 8 000 ₽
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-vt-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Percent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Накопительная система скидок</h3>
                  <p className="text-sm text-vt-gray-600">
                    До 16% постоянным покупателям. Скидка никогда не сгорает
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-vt-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Headphones" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
                  <p className="text-sm text-vt-gray-600">
                    Консультации косметологов и помощь в подборе средств
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Основные линейки</h2>
            <div className="space-y-4">
              <div className="p-6 border border-vt-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">REEDLE SHOT</h3>
                <p className="text-sm text-vt-gray-700">
                  Инновационная серия с микроиглами CICA REEDLE для глубокого проникновения активных компонентов. 
                  Доступна в трех уровнях интенсивности: 100, 300, 700.
                </p>
              </div>

              <div className="p-6 border border-vt-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">PDRN</h3>
                <p className="text-sm text-vt-gray-700">
                  Премиальная anti-age линия с полидезоксирибонуклеотидом и экстрактом дикого женьшеня. 
                  Стимулирует регенерацию и повышает упругость кожи.
                </p>
              </div>

              <div className="p-6 border border-vt-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">CICA & GLUCAMUNE</h3>
                <p className="text-sm text-vt-gray-700">
                  Успокаивающие линии для чувствительной кожи с экстрактом центеллы азиатской и 
                  низкомолекулярной гиалуроновой кислотой.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-vt-green-500 mb-6">Контакты</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-vt-green-500" />
                <a href="mailto:info@cosmeticstar.ru" className="text-vt-green-500 hover:underline">
                  info@cosmeticstar.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-vt-green-500" />
                <span>Ежедневно с 9:00 до 21:00</span>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                onClick={() => navigate('/catalog')}
                className="bg-vt-green-500 hover:bg-vt-green-600 text-white"
              >
                Перейти в каталог
              </Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;