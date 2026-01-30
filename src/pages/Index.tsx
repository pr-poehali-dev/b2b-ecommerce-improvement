import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Cart from "@/components/Cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductLinesSidebar from "@/components/ProductLinesSidebar";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import func2url from '../../backend/func2url.json';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  description: string;
}

const Index = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart: addToCartContext, updateQuantity, removeItem, getTotalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("bestsellers");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(func2url.products);
        const data = await response.json();
        setCatalogProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const categories = [
    { id: "bestsellers", name: "Бестселлеры" },
    { id: "new", name: "Новинки" },
    { id: "discounts", name: "Скидки" },
    { id: "popular", name: "Популярное" }
  ];

  const products = useMemo(() => {
    if (catalogProducts.length === 0) return [];
    
    const shuffled = [...catalogProducts].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 16);
    
    return selected.map((p, index) => {
      const categories = ['bestsellers', 'new', 'discounts', 'popular'];
      const assignedCategory = categories[index % categories.length];
      
      const hasDiscount = assignedCategory === 'discounts' ? true : Math.random() > 0.6;
      const discountPercent = hasDiscount ? [10, 15, 20, 25, 30][Math.floor(Math.random() * 5)] : 0;
      const oldPrice = hasDiscount ? Math.floor(p.price * (1 + discountPercent / 100)) : undefined;
      const rating = (4.5 + Math.random() * 0.5).toFixed(1);
      const reviews = Math.floor(Math.random() * 800) + 50;
      
      const isBestseller = p.price >= 2000;
      const badge = isBestseller ? 'Бестселлер' : undefined;
      
      return {
        id: p.id,
        name: p.name,
        brand: 'VT COSMETICS',
        description: p.description,
        price: p.price.toString(),
        oldPrice: oldPrice?.toString(),
        rating: parseFloat(rating),
        reviews,
        image: p.image,
        category: assignedCategory,
        badge: badge || undefined,
        discount: hasDiscount ? `-${discountPercent}%` : undefined
      };
    });
  }, [catalogProducts]);

  const brands = ["VT COSMETICS", "HOLY LAND", "GIGI", "Christina", "Anna Lotan", "Dermalogica"];

  const filteredProducts = selectedCategory === "bestsellers" 
    ? products 
    : selectedCategory === "discounts"
    ? products.filter(p => p.category === selectedCategory && p.oldPrice)
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: { id: number; name: string; brand: string; price: string; image: string }) => {
    addToCartContext({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: `${product.price} ₽`,
      image: product.image
    });
  };

  const catalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Каталог косметики VT Cosmetics",
    "numberOfItems": filteredProducts.length,
    "itemListElement": filteredProducts.slice(0, 8).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "brand": {
          "@type": "Brand",
          "name": "VT Cosmetics"
        },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "url": `https://vtcosmetic.ru/product/${product.id}`
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>VT Cosmetics - Официальный магазин корейской косметики | Купить с доставкой по России</title>
        <meta name="description" content="Магазин оригинальной косметики VT Cosmetics. Бустеры-сыворотки с микроиглами, PDRN, CICA. Гарантия качества. Быстрая доставка по всей России." />
        <meta property="og:title" content="VT Cosmetics - Официальный магазин корейской косметики" />
        <meta property="og:description" content="Оригинальная косметика VT Cosmetics с доставкой по России. Бестселлеры, новинки, скидки." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vtcosmetic.ru/" />
        <link rel="canonical" href="https://vtcosmetic.ru/" />
        <script type="application/ld+json">
          {JSON.stringify(catalogJsonLd)}
        </script>
      </Helmet>
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

          <div className="grid lg:grid-cols-[300px_1fr] gap-8">
            <aside className="hidden lg:block">
              <ProductLinesSidebar />
            </aside>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white border border-vt-gray-200 hover:border-vt-green-500 transition-all cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
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
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="Heart" size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>


        </div>
      </section>



      <section className="py-16 bg-vt-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">О магазине</h2>
          <p className="text-center text-vt-gray-600 max-w-3xl mx-auto mb-12">
            VTcosmetic — интернет-магазин профессиональной косметики. 
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