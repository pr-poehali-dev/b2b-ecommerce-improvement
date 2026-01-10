import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [showCatalog, setShowCatalog] = useState(false);

  const topMenu = [
    { name: "Доставка и оплата", href: "/delivery" },
    { name: "Отслеживание заказа", href: "#tracking" },
    { name: "Помощь", href: "#help" },
    { name: "Скидки", href: "/discounts" },
    { name: "О магазине", href: "/about" },
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
                
                <Button variant="ghost" className="text-vt-green-500">
                  Бренды
                </Button>
              </div>
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Input 
                  placeholder="Поиск товаров..."
                  className="pr-10 border-vt-gray-300 focus:border-vt-green-500"
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
              <Button variant="ghost" size="icon">
                <Icon name="User" size={22} />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
