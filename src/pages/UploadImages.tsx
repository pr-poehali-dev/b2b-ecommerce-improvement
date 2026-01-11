import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import func2url from '../../backend/func2url.json';

interface Product {
  id: number;
  name: string;
  image: string;
}

const UploadImages = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<number | null>(null);
  const [uploadStatus, setUploadStatus] = useState<Record<number, string>>({});

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(func2url.products);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (productId: number, productName: string, file: File) => {
    setUploading(productId);
    setUploadStatus(prev => ({ ...prev, [productId]: 'Загрузка...' }));

    try {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const base64String = e.target?.result as string;
          const base64Data = base64String.split(',')[1];

          const response = await fetch(func2url['upload-image'], {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              productName: productName,
              imageBase64: base64Data,
              filename: file.name
            })
          });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const result = await response.json();

          if (result.success) {
            setUploadStatus(prev => ({ ...prev, [productId]: '✅ Загружено' }));
            setProducts(prev => prev.map(p => 
              p.id === productId ? { ...p, image: result.cdnUrl } : p
            ));
          } else {
            setUploadStatus(prev => ({ ...prev, [productId]: `❌ ${result.error || 'Ошибка'}` }));
          }
        } catch (err) {
          setUploadStatus(prev => ({ ...prev, [productId]: '❌ Ошибка загрузки' }));
          console.error('Upload failed:', err);
        } finally {
          setUploading(null);
        }
      };

      reader.onerror = () => {
        setUploadStatus(prev => ({ ...prev, [productId]: '❌ Ошибка чтения файла' }));
        setUploading(null);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      setUploadStatus(prev => ({ ...prev, [productId]: '❌ Ошибка' }));
      console.error('Upload failed:', error);
      setUploading(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" size={48} className="animate-spin text-vt-green-500 mx-auto mb-4" />
          <p className="text-vt-gray-600">Загрузка товаров...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vt-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-vt-gray-200 p-6 mb-6">
          <h1 className="text-2xl font-bold text-vt-green-500 mb-2">
            Загрузка изображений товаров
          </h1>
          <p className="text-vt-gray-600">
            Выберите изображение для каждого товара. Название файла должно совпадать с названием товара.
          </p>
        </div>

        <div className="grid gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-sm border border-vt-gray-200 p-4 flex items-center gap-4"
            >
              <div className="w-20 h-20 bg-vt-gray-100 rounded overflow-hidden flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-vt-green-500 truncate mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-vt-gray-500 truncate">
                  {product.image}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {uploadStatus[product.id] && (
                  <span className="text-sm text-vt-gray-600">
                    {uploadStatus[product.id]}
                  </span>
                )}
                
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id={`file-${product.id}`}
                  disabled={uploading === product.id}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileUpload(product.id, product.name, file);
                    }
                  }}
                />
                
                <Button
                  onClick={() => document.getElementById(`file-${product.id}`)?.click()}
                  disabled={uploading === product.id}
                  className="bg-vt-green-500 hover:bg-vt-green-600"
                >
                  {uploading === product.id ? (
                    <>
                      <Icon name="Loader2" size={16} className="animate-spin mr-2" />
                      Загрузка
                    </>
                  ) : (
                    <>
                      <Icon name="Upload" size={16} className="mr-2" />
                      Загрузить
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadImages;