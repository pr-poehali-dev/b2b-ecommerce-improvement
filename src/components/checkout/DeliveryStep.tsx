import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

interface DeliveryOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  price: string;
  time: string;
}

interface AddressSuggestion {
  value: string;
  data: {
    city?: string;
    settlement?: string;
    geo_lat?: string;
    geo_lon?: string;
  };
}

interface DeliveryStepProps {
  deliveryOptions: DeliveryOption[];
  formData: {
    deliveryType: string;
    city: string;
    address: string;
    apartment: string;
    entrance: string;
    floor: string;
  };
  addressData: AddressSuggestion | undefined;
  mapCenter: [number, number];
  mapZoom: number;
  onInputChange: (field: string, value: string) => void;
  onAddressSelect: (value: string, suggestion?: AddressSuggestion) => void;
  onNext: () => void;
}

const DeliveryStep = ({
  deliveryOptions,
  formData,
  addressData,
  mapCenter,
  mapZoom,
  onInputChange,
  onAddressSelect,
  onNext
}: DeliveryStepProps) => {
  return (
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
              onChange={(e) => onInputChange('deliveryType', e.target.value)}
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
          <AddressAutocomplete
            value={formData.address}
            onChange={onAddressSelect}
            placeholder="Начните вводить адрес..."
            className="w-full"
          />
          <div className="grid grid-cols-3 gap-4">
            <Input
              placeholder="Квартира"
              value={formData.apartment}
              onChange={(e) => onInputChange('apartment', e.target.value)}
            />
            <Input
              placeholder="Подъезд"
              value={formData.entrance}
              onChange={(e) => onInputChange('entrance', e.target.value)}
            />
            <Input
              placeholder="Этаж"
              value={formData.floor}
              onChange={(e) => onInputChange('floor', e.target.value)}
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
        onClick={onNext}
        className="w-full mt-6 bg-vt-green-500 hover:bg-vt-green-600"
      >
        Продолжить
      </Button>
    </div>
  );
};

export default DeliveryStep;