import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import 'react-dadata/dist/react-dadata.css';

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
  const [addressData, setAddressData] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
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

  const handleAddressSelect = (suggestion: DaDataSuggestion<DaDataAddress> | undefined) => {
    if (suggestion?.data) {
      setAddressData(suggestion);
      setFormData(prev => ({
        ...prev,
        city: suggestion.data.city || suggestion.data.settlement || '',
        address: suggestion.value
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

  const handleSubmitOrder = () => {
    console.log('Order submitted:', formData, cartItems);
    clearCart();
    navigate('/order-success');
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
              <div className="bg-white border border-vt-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-vt-green-500 mb-6">Выберите способ доставки</h2>
                
                <div className="space-y-4 mb-6">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                        formData.deliveryType === option.id
                          ? 'border-vt-green-500 bg-vt-green-50'
                          : 'border-vt-gray-200 hover:border-vt-green-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value={option.id}
                        checked={formData.deliveryType === option.id}
                        onChange={(e) => handleInputChange('deliveryType', e.target.value)}
                        className="w-5 h-5 text-vt-green-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <Icon name={option.icon} size={24} className="text-vt-green-500" />
                          <div className="font-semibold text-vt-gray-900">{option.name}</div>
                        </div>
                        <div className="text-sm text-vt-gray-600">{option.description}</div>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className="font-medium text-vt-green-500">{option.price}</span>
                          <span className="text-vt-gray-500">{option.time}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {formData.deliveryType === 'courier' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-vt-gray-900">Адрес доставки</h3>
                    <div className="dadata-address-wrapper">
                      <AddressSuggestions
                        token="demotoken"
                        value={addressData}
                        onChange={handleAddressSelect}
                        inputProps={{
                          placeholder: "Начните вводить адрес...",
                          className: "w-full px-3 py-2 border border-vt-gray-300 rounded-md focus:border-vt-green-500 focus:outline-none focus:ring-1 focus:ring-vt-green-500"
                        }}
                        containerClassName="dadata-container"
                        suggestionsClassName="dadata-suggestions"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Input
                        placeholder="Квартира"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange('apartment', e.target.value)}
                      />
                      <Input
                        placeholder="Подъезд"
                        value={formData.entrance}
                        onChange={(e) => handleInputChange('entrance', e.target.value)}
                      />
                      <Input
                        placeholder="Этаж"
                        value={formData.floor}
                        onChange={(e) => handleInputChange('floor', e.target.value)}
                      />
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold text-vt-gray-900 mb-3">Адрес на карте</h3>
                      <div className="border border-vt-gray-300 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                        <YMaps query={{ apikey: 'demo', lang: 'ru_RU' }}>
                          <Map
                            state={{ center: mapCenter, zoom: mapZoom }}
                            width="100%"
                            height="100%"
                          >
                            {addressData?.data.geo_lat && addressData?.data.geo_lon && (
                              <Placemark
                                geometry={[
                                  parseFloat(addressData.data.geo_lat),
                                  parseFloat(addressData.data.geo_lon)
                                ]}
                                properties={{
                                  hintContent: formData.address,
                                  balloonContent: formData.address
                                }}
                                options={{
                                  preset: 'islands#greenDotIcon'
                                }}
                              />
                            )}
                          </Map>
                        </YMaps>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={() => setStep('contacts')}
                  className="w-full mt-6 bg-vt-green-500 hover:bg-vt-green-600"
                >
                  Продолжить
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            )}

            {step === 'contacts' && (
              <div className="bg-white border border-vt-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-vt-green-500 mb-6">Контактные данные</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-vt-gray-700 mb-2">
                        Имя <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Иван"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-vt-gray-700 mb-2">
                        Фамилия <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Иванов"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-vt-gray-700 mb-2">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-vt-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-vt-gray-700 mb-2">
                      Комментарий к заказу
                    </label>
                    <textarea
                      placeholder="Дополнительные пожелания"
                      value={formData.comment}
                      onChange={(e) => handleInputChange('comment', e.target.value)}
                      className="w-full px-3 py-2 border border-vt-gray-300 rounded-lg min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-vt-green-500"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button
                    onClick={() => setStep('delivery')}
                    variant="outline"
                    className="flex-1"
                  >
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                  <Button
                    onClick={() => setStep('payment')}
                    className="flex-1 bg-vt-green-500 hover:bg-vt-green-600"
                  >
                    Продолжить
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {step === 'payment' && (
              <div className="bg-white border border-vt-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-vt-green-500 mb-6">Способ оплаты</h2>
                
                <div className="space-y-4 mb-6">
                  {paymentOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                        formData.paymentMethod === option.id
                          ? 'border-vt-green-500 bg-vt-green-50'
                          : 'border-vt-gray-200 hover:border-vt-green-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={option.id}
                        checked={formData.paymentMethod === option.id}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        className="w-5 h-5 text-vt-green-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <Icon name={option.icon} size={24} className="text-vt-green-500" />
                          <div className="font-semibold text-vt-gray-900">{option.name}</div>
                        </div>
                        <div className="text-sm text-vt-gray-600">{option.description}</div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="bg-vt-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={20} className="text-vt-green-500 mt-0.5" />
                    <div className="text-sm text-vt-gray-700">
                      <p className="font-medium mb-1">Безопасная оплата</p>
                      <p>Все платёжные данные передаются в зашифрованном виде</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setStep('contacts')}
                    variant="outline"
                    className="flex-1"
                  >
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                  <Button
                    onClick={handleSubmitOrder}
                    className="flex-1 bg-vt-green-500 hover:bg-vt-green-600"
                  >
                    <Icon name="Check" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-4 h-fit">
            <div className="bg-white border border-vt-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-vt-green-500 mb-4">Ваш заказ</h3>
              
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded border border-vt-gray-200"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm text-vt-gray-900">{item.name}</div>
                      <div className="text-xs text-vt-gray-500 mb-1">{item.brand}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-vt-gray-600">{item.quantity} шт.</span>
                        <span className="font-semibold text-vt-green-500">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-vt-gray-200 pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-vt-gray-600">Товары ({cartItems.length}):</span>
                  <span className="font-medium">{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-vt-gray-600">Доставка:</span>
                  <span className="font-medium">
                    {deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost} ₽`}
                  </span>
                </div>
                <div className="border-t border-vt-gray-200 pt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold text-vt-gray-900">Итого:</span>
                  <span className="text-2xl font-bold text-vt-green-500">
                    {(total + deliveryCost).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-vt-gray-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="ShieldCheck" size={20} className="text-vt-green-500 mt-0.5" />
                <div className="text-xs text-vt-gray-700">
                  <p className="font-medium mb-1">Гарантия качества</p>
                  <p>Только оригинальная продукция VT Cosmetics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;