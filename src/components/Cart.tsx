import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const navigate = useNavigate();
  
  const calculateTotal = () => {
    return items.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/\s/g, ''));
      return sum + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-vt-gray-200">
          <h2 className="text-2xl font-semibold text-vt-green-500">Ваша корзина</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-vt-gray-100"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-24 h-24 bg-vt-gray-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="ShoppingCart" size={48} className="text-vt-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-vt-gray-700 mb-2">
              В корзине пока пусто
            </h3>
            <p className="text-sm text-vt-gray-600 mb-6">
              Добавьте товары из каталога
            </p>
            <Button
              onClick={onClose}
              className="bg-vt-green-500 hover:bg-vt-green-600 text-white"
            >
              Перейти к покупкам
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-vt-gray-200 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <div>
                          <div className="text-xs text-vt-gray-600">{item.brand}</div>
                          <h4 className="text-sm font-medium text-vt-green-500 line-clamp-2">
                            {item.name}
                          </h4>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.id)}
                          className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-vt-gray-300 rounded">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="h-8 w-8 hover:bg-vt-gray-100"
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 hover:bg-vt-gray-100"
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm font-semibold text-vt-green-500">
                            {formatPrice(parseFloat(item.price.replace(/\s/g, '')) * item.quantity)} ₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-vt-gray-200 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Промокод"
                  className="flex-1 border-vt-gray-300 focus:border-vt-green-500"
                />
                <Button
                  variant="outline"
                  className="border-vt-green-500 text-vt-green-500 hover:bg-vt-green-50"
                >
                  Применить
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-vt-gray-600">Товары ({items.length})</span>
                  <span className="font-medium">{formatPrice(calculateTotal())} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-vt-gray-600">Доставка</span>
                  <span className="font-medium text-vt-green-500">Бесплатно</span>
                </div>
                <div className="pt-2 border-t border-vt-gray-200 flex justify-between">
                  <span className="font-semibold text-lg">Итого:</span>
                  <span className="font-semibold text-lg text-vt-green-500">
                    {formatPrice(calculateTotal())} ₽
                  </span>
                </div>
              </div>

              <Button
                onClick={() => {
                  onClose();
                  navigate('/checkout');
                }}
                className="w-full bg-vt-green-500 hover:bg-vt-green-600 text-white py-6 text-lg"
              >
                Оформить заказ
              </Button>

              <p className="text-xs text-center text-vt-gray-600">
                Доставка от 8 000 ₽ бесплатно
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;