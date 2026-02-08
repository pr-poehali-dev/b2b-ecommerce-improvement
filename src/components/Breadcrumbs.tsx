import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Helmet } from 'react-helmet';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Главная', path: '/' }, ...items];
  
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.path ? `https://vtcosmetic.ru${item.path}` : `https://vtcosmetic.ru${item.path || ''}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-vt-green-500 transition-colors">
              <Icon name="Home" size={16} />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Icon name="ChevronRight" size={14} className="text-gray-400" />
              {item.path && index < items.length - 1 ? (
                <Link 
                  to={item.path} 
                  className="hover:text-vt-green-500 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={index === items.length - 1 ? 'text-gray-900 font-medium' : ''}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}