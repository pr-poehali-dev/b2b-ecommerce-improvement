import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-gray-700 flex-1 min-w-[250px]">
            Просмотр сайта подразумевает согласие с{' '}
            <Link to="/privacy" className="text-[#00A19C] hover:underline font-medium">
              Политикой конфиденциальности
            </Link>
            {' '}и{' '}
            <Link to="/consent" className="text-[#00A19C] hover:underline font-medium">
              Согласием на обработку персональных данных
            </Link>
          </p>
          <button
            onClick={handleAccept}
            className="bg-[#00A19C] text-white px-6 py-2 rounded-lg hover:bg-[#008c88] transition-colors font-medium text-sm whitespace-nowrap"
          >
            Принять
          </button>
          <button
            onClick={handleAccept}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
