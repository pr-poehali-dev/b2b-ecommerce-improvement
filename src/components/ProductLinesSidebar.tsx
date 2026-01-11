import { useNavigate, useSearchParams } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface ProductLinesSidebarProps {
  onLineSelect?: (line: string) => void;
}

const ProductLinesSidebar = ({ onLineSelect }: ProductLinesSidebarProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedLine = searchParams.get('line');

  const productLines = [
    { name: "REEDLE SHOT", value: "REEDLE SHOT" },
    { name: "PDRN", value: "PDRN" },
    { name: "CICA", value: "CICA" },
    { name: "GLUCAMUNE", value: "GLUCAMUNE" },
    { name: "TX-TONING", value: "TX-TONING" },
    { name: "JUMBO SOLUTION", value: "JUMBO SOLUTION" },
    { name: "COLLAGEN PACT", value: "COLLAGEN PACT" },
    { name: "SUPER HYALON", value: "SUPER HYALON" },
    { name: "MILD REEDLE SHOT", value: "MILD REEDLE SHOT" },
    { name: "PRO CICA", value: "PRO CICA" }
  ];

  const handleLineClick = (lineValue: string) => {
    if (onLineSelect) {
      onLineSelect(lineValue);
    } else {
      navigate(`/catalog?line=${encodeURIComponent(lineValue)}`);
    }
  };

  return (
    <div className="border border-vt-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4 text-vt-green-500">Линейки продукции</h3>
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