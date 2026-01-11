import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ProductLinesSidebar = () => {
  const productLines = [
    { name: "REEDLE SHOT", link: "/catalog?line=REEDLE%20SHOT" },
    { name: "PDRN", link: "/catalog?line=PDRN" },
    { name: "CICA", link: "/catalog?line=CICA" },
    { name: "GLUCAMUNE", link: "/catalog?line=GLUCAMUNE" },
    { name: "TX-TONING", link: "/catalog?line=TX-TONING" },
    { name: "JUMBO SOLUTION", link: "/catalog?line=JUMBO%20SOLUTION" },
    { name: "COLLAGEN PACT", link: "/catalog?line=COLLAGEN%20PACT" },
    { name: "SUPER HYALON", link: "/catalog?line=SUPER%20HYALON" },
    { name: "MILD REEDLE SHOT", link: "/catalog?line=MILD%20REEDLE%20SHOT" },
    { name: "PRO CICA", link: "/catalog?line=PRO%20CICA" }
  ];

  return (
    <div className="border border-vt-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4 text-vt-green-500">Линейки продукции</h3>
      <ul className="space-y-2">
        {productLines.map((line, index) => (
          <li key={index}>
            <Link 
              to={line.link} 
              className="text-sm text-vt-gray-700 hover:text-vt-green-500 transition-colors flex items-center gap-2 group"
            >
              <Icon name="ChevronRight" size={14} className="text-vt-green-500 opacity-0 group-hover:opacity-100 transition" />
              {line.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLinesSidebar;
