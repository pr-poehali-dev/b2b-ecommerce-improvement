import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { productsFromDB } from "@/data/productsFromDB";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  description: string;
  barcode?: string;
  article?: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart: addToCartContext, updateQuantity, removeItem, getTotalItems } = useCart();
  const products: Product[] = productsFromDB;

  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - купить по цене ${product.price} ₽ | VT Cosmetics`;
    }
  }, [product]);

  const addToCart = () => {
    if (!product) return;

    addToCartContext({
      id: product.id,
      name: product.name,
      brand: "VT Cosmetics",
      price: `${product.price} ₽`,
      image: product.image
    }, quantity);
    setIsCartOpen(true);
  };



  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Icon name="Package" size={64} className="mx-auto text-vt-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-vt-gray-700 mb-4">Товар не найден</h2>
          <Button onClick={() => navigate("/catalog")} className="bg-vt-green-500 hover:bg-vt-green-600">
            Вернуться в каталог
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productJsonLd = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "VT Cosmetics"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "147",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://vtcosmetic.ru/product/${product.id}`,
      "priceCurrency": "RUB",
      "price": product.price,
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "VT Cosmetics Russia"
      }
    }
  } : null;

  return (
    <div className="min-h-screen bg-white">
      {product && (
        <Helmet>
          <title>{`${product.name} - купить по цене ${product.price} ₽ | VT Cosmetics`}</title>
          <meta name="description" content={`${product.description || product.name} Купить по цене ${product.price} ₽ с доставкой по России. Гарантия подлинности.`} />
          <meta property="og:title" content={`${product.name} | VT Cosmetics`} />
          <meta property="og:description" content={product.description || product.name} />
          <meta property="og:image" content={product.image} />
          <meta property="og:url" content={`https://vtcosmetic.ru/product/${product.id}`} />
          <meta property="og:type" content="product" />
          <meta property="product:price:amount" content={String(product.price)} />
          <meta property="product:price:currency" content="RUB" />
          <link rel="canonical" href={`https://vtcosmetic.ru/product/${product.id}`} />
          <script type="application/ld+json">
            {JSON.stringify(productJsonLd)}
          </script>
        </Helmet>
      )}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <div className="bg-vt-gray-50">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Каталог", path: "/catalog" },
            { label: product.name }
          ]} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square bg-vt-gray-50 rounded-lg overflow-hidden border border-vt-gray-200">
              <img
                src={product.image}
                alt={product.name}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="text-sm text-vt-gray-500 mb-2">VT Cosmetics</div>
            <h1 className="text-3xl font-bold text-vt-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-4xl font-bold text-vt-green-500">
                {product.price.toLocaleString('ru-RU')} ₽
              </div>
            </div>

            <div className="bg-vt-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-vt-green-500 mb-3">Описание</h3>
              <p className="text-vt-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Icon name="Tag" size={20} className="text-vt-green-500" />
                <div>
                  <div className="text-sm text-vt-gray-600">Категория</div>
                  <Link 
                    to={`/catalog?category=${encodeURIComponent(product.category)}`}
                    className="text-vt-green-500 hover:underline font-medium"
                  >
                    {product.category}
                  </Link>
                </div>
              </div>

              {product.barcode && (
                <div className="flex items-center gap-3">
                  <Icon name="Barcode" size={20} className="text-vt-green-500" />
                  <div>
                    <div className="text-sm text-vt-gray-600">Штрихкод</div>
                    <div className="font-medium">{product.barcode}</div>
                  </div>
                </div>
              )}

              {product.article && (
                <div className="flex items-center gap-3">
                  <Icon name="Hash" size={20} className="text-vt-green-500" />
                  <div>
                    <div className="text-sm text-vt-gray-600">Артикул</div>
                    <div className="font-medium">{product.article}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-vt-gray-200 pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-sm text-vt-gray-600">Количество:</div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Icon name="Minus" size={18} />
                  </Button>
                  <div className="text-xl font-semibold w-12 text-center">{quantity}</div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Icon name="Plus" size={18} />
                  </Button>
                </div>
              </div>

              <Button
                onClick={addToCart}
                className="w-full bg-vt-green-500 hover:bg-vt-green-600 text-white py-6 text-lg font-semibold"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить в корзину
              </Button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-vt-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-vt-green-500 mb-8">Похожие товары</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white border border-vt-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden bg-vt-gray-50">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {relatedProduct.isNew && (
                      <div className="absolute top-3 left-3 bg-vt-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        NEW
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-vt-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-vt-green-500">
                        {relatedProduct.price.toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="text-sm text-vt-gray-500">{relatedProduct.volume}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;