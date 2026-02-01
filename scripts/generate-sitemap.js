import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Загружаем товары
const productsPath = path.join(__dirname, '..', 'vt_cosmetics_products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const links = [
  // Главные страницы
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/catalog', changefreq: 'daily', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/delivery', changefreq: 'monthly', priority: 0.6 },
  { url: '/discounts', changefreq: 'weekly', priority: 0.8 },
  { url: '/help', changefreq: 'monthly', priority: 0.5 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/sales-rules', changefreq: 'yearly', priority: 0.3 },
  { url: '/consent', changefreq: 'yearly', priority: 0.3 },
];

// Добавляем все товары
products.forEach((_, index) => {
  const productId = 109 + index; // ID начинаются с 109
  links.push({
    url: `/product/${productId}`,
    changefreq: 'weekly',
    priority: 0.8,
  });
});

// Создаём sitemap
const stream = new SitemapStream({ hostname: 'https://vtcosmetic.ru' });

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, data.toString());
    console.log('✅ Sitemap успешно сгенерирован!');
    console.log(`📄 Всего страниц: ${links.length}`);
    console.log(`📍 Путь: ${outputPath}`);
  })
  .catch((err) => {
    console.error('❌ Ошибка генерации sitemap:', err);
    process.exit(1);
  });
