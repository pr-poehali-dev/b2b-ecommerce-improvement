import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-vt-green-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-6">
              <img 
                src="https://www.cosmeticstar.ru/img/cosmetic-star.svg" 
                alt="Cosmetic Star" 
                className="h-16 w-auto mb-2 brightness-0 invert opacity-80"
              />
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/privacy" className="hover:text-white transition">Политика конфиденциальности</Link></li>
              <li><Link to="/sales-rules" className="hover:text-white transition">Правила продажи</Link></li>
              <li><Link to="/consent" className="hover:text-white transition">Согласие на обработку персональных данных</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="mailto:info@cosmeticstar.ru" className="hover:text-white transition">
                  info@cosmeticstar.ru
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/help" className="hover:text-white transition">Как сделать заказ</Link></li>
              <li><Link to="/help" className="hover:text-white transition">Обмен и возврат товара</Link></li>
              <li><Link to="/discounts" className="hover:text-white transition">Накопительная система скидок</Link></li>
              <li><Link to="/about" className="hover:text-white transition">О магазине</Link></li>
              <li><Link to="/help" className="hover:text-white transition">Форма обратной связи</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-sm text-white/80">
          <p>© Все права на товарные знаки принадлежат их законным владельцам</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;