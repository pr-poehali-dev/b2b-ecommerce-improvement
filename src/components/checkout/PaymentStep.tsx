import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PaymentOption {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface PaymentStepProps {
  paymentOptions: PaymentOption[];
  formData: {
    paymentMethod: string;
  };
  onInputChange: (field: string, value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const PaymentStep = ({ paymentOptions, formData, onInputChange, onBack, onSubmit }: PaymentStepProps) => {
  return (
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
              onChange={(e) => onInputChange('paymentMethod', e.target.value)}
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

      <div className="bg-vt-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-start gap-3">
          <Icon name="ShieldCheck" size={20} className="text-vt-green-500 mt-1 flex-shrink-0" />
          <div className="text-sm text-vt-gray-600">
            Мы гарантируем безопасность ваших данных. Все платежи проходят через защищённое соединение.
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 border-vt-gray-300 hover:bg-vt-gray-100"
        >
          <Icon name="ChevronLeft" size={20} className="mr-2" />
          Назад
        </Button>
        <Button
          onClick={onSubmit}
          className="flex-1 bg-vt-green-500 hover:bg-vt-green-600"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default PaymentStep;
