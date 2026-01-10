import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  quantity: number;
}

interface OrderSummaryProps {
  cartItems: CartItem[];
  total: number;
  deliveryCost: number;
}

const OrderSummary = ({ cartItems, total, deliveryCost }: OrderSummaryProps) => {
  return (
    <div className="bg-white border border-vt-gray-200 rounded-lg p-6 sticky top-8">
      <h3 className="text-lg font-semibold text-vt-gray-900 mb-4">Ваш заказ</h3>
      
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded border border-vt-gray-200"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-vt-gray-900 line-clamp-2">
                {item.name}
              </div>
              <div className="text-xs text-vt-gray-600 mt-1">
                {item.quantity} шт.
              </div>
              <div className="text-sm font-semibold text-vt-green-500 mt-1">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-vt-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-vt-gray-600">Товары ({cartItems.length})</span>
          <span className="font-medium text-vt-gray-900">{total.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-vt-gray-600">Доставка</span>
          <span className="font-medium text-vt-gray-900">
            {deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost} ₽`}
          </span>
        </div>
        <div className="flex justify-between text-lg font-semibold pt-3 border-t border-vt-gray-200">
          <span className="text-vt-gray-900">Итого</span>
          <span className="text-vt-green-500">{(total + deliveryCost).toLocaleString()} ₽</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-vt-gray-600">
          <Icon name="Truck" size={16} className="text-vt-green-500" />
          <span>Бесплатная доставка от 5000 ₽</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-vt-gray-600">
          <Icon name="ShieldCheck" size={16} className="text-vt-green-500" />
          <span>Гарантия качества</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-vt-gray-600">
          <Icon name="RefreshCw" size={16} className="text-vt-green-500" />
          <span>Возврат в течение 14 дней</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
