import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import func2url from '../../backend/func2url.json';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(func2url['contact-form'], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        if (onSuccess) onSuccess();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('Ошибка при отправке сообщения. Попробуйте ещё раз.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Ошибка при отправке сообщения. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="bg-vt-green-50 border border-vt-green-500 text-vt-green-700 p-4 rounded-lg flex items-center gap-3">
          <Icon name="CheckCircle" size={20} />
          <span>Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.</span>
        </div>
      )}

      <div>
        <Input
          type="text"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="border-vt-gray-300 focus:border-vt-green-500"
        />
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="border-vt-gray-300 focus:border-vt-green-500"
        />
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Телефон"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border-vt-gray-300 focus:border-vt-green-500"
        />
      </div>

      <div>
        <Textarea
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="border-vt-gray-300 focus:border-vt-green-500 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-vt-green-500 hover:bg-vt-green-600 text-white"
      >
        {loading ? (
          <>
            <Icon name="Loader2" className="animate-spin mr-2" size={16} />
            Отправка...
          </>
        ) : (
          'Отправить'
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
