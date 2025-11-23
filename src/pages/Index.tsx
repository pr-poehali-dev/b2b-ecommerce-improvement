import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все товары" },
    { id: "face", name: "Уход за лицом" },
    { id: "body", name: "Уход за телом" },
    { id: "hair", name: "Уход за волосами" },
    { id: "professional", name: "Профессиональная косметика" }
  ];

  const products = [
    {
      id: 1,
      name: "Увлажняющая сыворотка",
      brand: "Luxury Cosmetics",
      price: "4 500",
      oldPrice: "5 200",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "face",
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "Питательный крем для лица",
      brand: "Professional Care",
      price: "3 800",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "face"
    },
    {
      id: 3,
      name: "Антивозрастной крем",
      brand: "Age Control",
      price: "6 200",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "face",
      badge: "Новинка"
    },
    {
      id: 4,
      name: "Масло для тела",
      brand: "Body Care Pro",
      price: "2 900",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "body"
    },
    {
      id: 5,
      name: "Восстанавливающая маска",
      brand: "Hair Expert",
      price: "3 400",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "hair"
    },
    {
      id: 6,
      name: "Профессиональный пилинг",
      brand: "Salon Line",
      price: "5 800",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "professional",
      badge: "Новинка"
    }
  ];

  const brands = [
    "Luxury Cosmetics",
    "Professional Care",
    "Age Control",
    "Body Care Pro",
    "Hair Expert",
    "Salon Line"
  ];

  const advantages = [
    {
      icon: "ShieldCheck",
      title: "Сертифицированная продукция",
      text: "Только оригинальная косметика от проверенных производителей"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      text: "Доставка по всей России. Москва — от 1 дня"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      text: "Консультация профессиональных косметологов"
    },
    {
      icon: "Gift",
      title: "Бонусная программа",
      text: "Накопительные скидки и подарки постоянным клиентам"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cosmetic-light">
      <header className="bg-white border-b border-cosmetic-beige sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <div>
                <div className="font-heading text-2xl font-bold text-cosmetic-dark">
                  COSMETIC STAR
                </div>
                <div className="text-xs text-cosmetic-gray">Профессиональная косметика</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <a href="#catalog" className="text-sm text-cosmetic-dark hover:text-primary transition">Каталог</a>
              <a href="#brands" className="text-sm text-cosmetic-dark hover:text-primary transition">Бренды</a>
              <a href="#about" className="text-sm text-cosmetic-dark hover:text-primary transition">О нас</a>
              <a href="#delivery" className="text-sm text-cosmetic-dark hover:text-primary transition">Доставка</a>
              <a href="#contacts" className="text-sm text-cosmetic-dark hover:text-primary transition">Контакты</a>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-cosmetic-cream via-white to-cosmetic-beige py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm text-primary font-medium">Космецевтика для профессионалов</span>
              </div>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-cosmetic-dark mb-6 leading-tight">
                Профессиональная косметика премиум-класса
              </h1>
              <p className="text-lg text-cosmetic-gray mb-8 leading-relaxed">
                Широкий ассортимент косметики для салонов красоты и профессионального использования. 
                Доставка по России, консультации специалистов, гарантия качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Перейти в каталог
                </Button>
                <Button size="lg" variant="outline" className="border-cosmetic-dark text-cosmetic-dark hover:bg-cosmetic-dark hover:text-white">
                  <Icon name="Phone" className="mr-2" size={18} />
                  8 (800) 333-03-45
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/02a91104-6689-471a-bca5-339b3e3f1dbd.jpg" 
                alt="Профессиональная косметика" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-cosmetic-beige">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={28} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cosmetic-dark">15+</div>
                    <div className="text-sm text-cosmetic-gray">лет на рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cosmetic-dark mb-4">
              Каталог продукции
            </h2>
            <p className="text-cosmetic-gray text-lg max-w-2xl mx-auto">
              Профессиональная косметика для салонов и домашнего ухода
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-cosmetic-cream text-cosmetic-dark hover:bg-cosmetic-beige'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-cosmetic-beige hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-square bg-cosmetic-cream">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <Icon name="Heart" size={18} />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-cosmetic-gray mb-2">{product.brand}</div>
                  <h3 className="font-semibold text-lg text-cosmetic-dark mb-4 group-hover:text-primary transition">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-cosmetic-dark">
                        {product.price} ₽
                      </div>
                      {product.oldPrice && (
                        <div className="text-sm text-cosmetic-gray line-through">
                          {product.oldPrice} ₽
                        </div>
                      )}
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Показать больше товаров
            </Button>
          </div>
        </div>
      </section>

      <section id="brands" className="py-20 bg-cosmetic-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cosmetic-dark mb-4">
              Премиальные бренды
            </h2>
            <p className="text-cosmetic-gray text-lg">
              Работаем только с проверенными производителями
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 flex items-center justify-center hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-cosmetic-beige rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition">
                    <Icon name="Sparkles" className="text-primary group-hover:text-white transition" size={24} />
                  </div>
                  <div className="text-xs font-medium text-cosmetic-dark">{brand}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/dd410016-8c0c-400b-8fd9-6dd97d8856ce.jpg" 
              alt="О нас" 
              className="rounded-3xl shadow-xl"
            />
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cosmetic-dark mb-6">
                Почему выбирают нас?
              </h2>
              <p className="text-cosmetic-gray text-lg mb-8 leading-relaxed">
                Cosmetic Star — лидер на рынке профессиональной косметики. Мы предлагаем 
                широкий ассортимент продукции для салонов красоты, спа-центров и домашнего ухода.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {advantages.map((adv, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={adv.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cosmetic-dark mb-2">{adv.title}</h4>
                      <p className="text-sm text-cosmetic-gray leading-relaxed">{adv.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-gradient-to-br from-cosmetic-beige to-cosmetic-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cosmetic-dark mb-6">
              Доставка и оплата
            </h2>
            <p className="text-cosmetic-gray text-lg mb-12">
              Удобные способы доставки и оплаты для вашего комфорта
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Truck" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl text-cosmetic-dark mb-3">Курьерская доставка</h3>
                <p className="text-cosmetic-gray">Доставка по Москве от 1 дня. По России 3-7 дней.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl text-cosmetic-dark mb-3">Пункты выдачи</h3>
                <p className="text-cosmetic-gray">Более 5000 пунктов выдачи по всей России.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CreditCard" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl text-cosmetic-dark mb-3">Удобная оплата</h3>
                <p className="text-cosmetic-gray">Онлайн, наличными или картой при получении.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cosmetic-dark mb-6">
              Подпишитесь на рассылку
            </h2>
            <p className="text-cosmetic-gray text-lg mb-8">
              Получайте новости о новинках и специальных предложениях
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 border-cosmetic-beige focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-cosmetic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={28} />
                <span className="font-heading text-xl font-bold">COSMETIC STAR</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Профессиональная косметика премиум-класса для салонов и домашнего ухода.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                  <Icon name="Instagram" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                  <Icon name="Facebook" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                  <Icon name="Youtube" size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition">Уход за лицом</a></li>
                <li><a href="#" className="hover:text-primary transition">Уход за телом</a></li>
                <li><a href="#" className="hover:text-primary transition">Уход за волосами</a></li>
                <li><a href="#" className="hover:text-primary transition">Профессиональная косметика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 333-03-45</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cosmeticstar.ru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>Москва, ул. Профессиональная, 25</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Пн-Вс: 9:00 - 21:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© 2024 Cosmetic Star. Все права защищены. Профессиональная косметика премиум-класса.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
