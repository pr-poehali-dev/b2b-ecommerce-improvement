import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Cart from "@/components/Cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const { cartItems, addToCart: addToCartContext, updateQuantity, removeItem, getTotalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("bestsellers");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const categories = [
    { id: "bestsellers", name: "Бестселлеры" },
    { id: "new", name: "Новинки" },
    { id: "discounts", name: "Скидки" },
    { id: "popular", name: "Популярное" }
  ];

  const products = [
    {
      id: 1,
      name: "Reedle Shot 100",
      brand: "VT COSMETICS",
      description: "Ежедневный ночной уход",
      price: "2 560",
      oldPrice: "3 200",
      rating: 4.9,
      reviews: 999,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/8c617bf9-36ee-4afb-a3d9-eb9b6b3d1237.jpg",
      category: "bestsellers",
      badge: "Tarzan PICK",
      discount: "-20%"
    },
    {
      id: 2,
      name: "PDRN Essence 100",
      brand: "VT COSMETICS",
      description: "Веганская эссенция с экстрактом дикого женьшеня",
      price: "3 150",
      oldPrice: "4 500",
      rating: 4.8,
      reviews: 453,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/a78561a5-4849-47c2-89ef-a7dd842753e8.jpg",
      category: "bestsellers",
      badge: "Annie PICK",
      discount: "-30%"
    },
    {
      id: 3,
      name: "PDRN Capsule Cream 100",
      brand: "VT COSMETICS",
      description: "PDRN капсулы + увлажняющий гель-крем",
      price: "2 720",
      oldPrice: "3 400",
      rating: 4.7,
      reviews: 66,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/4c0bdd45-785c-47af-8dfc-990696789aab.jpg",
      category: "bestsellers",
      badge: "Youngseo PICK",
      discount: "-20%"
    },
    {
      id: 4,
      name: "Glucamune Mask",
      brand: "VT COSMETICS",
      description: "Длительное увлажнение и ежедневное успокоение",
      price: "170",
      oldPrice: "200",
      rating: 4.8,
      reviews: 5,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/a42b157c-b9f3-4728-a8cb-911dcf02459d.jpg",
      category: "bestsellers",
      badge: "Бестселлер",
      discount: "-15%"
    },
    {
      id: 5,
      name: "Cica Collagen Vibrating Eye Cream",
      brand: "VT COSMETICS",
      description: "До 12 000 микровибраций в минуту",
      price: "2 900",
      rating: 4.6,
      reviews: 87,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/3ce23259-3d5f-41b7-9f0f-3112dd1a3b98.jpg",
      category: "new",
      badge: "Новинка"
    },
    {
      id: 6,
      name: "Reedle Shot 300",
      brand: "VT COSMETICS",
      description: "Интенсивный ночной уход",
      price: "3 200",
      oldPrice: "4 000",
      rating: 4.9,
      reviews: 542,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/117d0fcb-aea5-4eb0-8828-3513856d8d8c.jpg",
      category: "bestsellers",
      badge: "Бестселлер",
      discount: "-20%"
    },
    {
      id: 7,
      name: "TX-TONING Toner",
      brand: "VT COSMETICS",
      description: "Ежедневное тонирование",
      price: "1 800",
      oldPrice: "2 200",
      rating: 4.7,
      reviews: 234,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/3a9f4077-4a29-45b7-8f01-95dd5b39445a.jpg",
      category: "discounts",
      discount: "-18%"
    },
    {
      id: 8,
      name: "GLUCAMUNE Water Glow Serum",
      brand: "VT COSMETICS",
      description: "Низкораздражающий увлажняющий уход",
      price: "2 400",
      rating: 4.9,
      reviews: 142,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/3f944756-0933-4258-8a18-ec51ce854c21.jpg",
      category: "new",
      badge: "Новинка"
    },
    {
      id: 9,
      name: "Cica Daily Soothing Mask",
      brand: "VT COSMETICS",
      description: "Ежедневное успокоение и увлажнение",
      price: "150",
      oldPrice: "180",
      rating: 4.8,
      reviews: 321,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/a061e003-a7fd-4d45-bd94-f1ae568502a7.jpg",
      category: "bestsellers",
      discount: "-17%"
    },
    {
      id: 10,
      name: "Reedle Shot 700",
      brand: "VT COSMETICS",
      description: "Максимальная интенсивность",
      price: "4 000",
      oldPrice: "5 000",
      rating: 4.9,
      reviews: 267,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/3b07222c-b397-4ec5-a1fc-30e87172a5b7.jpg",
      category: "new",
      badge: "Новинка",
      discount: "-20%"
    },
    {
      id: 11,
      name: "PDRN 100 Sun Cream",
      brand: "VT COSMETICS",
      description: "Солнцезащитный крем с PDRN",
      price: "1 900",
      rating: 4.7,
      reviews: 98,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/cc62f59c-8382-4a98-adab-03709064c8c5.jpg",
      category: "popular"
    },
    {
      id: 12,
      name: "Cica Cleansing Foam",
      brand: "VT COSMETICS",
      description: "Мягкая очищающая пенка",
      price: "1 200",
      oldPrice: "1 500",
      rating: 4.6,
      reviews: 445,
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/96f5df3e-3566-4963-bf2b-c480529c4739.jpg",
      category: "discounts",
      badge: "Скидка",
      discount: "-20%"
    }
  ];

  const brands = ["VT COSMETICS", "HOLY LAND", "GIGI", "Christina", "Anna Lotan", "Dermalogica"];

  const filteredProducts = selectedCategory === "bestsellers" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: typeof products[0]) => {
    addToCartContext({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: `${product.price} ₽`,
      image: product.image
    });
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
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />


      <section className="py-12 bg-vt-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-sm font-medium pb-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'text-vt-green-500 border-b-2 border-vt-green-500'
                    : 'text-vt-gray-600 hover:text-vt-green-500'
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
                className="group bg-white border border-vt-gray-200 hover:border-vt-green-500 transition-all cursor-pointer"
              >
                <div className="relative aspect-square bg-vt-gray-100 overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 z-10 bg-vt-green-500 text-white text-xs">
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
                    <Button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-vt-green-500 hover:bg-vt-green-600 text-white text-sm"
                    >
                      В корзину
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-xs text-vt-gray-600 mb-1">{product.brand}</div>
                  <h3 className="text-sm font-medium text-vt-green-500 mb-2 line-clamp-2">
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
                      <div className="text-lg font-semibold text-vt-green-500">
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
              className="border-vt-green-500 text-vt-green-500 hover:bg-vt-green-600 hover:text-white"
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
                className="flex items-center justify-center p-8 border border-vt-gray-200 hover:border-vt-green-500 transition cursor-pointer"
              >
                <span className="text-sm font-medium text-vt-green-500 text-center">{brand}</span>
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
              <div className="w-16 h-16 bg-vt-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={28} />
              </div>
              <h3 className="font-semibold mb-2">100% оригинал</h3>
              <p className="text-sm text-vt-gray-600">Только сертифицированная продукция</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vt-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-vt-gray-600">По всей России от 1 дня</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vt-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Подарки</h3>
              <p className="text-sm text-vt-gray-600">Бонусы и акции для клиентов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vt-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="flex-1 border-vt-gray-300 focus:border-vt-green-500"
              />
              <Button className="bg-vt-green-500 hover:bg-vt-green-600 text-white px-8">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;