import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import ProductLinesSidebar from "@/components/ProductLinesSidebar";
import func2url from '../../backend/func2url.json';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock?: boolean;
  description: string;
}

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 10000 });
  const { cartItems, addToCart: addToCartContext, updateQuantity, removeItem, getTotalItems } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(func2url.products);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const lineParam = searchParams.get('line');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (lineParam) {
      setSelectedCategory(lineParam);
    }
  }, [searchParams]);

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    addToCartContext({
      id: product.id,
      name: product.name,
      brand: "VT Cosmetics",
      price: `${product.price} ₽`,
      image: product.image
    });
  };

  const searchQuery = searchParams.get('search');
  const lineQuery = searchParams.get('line');

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://vtcosmetic.ru/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Каталог",
        "item": "https://vtcosmetic.ru/catalog"
      }
    ]
  };
  
  const filteredProducts = products.filter(product => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    if (lineQuery && !product.name.toUpperCase().includes(lineQuery.toUpperCase())) return false;
    if (selectedCategory && product.category !== selectedCategory && product.name.toUpperCase().includes(selectedCategory.toUpperCase()) === false) return false;
    if (product.price < priceRange.min || product.price > priceRange.max) return false;
    return true;
  });



  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange({ min: 0, max: 10000 });
    window.history.replaceState({}, '', '/catalog');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Каталог корейской косметики VT Cosmetics | Оригинальная продукция с доставкой</title>
        <meta name="description" content="Купить оригинальную корейскую косметику VT Cosmetics в России. Большой выбор сывороток, кремов, масок. Гарантия подлинности, быстрая доставка. ☎️ Консультация специалиста" />
        <link rel="canonical" href="https://vtcosmetic.ru/catalog" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
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

      <div className="bg-vt-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-4 text-white/80">
            <Link to="/" className="hover:text-white transition">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-white">Каталог</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">
            {searchQuery ? `Результаты поиска: "${searchQuery}"` : selectedCategory || 'Каталог товаров'}
          </h1>
          <p className="text-lg text-white/90">
            {searchQuery 
              ? `Найдено товаров: ${filteredProducts.length}`
              : 'Полный ассортимент косметики VT Cosmetics'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6">
            <div className="border border-vt-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-vt-green-500">Фильтры</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-xs text-vt-gray-600 hover:text-vt-green-500"
                >
                  Сбросить
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3 text-vt-green-500">Категории</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
                          className="w-4 h-4 text-vt-green-500 border-vt-gray-300 focus:ring-vt-green-500"
                        />
                        <span className="text-sm text-vt-gray-700 group-hover:text-vt-green-500 transition">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-vt-gray-200 pt-6">
                  <h4 className="font-medium mb-3 text-vt-green-500">Цена</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                        className="w-full px-3 py-2 border border-vt-gray-300 rounded text-sm"
                        placeholder="От"
                      />
                      <span className="text-vt-gray-500">—</span>
                      <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                        className="w-full px-3 py-2 border border-vt-gray-300 rounded text-sm"
                        placeholder="До"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductLinesSidebar />
          </aside>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-vt-gray-600">
                Найдено товаров: <span className="font-semibold text-vt-green-500">{filteredProducts.length}</span>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <Icon name="Package" size={64} className="mx-auto text-vt-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-vt-gray-700 mb-2">Товары не найдены</h3>
                <p className="text-vt-gray-600 mb-6">Попробуйте изменить параметры фильтрации</p>
                <Button onClick={clearFilters} className="bg-vt-green-500 hover:bg-vt-green-600">
                  Сбросить фильтры
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white border border-vt-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-square overflow-hidden bg-vt-gray-50">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    
                    <div className="p-4">
                      <div className="text-xs text-vt-gray-500 mb-1">{product.category}</div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold text-vt-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] hover:text-vt-green-500 transition">
                          {product.name}
                        </h3>
                      </Link>
                      {product.description && (
                        <p className="text-xs text-vt-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-xl font-bold text-vt-green-500">
                            {product.price.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-full bg-vt-green-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-vt-green-600 transition"
                      >
                        <Icon name="ShoppingCart" size={18} />
                        В корзину
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;