import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';

interface AddressSuggestion {
  value: string;
  unrestricted_value: string;
  data: {
    city?: string;
    settlement?: string;
    geo_lat?: string;
    geo_lon?: string;
    [key: string]: any;
  };
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string, suggestion?: AddressSuggestion) => void;
  placeholder?: string;
  className?: string;
}

const AddressAutocomplete = ({ value, onChange, placeholder, className }: AddressAutocompleteProps) => {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchSuggestions = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/e87fd761-7841-4d30-b8c7-0df1b23dfa08', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }

      const data = await response.json();
      setSuggestions(data.suggestions || []);
      setIsOpen(true);
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (newValue: string) => {
    onChange(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fetchSuggestions(newValue);
    }, 300);
  };

  const handleSelectSuggestion = (suggestion: AddressSuggestion) => {
    onChange(suggestion.value, suggestion);
    setIsOpen(false);
    setSuggestions([]);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <Input
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-vt-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-vt-green-50 cursor-pointer text-sm"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion.value}
            </div>
          ))}
        </div>
      )}
      
      {isLoading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin h-4 w-4 border-2 border-vt-green-500 border-t-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
