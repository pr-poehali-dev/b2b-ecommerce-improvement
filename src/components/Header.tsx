import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { products as productsData } from "@/data/products";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showAccountDialog, setShowAccountDialog] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const allProducts = productsData.map(p => ({
    id: p.id,
    name: p.fullName,
    price: p.price,
    image: p.image,
    category: p.category,
    description: p.description
  }));

  const topMenu = [
    { name: "Доставка и оплата", href: "/delivery" },
    { name: "Помощь", href: "/help" },
    { name: "Скидки", href: "/discounts" },
    { name: "О магазине", href: "/about" }
  ];

  const catalogMenu = [
    { name: "Очищение", icon: "Droplet", link: "/catalog?category=Очищение" },
    { name: "Тонеры и пады", icon: "Sparkles", link: "/catalog?category=Тонеры%20и%20пады" },
    { name: "Сыворотки", icon: "Droplets", link: "/catalog?category=Сыворотки" },
    { name: "Кремы и бальзамы", icon: "Heart", link: "/catalog?category=Кремы%20и%20бальзамы" },
    { name: "Маски и патчи", icon: "Smile", link: "/catalog?category=Маски%20и%20патчи" },
    { name: "Солнцезащитные средства", icon: "Sun", link: "/catalog?category=Солнцезащитные%20средства" }
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 5));
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery, allProducts]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setShowSearchResults(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <div className="border-b border-vt-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs">
            <nav className="flex items-center gap-6">
              {topMenu.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href}
                  className="text-vt-gray-600 hover:text-vt-green-500 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a href="mailto:info@cosmeticstar.ru" className="text-vt-gray-600 hover:text-vt-green-500 transition">
                info@cosmeticstar.ru
              </a>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs"
                onClick={() => setShowAccountDialog(true)}
              >
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
              <Link to="/" className="flex items-center gap-2">
                <Icon name="Sparkles" className="text-vt-green-500" size={28} />
                <div className="font-semibold text-xl tracking-tight">VT COSMETICS</div>
              </Link>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Button 
                    variant="outline" 
                    className="border-vt-green-500 text-vt-green-500 hover:bg-vt-green-600 hover:text-white"
                    onMouseEnter={() => setShowCatalog(true)}
                    onMouseLeave={() => setShowCatalog(false)}
                    onClick={() => navigate('/catalog')}
                  >
                    <Icon name="Menu" className="mr-2" size={18} />
                    Каталог
                  </Button>
                  
                  {showCatalog && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-white border border-vt-gray-300 shadow-lg z-50"
                      onMouseEnter={() => setShowCatalog(true)}
                      onMouseLeave={() => setShowCatalog(false)}
                    >
                      {catalogMenu.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className="flex items-center gap-3 px-6 py-3 hover:bg-vt-gray-100 transition"
                          onClick={() => setShowCatalog(false)}
                        >
                          <Icon name={item.icon} size={20} className="text-vt-gray-600" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                

              </div>
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Input 
                  placeholder="Поиск товаров..."
                  className="pr-10 border-vt-gray-300 focus:border-vt-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Icon 
                    name="Search" 
                    className="text-vt-gray-600 hover:text-vt-green-500 cursor-pointer" 
                    size={18} 
                  />
                </button>
                
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-vt-gray-300 shadow-lg z-50 max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-vt-gray-100 transition"
                        onClick={() => {
                          setShowSearchResults(false);
                          setSearchQuery("");
                        }}
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-vt-green-500">{product.name}</div>
                          <div className="text-xs text-vt-gray-600">{product.price} ₽</div>
                        </div>
                      </Link>
                    ))}
                    {searchQuery && (
                      <Link
                        to={`/catalog?search=${encodeURIComponent(searchQuery)}`}
                        className="block px-4 py-3 text-sm text-center text-vt-green-500 hover:bg-vt-gray-100 border-t border-vt-gray-200"
                        onClick={() => {
                          setShowSearchResults(false);
                          setSearchQuery("");
                        }}
                      >
                        Показать все результаты
                      </Link>
                    )}
                  </div>
                )}
              </form>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={22} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={onCartClick}
              >
                <Icon name="ShoppingCart" size={22} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-vt-green-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                title="Выйти"
              >
                <Icon name="LogOut" size={22} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Dialog open={showAccountDialog} onOpenChange={setShowAccountDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-vt-green-500">
              <Icon name="Info" size={24} />
              Личный кабинет временно недоступен
            </DialogTitle>
            <DialogDescription className="pt-4">
              <div className="space-y-4">
                <p className="text-vt-gray-700">
                  Сейчас функция личного кабинета находится на доработке. 
                </p>
                <p className="text-vt-gray-700">
                  Если у вас есть вопросы или вам нужна помощь, пожалуйста, воспользуйтесь формой обратной связи.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setShowAccountDialog(false);
                      navigate('/help#contact-form');
                    }}
                    className="w-full bg-vt-green-500 hover:bg-vt-green-600 text-white"
                  >
                    Перейти к форме обратной связи
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;