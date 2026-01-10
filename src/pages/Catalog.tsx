import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { products, productLines, categories } from "@/data/products";
import { useCatalogFilters } from "@/hooks/useCatalogFilters";

const Catalog = () => {
  const [cartItems, setCartItems] = useState<Array<{id: number; name: string; brand: string; price: string; image: string; quantity: number}>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { selectedCategory, selectedLine, setSelectedCategory, setSelectedLine } = useCatalogFilters();
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 10000 });
  const [showNewOnly, setShowNewOnly] = useState(false);

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

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      updateQuantity(productId, existingItem.quantity + 1);
    } else {
      setCartItems(prev => [...prev, {
        id: product.id,
        name: product.name,
        brand: "VT Cosmetics",
        price: `${product.price} ₽`,
        image: product.image,
        quantity: 1
      }]);
    }
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedLine && product.line !== selectedLine) return false;
    if (product.price < priceRange.min || product.price > priceRange.max) return false;
    if (showNewOnly && !product.isNew) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedLine(null);
    setPriceRange({ min: 0, max: 10000 });
    setShowNewOnly(false);
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
          <nav className="flex items-center gap-2 text-sm mb-4 text-white/80">
            <Link to="/" className="hover:text-white transition">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-white">Каталог</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Каталог товаров</h1>
          <p className="text-lg text-white/90">
            Полный ассортимент косметики VT Cosmetics
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
                  <h4 className="font-medium mb-3 text-vt-green-500">Линейки продукции</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {productLines.map((line) => (
                      <label key={line} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="line"
                          checked={selectedLine === line}
                          onChange={() => setSelectedLine(selectedLine === line ? null : line)}
                          className="w-4 h-4 text-vt-green-500 border-vt-gray-300 focus:ring-vt-green-500"
                        />
                        <span className="text-sm text-vt-gray-700 group-hover:text-vt-green-500 transition">
                          {line}
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

                <div className="border-t border-vt-gray-200 pt-6">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={showNewOnly}
                      onChange={(e) => setShowNewOnly(e.target.checked)}
                      className="w-4 h-4 text-vt-green-500 border-vt-gray-300 focus:ring-vt-green-500 rounded"
                    />
                    <span className="text-sm text-vt-gray-700 group-hover:text-vt-green-500 transition">
                      Только новинки
                    </span>
                  </label>
                </div>
              </div>
            </div>
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
                    <div className="relative aspect-square overflow-hidden bg-vt-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <div className="absolute top-3 left-3 bg-vt-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          NEW
                        </div>
                      )}
                      <button
                        onClick={() => addToCart(product.id)}
                        className="absolute inset-x-4 bottom-4 bg-vt-green-500 text-white py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-medium hover:bg-vt-green-600"
                      >
                        <Icon name="ShoppingCart" size={18} />
                        В корзину
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <div className="text-xs text-vt-gray-500 mb-1">{product.line}</div>
                      <h3 className="font-semibold text-vt-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </h3>
                      <p className="text-xs text-vt-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-vt-gray-500">{product.volume}</div>
                          <div className="text-xl font-bold text-vt-green-500">
                            {product.price.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                      </div>
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