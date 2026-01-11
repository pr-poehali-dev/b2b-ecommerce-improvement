import { useNavigate, useSearchParams } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface ProductLinesSidebarProps {
  onLineSelect?: (line: string) => void;
}

const ProductLinesSidebar = ({ onLineSelect }: ProductLinesSidebarProps) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLine = searchParams.get('line');

  const productLines = [
    { name: "REEDLE SHOT", value: "REEDLE SHOT" },
    { name: "MILD REEDLE SHOT", value: "MILD REEDLE SHOT" },
    { name: "PDRN", value: "PDRN" },
    { name: "CICA", value: "CICA" },
    { name: "PRO CICA", value: "PRO CICA" },
    { name: "RETI-A", value: "RETI-A" },
    { name: "COLLAGEN", value: "COLLAGEN" },
    { name: "VITA-LIGHT", value: "VITA-LIGHT" },
    { name: "HYDROP", value: "HYDROP" }
  ];

  const handleLineClick = (lineValue: string) => {
    if (onLineSelect) {
      onLineSelect(lineValue);
    } else {
      navigate(`/catalog?line=${encodeURIComponent(lineValue)}`);
    }
  };

  const handleReset = () => {
    if (onLineSelect) {
      onLineSelect('');
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('line');
      setSearchParams(newParams);
    }
  };

  return (
    <div className="border border-vt-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-vt-green-500">Линейки продукции</h3>
        {selectedLine && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleReset}
            className="text-xs text-vt-gray-600 hover:text-vt-green-500"
          >
            Сбросить
          </Button>
        )}
      </div>
      <ul className="space-y-2">
        {productLines.map((line, index) => (
          <li key={index}>
            <button
              onClick={() => handleLineClick(line.value)}
              className={`text-sm w-full text-left transition-colors flex items-center gap-2 group ${
                selectedLine === line.value ? 'text-vt-green-500 font-medium' : 'text-vt-gray-700 hover:text-vt-green-500'
              }`}
            >
              <Icon 
                name="ChevronRight" 
                size={14} 
                className={`text-vt-green-500 transition ${
                  selectedLine === line.value ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
              {line.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLinesSidebar;