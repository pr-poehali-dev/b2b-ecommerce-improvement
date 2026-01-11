import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import DeliveryStep from "@/components/checkout/DeliveryStep";
import ContactsStep from "@/components/checkout/ContactsStep";
import PaymentStep from "@/components/checkout/PaymentStep";
import OrderSummary from "@/components/checkout/OrderSummary";

interface AddressSuggestion {
  value: string;
  data: {
    city?: string;
    settlement?: string;
    geo_lat?: string;
    geo_lon?: string;
  };
}

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalItems, clearCart } = useCart();
  const [step, setStep] = useState<'delivery' | 'contacts' | 'payment'>('delivery');
  const [formData, setFormData] = useState({
    deliveryType: 'courier',
    city: '',
    address: '',
    apartment: '',
    entrance: '',
    floor: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comment: '',
    paymentMethod: 'online'
  });
  const [addressData, setAddressData] = useState<AddressSuggestion | undefined>();
  const [mapCenter, setMapCenter] = useState<[number, number]>([55.751244, 37.618423]);
  const [mapZoom, setMapZoom] = useState(10);

  const deliveryOptions = [
    {
      id: 'courier',
      name: 'Курьерская доставка',
      icon: 'Truck',
      description: 'Доставка по Москве и МО',
      price: 'от 300 ₽',
      time: '1-2 дня'
    },
    {
      id: 'pickup',
      name: 'Пункт выдачи',
      icon: 'MapPin',
      description: 'CDEK, Boxberry',
      price: 'от 200 ₽',
      time: '2-3 дня'
    },
    {
      id: 'self',
      name: 'Самовывоз',
      icon: 'Home',
      description: 'Москва, ул. Примерная 1',
      price: 'Бесплатно',
      time: 'Сегодня'
    }
  ];

  const paymentOptions = [
    {
      id: 'online',
      name: 'Онлайн оплата',
      icon: 'CreditCard',
      description: 'Банковской картой или СБП'
    },
    {
      id: 'cash',
      name: 'При получении',
      icon: 'Banknote',
      description: 'Наличными или картой курьеру'
    },
    {
      id: 'invoice',
      name: 'Счёт для юр. лиц',
      icon: 'FileText',
      description: 'С НДС или без'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddressSelect = (value: string, suggestion?: AddressSuggestion) => {
    setFormData(prev => ({ ...prev, address: value }));
    
    if (suggestion?.data) {
      setAddressData(suggestion);
      setFormData(prev => ({
        ...prev,
        city: suggestion.data.city || suggestion.data.settlement || '',
        address: value
      }));

      const lat = parseFloat(suggestion.data.geo_lat || '55.751244');
      const lon = parseFloat(suggestion.data.geo_lon || '37.618423');
      setMapCenter([lat, lon]);
      setMapZoom(16);
    }
  };

  useEffect(() => {
    if (formData.city === 'Москва' || formData.city === '') {
      setMapCenter([55.751244, 37.618423]);
      setMapZoom(10);
    }
  }, [formData.city]);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return sum + (price * item.quantity);
    }, 0);
  };

  const handleSubmitOrder = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/c3b779d4-d91f-4307-839c-dfe00762c5d2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order: {
            ...formData,
            deliveryCost: deliveryCost
          },
          items: cartItems
        })
      });

      const result = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', result);
      
      if (response.ok) {
        clearCart();
        navigate('/order-success');
      } else {
        console.error('Order send failed:', result.error);
        alert('Ошибка при отправке заказа. Попробуйте ещё раз.');
      }
    } catch (error) {
      console.error('Order error:', error);
      alert('Ошибка при отправке заказа. Попробуйте ещё раз.');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header cartItemsCount={0} onCartClick={() => {}} />
        
        <div className="bg-vt-gray-50 py-8">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-vt-gray-600">
              <Link to="/" className="hover:text-vt-green-500 transition">Главная</Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-vt-green-500">Оформление заказа</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <Icon name="ShoppingBag" size={64} className="mx-auto text-vt-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-vt-gray-700 mb-4">Корзина пуста</h2>
            <p className="text-vt-gray-600 mb-6">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <Button 
              onClick={() => navigate('/catalog')} 
              className="bg-vt-green-500 hover:bg-vt-green-600"
            >
              Перейти в каталог
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  const total = calculateTotal();
  const deliveryCost = formData.deliveryType === 'self' ? 0 : formData.deliveryType === 'pickup' ? 200 : 300;

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => {}} />
      
      <div className="bg-vt-gray-50 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-vt-gray-600 mb-4">
            <Link to="/" className="hover:text-vt-green-500 transition">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-vt-green-500">Оформление заказа</span>
          </nav>
          <h1 className="text-3xl font-bold text-vt-gray-900">Оформление заказа</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className={`flex items-center gap-3 ${step === 'delivery' ? 'opacity-100' : 'opacity-50'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step === 'delivery' ? 'bg-vt-green-500 text-white' : 'bg-vt-gray-200 text-vt-gray-600'
                }`}>
                  1
                </div>
                <span className="font-medium">Доставка</span>
              </div>
              <Icon name="ChevronRight" size={20} className="text-vt-gray-400" />
              <div className={`flex items-center gap-3 ${step === 'contacts' ? 'opacity-100' : 'opacity-50'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step === 'contacts' ? 'bg-vt-green-500 text-white' : 'bg-vt-gray-200 text-vt-gray-600'
                }`}>
                  2
                </div>
                <span className="font-medium">Контакты</span>
              </div>
              <Icon name="ChevronRight" size={20} className="text-vt-gray-400" />
              <div className={`flex items-center gap-3 ${step === 'payment' ? 'opacity-100' : 'opacity-50'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step === 'payment' ? 'bg-vt-green-500 text-white' : 'bg-vt-gray-200 text-vt-gray-600'
                }`}>
                  3
                </div>
                <span className="font-medium">Оплата</span>
              </div>
            </div>

            {step === 'delivery' && (
              <DeliveryStep
                deliveryOptions={deliveryOptions}
                formData={formData}
                addressData={addressData}
                mapCenter={mapCenter}
                mapZoom={mapZoom}
                onInputChange={handleInputChange}
                onAddressSelect={handleAddressSelect}
                onNext={() => setStep('contacts')}
              />
            )}

            {step === 'contacts' && (
              <ContactsStep
                formData={formData}
                onInputChange={handleInputChange}
                onBack={() => setStep('delivery')}
                onNext={() => setStep('payment')}
              />
            )}

            {step === 'payment' && (
              <PaymentStep
                paymentOptions={paymentOptions}
                formData={formData}
                onInputChange={handleInputChange}
                onBack={() => setStep('contacts')}
                onSubmit={handleSubmitOrder}
              />
            )}
          </div>

          <OrderSummary
            cartItems={cartItems}
            total={total}
            deliveryCost={deliveryCost}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;