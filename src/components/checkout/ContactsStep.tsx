import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface ContactsStepProps {
  formData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    comment: string;
  };
  onInputChange: (field: string, value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const ContactsStep = ({ formData, onInputChange, onBack, onNext }: ContactsStepProps) => {
  return (
    <div className="bg-white border border-vt-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-vt-green-500 mb-6">Контактные данные</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-vt-gray-700 mb-2">
              Имя *
            </label>
            <Input
              placeholder="Иван"
              value={formData.firstName}
              onChange={(e) => onInputChange('firstName', e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-vt-gray-700 mb-2">
              Фамилия *
            </label>
            <Input
              placeholder="Иванов"
              value={formData.lastName}
              onChange={(e) => onInputChange('lastName', e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-vt-gray-700 mb-2">
            Телефон *
          </label>
          <Input
            type="tel"
            placeholder="+7 (900) 000-00-00"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-vt-gray-700 mb-2">
            Email
          </label>
          <Input
            type="email"
            placeholder="example@mail.ru"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-vt-gray-700 mb-2">
            Комментарий к заказу
          </label>
          <Textarea
            placeholder="Дополнительная информация для курьера"
            value={formData.comment}
            onChange={(e) => onInputChange('comment', e.target.value)}
            className="w-full min-h-[100px]"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 border-vt-gray-300 hover:bg-vt-gray-100"
        >
          <Icon name="ChevronLeft" size={20} className="mr-2" />
          Назад
        </Button>
        <Button
          onClick={onNext}
          className="flex-1 bg-vt-green-500 hover:bg-vt-green-600"
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default ContactsStep;
