import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-vt-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={48} className="text-vt-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-vt-gray-900 mb-4">
            Заказ успешно оформлен!
          </h1>
          
          <p className="text-lg text-vt-gray-600 mb-2">
            Номер вашего заказа: <span className="font-semibold text-vt-green-500">#{orderNumber}</span>
          </p>
          
          <p className="text-vt-gray-600 mb-8">
            Мы отправили подтверждение на указанный вами email
          </p>

          <div className="bg-vt-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-vt-green-500 mb-4">Что дальше?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vt-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-vt-gray-900 mb-1">Обработка заказа</p>
                  <p className="text-sm text-vt-gray-600">
                    Мы проверим наличие товаров и свяжемся с вами для подтверждения
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vt-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-vt-gray-900 mb-1">Сборка и упаковка</p>
                  <p className="text-sm text-vt-gray-600">
                    Тщательно упакуем ваш заказ и передадим в службу доставки
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vt-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-vt-gray-900 mb-1">Доставка</p>
                  <p className="text-sm text-vt-gray-600">
                    Отправим SMS с трек-номером для отслеживания
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-vt-green-500 hover:bg-vt-green-600"
            >
              <Link to="/catalog">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Продолжить покупки
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-vt-green-500 text-vt-green-500 hover:bg-vt-green-50"
            >
              <Link to="/">
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;