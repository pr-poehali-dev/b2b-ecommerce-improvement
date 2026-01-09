import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("bestsellers");
  const [cartCount, setCartCount] = useState(3);

  const topMenu = [
    { name: "Доставка и оплата", href: "#delivery" },
    { name: "Отслеживание заказа", href: "#tracking" },
    { name: "Помощь", href: "#help" },
    { name: "Скидки", href: "#discounts" },
    { name: "О магазине", href: "#about" },
    { name: "Отзывы", href: "#reviews" }
  ];

  const catalogMenu = [
    { name: "Уход за лицом", icon: "Sparkles" },
    { name: "Уход за телом", icon: "Heart" },
    { name: "Уход за волосами", icon: "Scissors" },
    { name: "Макияж", icon: "Palette" },
    { name: "Ногти", icon: "Hand" },
    { name: "Профессиональная косметика", icon: "Award" }
  ];

  const categories = [
    { id: "bestsellers", name: "Бестселлеры" },
    { id: "new", name: "Новинки" },
    { id: "discounts", name: "Скидки" },
    { id: "popular", name: "Популярное" }
  ];

  const products = [
    {
      id: 1,
      name: "REEDLE SHOT 100",
      brand: "VT COSMETICS",
      price: "4 200",
      oldPrice: "4 900",
      rating: 4.8,
      reviews: 156,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "bestsellers",
      badge: "Бестселлер",
      discount: "-15%"
    },
    {
      id: 2,
      name: "CICA Cream",
      brand: "VT COSMETICS",
      price: "3 500",
      rating: 4.9,
      reviews: 203,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "bestsellers",
      badge: "Бестселлер"
    },
    {
      id: 3,
      name: "PDRN Essence",
      brand: "VT COSMETICS",
      price: "5 800",
      oldPrice: "6 500",
      rating: 4.7,
      reviews: 89,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "new",
      badge: "Новинка",
      discount: "-10%"
    },
    {
      id: 4,
      name: "Увлажняющая сыворотка",
      brand: "HOLY LAND",
      price: "4 600",
      rating: 4.6,
      reviews: 124,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "bestsellers"
    },
    {
      id: 5,
      name: "Ночной крем",
      brand: "GIGI",
      price: "3 900",
      rating: 4.5,
      reviews: 98,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "bestsellers"
    },
    {
      id: 6,
      name: "TX-TONING Toner",
      brand: "VT COSMETICS",
      price: "2 800",
      rating: 4.8,
      reviews: 167,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "bestsellers",
      badge: "Бестселлер"
    },
    {
      id: 7,
      name: "Пилинг для лица",
      brand: "HOLY LAND",
      price: "5 200",
      oldPrice: "6 000",
      rating: 4.7,
      reviews: 76,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "discounts",
      discount: "-13%"
    },
    {
      id: 8,
      name: "GLUCAMUNE Serum",
      brand: "VT COSMETICS",
      price: "4 900",
      rating: 4.9,
      reviews: 142,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/b8ca7a44-0c89-4db7-afe8-38f950108058.jpg",
      category: "new",
      badge: "Новинка"
    }
  ];

  const brands = ["VT COSMETICS", "HOLY LAND", "GIGI", "Christina", "Anna Lotan", "Dermalogica"];

  const filteredProducts = selectedCategory === "bestsellers" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-vt-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs">
            <nav className="flex items-center gap-6">
              {topMenu.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="text-vt-gray-600 hover:text-vt-black transition"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a href="mailto:info@cosmeticstar.ru" className="text-vt-gray-600 hover:text-vt-black transition">
                info@cosmeticstar.ru
              </a>
              <Button variant="ghost" size="sm" className="text-xs">
                Вход / Регистрация
              </Button>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-vt-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" className="text-vt-black" size={28} />
                <div className="font-semibold text-xl tracking-tight">VT COSMETICS</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Button 
                    variant="outline" 
                    className="border-vt-black text-vt-black hover:bg-vt-black hover:text-white"
                    onMouseEnter={() => setShowCatalog(true)}
                    onMouseLeave={() => setShowCatalog(false)}
                  >
                    <Icon name="Menu" className="mr-2" size={18} />
                    Каталог
                  </Button>
                  
                  {showCatalog && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-white border border-vt-gray-300 shadow-lg"
                      onMouseEnter={() => setShowCatalog(true)}
                      onMouseLeave={() => setShowCatalog(false)}
                    >
                      {catalogMenu.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center gap-3 px-6 py-3 hover:bg-vt-gray-100 transition"
                        >
                          <Icon name={item.icon} size={20} className="text-vt-gray-600" />
                          <span className="text-sm">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <Button variant="ghost" className="text-vt-black">
                  Бренды
                </Button>
              </div>
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Input 
                  placeholder="Поиск товаров..."
                  className="pr-10 border-vt-gray-300 focus:border-vt-black"
                />
                <Icon 
                  name="Search" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-vt-gray-600" 
                  size={18} 
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={22} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-vt-black text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={22} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-vt-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-sm font-medium pb-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'text-vt-black border-b-2 border-vt-black'
                    : 'text-vt-gray-600 hover:text-vt-black'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white border border-vt-gray-200 hover:border-vt-black transition-all cursor-pointer"
              >
                <div className="relative aspect-square bg-vt-gray-100 overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 z-10 bg-vt-black text-white text-xs">
                      {product.badge}
                    </Badge>
                  )}
                  {product.discount && (
                    <Badge className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs">
                      {product.discount}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full bg-vt-black hover:bg-vt-gray-800 text-white text-sm">
                      В корзину
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-xs text-vt-gray-600 mb-1">{product.brand}</div>
                  <h3 className="text-sm font-medium text-vt-black mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          size={12}
                          className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-vt-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-vt-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-vt-black">
                        {product.price} ₽
                      </div>
                      {product.oldPrice && (
                        <div className="text-xs text-vt-gray-500 line-through">
                          {product.oldPrice} ₽
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-vt-gray-100"
                    >
                      <Icon name="Heart" size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-vt-black text-vt-black hover:bg-vt-black hover:text-white"
            >
              Показать ещё
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Популярные бренды</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-8 border border-vt-gray-200 hover:border-vt-black transition cursor-pointer"
              >
                <span className="text-sm font-medium text-vt-black text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-vt-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">О магазине</h2>
          <p className="text-center text-vt-gray-600 max-w-3xl mx-auto mb-12">
            Cosmetic Star — официальный дистрибьютор профессиональной косметики. 
            Мы работаем только с оригинальной продукцией от проверенных производителей.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vt-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={28} />
              </div>
              <h3 className="font-semibold mb-2">100% оригинал</h3>
              <p className="text-sm text-vt-gray-600">Только сертифицированная продукция</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vt-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-vt-gray-600">По всей России от 1 дня</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vt-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Подарки</h3>
              <p className="text-sm text-vt-gray-600">Бонусы и акции для клиентов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vt-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-sm text-vt-gray-600">Консультации специалистов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Подписка на рассылку</h2>
            <p className="text-vt-gray-600 mb-8">
              Получайте информацию о новинках и специальных предложениях
            </p>
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 border-vt-gray-300 focus:border-vt-black"
              />
              <Button className="bg-vt-black hover:bg-vt-gray-800 text-white px-8">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-vt-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="font-semibold text-lg">VT COSMETICS</span>
              </div>
              <p className="text-sm text-vt-gray-400">
                Официальный дистрибьютор профессиональной косметики премиум-класса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-vt-gray-400">
                <li><a href="#" className="hover:text-white transition">О компании</a></li>
                <li><a href="#" className="hover:text-white transition">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition">Возврат товара</a></li>
                <li><a href="#" className="hover:text-white transition">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-vt-gray-400">
                <li><a href="#" className="hover:text-white transition">Уход за лицом</a></li>
                <li><a href="#" className="hover:text-white transition">Уход за телом</a></li>
                <li><a href="#" className="hover:text-white transition">Уход за волосами</a></li>
                <li><a href="#" className="hover:text-white transition">Профессиональная косметика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-vt-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cosmeticstar.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Профессиональная, 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-vt-gray-800 flex items-center justify-between text-sm text-vt-gray-400">
            <p>© 2024 VT Cosmetics. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
