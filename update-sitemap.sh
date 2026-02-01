#!/bin/bash
# Скрипт для автоматического обновления sitemap

echo "🔄 Генерация sitemap..."
node scripts/generate-sitemap.js

if [ $? -eq 0 ]; then
    echo "✅ Sitemap успешно обновлён!"
    echo "📍 Файл: public/sitemap.xml"
    echo ""
    echo "Теперь можно опубликовать изменения!"
else
    echo "❌ Ошибка при генерации sitemap"
    exit 1
fi
