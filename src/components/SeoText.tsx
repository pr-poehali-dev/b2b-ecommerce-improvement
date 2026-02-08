export default function SeoText() {
  return (
    <section className="bg-white py-16 border-t border-vt-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-vt-gray-900 mb-6">
            Почему выбирают VT Cosmetics?
          </h2>
          
          <p className="text-vt-gray-700 mb-6 leading-relaxed">
            <strong>VT Cosmetics</strong> — южнокорейский бренд профессиональной косметики, завоевавший доверие миллионов покупателей по всему миру. 
            Мы являем официальным дистрибьютором продукции VT Cosmetics в России и гарантируем 100% подлинность всех товаров.
          </p>

          <h3 className="text-2xl font-semibold text-vt-green-500 mb-4 mt-8">
            Популярные линейки косметики VT
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-vt-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-vt-gray-900 mb-3">Reedle Shot</h4>
              <p className="text-vt-gray-700">
                Инновационные сыворотки с микроиглами CICA для глубокого проникновения активных компонентов. 
                Бестселлер бренда с революционной технологией доставки ингредиентов в глубокие слои кожи.
              </p>
            </div>

            <div className="border border-vt-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-vt-gray-900 mb-3">CICA Line</h4>
              <p className="text-vt-gray-700">
                Восстанавливающая линия с центеллой азиатской для чувствительной и проблемной кожи. 
                Успокаивает раздражения, укрепляет защитный барьер и ускоряет регенерацию.
              </p>
            </div>

            <div className="border border-vt-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-vt-gray-900 mb-3">PDRN Series</h4>
              <p className="text-vt-gray-700">
                Средства с полидезоксирибонуклеотидом (PDRN) — мощным компонентом для омоложения и восстановления кожи. 
                Стимулирует выработку коллагена и эластина.
              </p>
            </div>

            <div className="border border-vt-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-vt-gray-900 mb-3">Wrinkle Line</h4>
              <p className="text-vt-gray-700">
                Антивозрастная линия для борьбы с морщинами и признаками старения. 
                Эффективные формулы с ретинолом, пептидами и аденозином.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-vt-green-500 mb-4 mt-8">
            Преимущества покупки в нашем интернет-магазине
          </h3>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-vt-green-500 text-xl">✓</span>
              <span className="text-vt-gray-700">
                <strong>Только оригинальная продукция</strong> — прямые поставки от производителя, все товары сертифицированы
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-vt-green-500 text-xl">✓</span>
              <span className="text-vt-gray-700">
                <strong>Быстрая доставка</strong> — по Москве 1-2 дня, по России 3-7 дней. Отправляем заказы ежедневно
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-vt-green-500 text-xl">✓</span>
              <span className="text-vt-gray-700">
                <strong>Профессиональная консультация</strong> — наши специалисты помогут подобрать уход под ваш тип кожи
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-vt-green-500 text-xl">✓</span>
              <span className="text-vt-gray-700">
                <strong>Выгодные цены</strong> — регулярные акции, скидки для постоянных покупателей, программа лояльности
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-vt-green-500 text-xl">✓</span>
              <span className="text-vt-gray-700">
                <strong>Гарантия возврата</strong> — 14 дней на возврат товара надлежащего качества
              </span>
            </li>
          </ul>

          <div className="bg-vt-green-50 border-l-4 border-vt-green-500 p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold text-vt-gray-900 mb-3">
              Как заказать корейскую косметику VT Cosmetics?
            </h3>
            <ol className="space-y-2 text-vt-gray-700">
              <li>1. Выберите понравившийся товар в каталоге</li>
              <li>2. Добавьте его в корзину и оформите заказ</li>
              <li>3. Наш менеджер свяжется с вами для подтверждения</li>
              <li>4. Получите посылку в течение 1-7 дней</li>
            </ol>
          </div>

          <p className="text-vt-gray-700 leading-relaxed">
            Присоединяйтесь к тысячам довольных покупателей, которые уже оценили качество косметики <strong>VT Cosmetics</strong>. 
            Инновационные формулы, проверенные ингредиенты и видимый результат — всё это делает продукцию VT одной из самых популярных 
            в сегменте корейской косметики. Закажите сейчас и получите скидку 10% на первую покупку!
          </p>
        </div>
      </div>
    </section>
  );
}
