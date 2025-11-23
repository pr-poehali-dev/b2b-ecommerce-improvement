import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: "Чистки лица",
      description: "Глубокое очищение и детоксикация кожи",
      icon: "Sparkles",
      price: "от 3 500 ₽"
    },
    {
      title: "Массаж лица",
      description: "Скульптурирующий и лимфодренажный",
      icon: "Heart",
      price: "от 4 000 ₽"
    },
    {
      title: "Пилинги",
      description: "Химические и механические пилинги",
      icon: "Droplets",
      price: "от 5 000 ₽"
    },
    {
      title: "Инъекции красоты",
      description: "Биоревитализация и мезотерапия",
      icon: "Syringe",
      price: "от 8 000 ₽"
    },
    {
      title: "Лазерные процедуры",
      description: "Омоложение и удаление пигментации",
      icon: "Zap",
      price: "от 6 000 ₽"
    },
    {
      title: "Уходовые процедуры",
      description: "Индивидуальные программы ухода",
      icon: "Star",
      price: "от 4 500 ₽"
    }
  ];

  const specialists = [
    {
      name: "Анна Смирнова",
      role: "Врач-дерматолог",
      experience: "15 лет опыта",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/6dcae53c-26d6-4fa9-87b6-bf81a8b96ea5.jpg"
    },
    {
      name: "Елена Волкова",
      role: "Косметолог-эстетист",
      experience: "12 лет опыта",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/6dcae53c-26d6-4fa9-87b6-bf81a8b96ea5.jpg"
    },
    {
      name: "Мария Петрова",
      role: "Специалист по инъекциям",
      experience: "10 лет опыта",
      image: "https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/6dcae53c-26d6-4fa9-87b6-bf81a8b96ea5.jpg"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опытные специалисты",
      text: "Врачи с медицинским образованием и международными сертификатами"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      text: "Только сертифицированные препараты и современное оборудование"
    },
    {
      icon: "Clock",
      title: "Удобное время",
      text: "Работаем без выходных с 9:00 до 21:00"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      text: "Персональные программы ухода для каждого клиента"
    }
  ];

  const reviews = [
    {
      name: "Екатерина",
      text: "Прекрасная клиника! Профессиональный подход, приятная атмосфера. Результат превзошел все ожидания!",
      rating: 5
    },
    {
      name: "Ольга",
      text: "Хожу к Анне на процедуры уже год. Кожа стала значительно лучше, мелкие морщинки разгладились.",
      rating: 5
    },
    {
      name: "Мария",
      text: "Очень довольна результатом после курса биоревитализации. Рекомендую всем своим подругам!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-beauty-beige">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="font-heading text-2xl font-semibold text-beauty-dark">
              Beauty Clinic
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-beauty-gray hover:text-primary transition">Услуги</a>
            <a href="#about" className="text-sm text-beauty-gray hover:text-primary transition">О нас</a>
            <a href="#specialists" className="text-sm text-beauty-gray hover:text-primary transition">Специалисты</a>
            <a href="#reviews" className="text-sm text-beauty-gray hover:text-primary transition">Отзывы</a>
            <a href="#contacts" className="text-sm text-beauty-gray hover:text-primary transition">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Записаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-beauty-beige via-white to-beauty-beige">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-beauty-dark mb-6 leading-tight">
                Ваша естественная красота
              </h1>
              <p className="text-lg text-beauty-gray mb-8 leading-relaxed">
                Профессиональные косметологические услуги с заботой о вашей коже. 
                Современные методики и индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Phone" className="mr-2" size={18} />
                  +7 (495) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/e73c7474-fc20-469f-a01a-674858786d85.jpg" 
                alt="Beauty Clinic" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-beauty-beige">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-beauty-dark">2000+</div>
                    <div className="text-sm text-beauty-gray">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-beauty-dark mb-4">
              Наши услуги
            </h2>
            <p className="text-beauty-gray text-lg max-w-2xl mx-auto">
              Широкий спектр косметологических процедур для решения любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-beauty-beige hover:border-primary transition-all hover:shadow-xl cursor-pointer bg-white"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${activeService === index ? 'bg-primary' : 'bg-beauty-beige'}`}>
                  <Icon 
                    name={service.icon} 
                    className={`transition-colors ${activeService === index ? 'text-primary-foreground' : 'text-primary'}`}
                    size={28} 
                  />
                </div>
                <h3 className="font-semibold text-xl text-beauty-dark mb-2">{service.title}</h3>
                <p className="text-beauty-gray mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Icon name="ArrowRight" className="text-primary group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-beauty-beige/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/8895b578-b7a9-4a45-a2e3-e52914af5d81/files/99e3cdfc-102a-4579-9d39-a530417231aa.jpg" 
              alt="О клинике" 
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beauty-dark mb-6">
                О нашей клинике
              </h2>
              <p className="text-beauty-gray text-lg mb-6 leading-relaxed">
                Beauty Clinic — это современная косметологическая клиника, где каждый клиент 
                получает профессиональный уход и индивидуальный подход.
              </p>
              <p className="text-beauty-gray text-lg mb-8 leading-relaxed">
                Мы используем только проверенные методики и сертифицированные препараты, 
                обеспечивая безопасность и эффективность всех процедур.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {advantages.map((adv, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={adv.icon} className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-beauty-dark mb-1">{adv.title}</h4>
                      <p className="text-sm text-beauty-gray">{adv.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specialists" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-beauty-dark mb-4">
              Наши специалисты
            </h2>
            <p className="text-beauty-gray text-lg max-w-2xl mx-auto">
              Команда профессионалов с медицинским образованием и большим опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((spec, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={spec.image} 
                    alt={spec.name} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-xl text-beauty-dark mb-2">{spec.name}</h3>
                <p className="text-primary mb-1">{spec.role}</p>
                <p className="text-beauty-gray text-sm">{spec.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-lg border border-beauty-beige">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-beauty-dark mb-4">
                Прайс-лист основных услуг
              </h2>
              <p className="text-beauty-gray">Цены указаны в рублях. Точную стоимость уточняйте у администратора.</p>
            </div>
            <div className="space-y-4">
              {[
                { name: "Консультация косметолога", price: "Бесплатно" },
                { name: "Чистка лица комбинированная", price: "3 500 - 5 000" },
                { name: "Массаж лица классический", price: "4 000" },
                { name: "Пилинг химический", price: "5 000 - 8 000" },
                { name: "Биоревитализация", price: "8 000 - 15 000" },
                { name: "Мезотерапия лица", price: "7 000 - 12 000" },
                { name: "Лазерное омоложение", price: "6 000 - 10 000" },
                { name: "Уходовая процедура", price: "4 500 - 7 000" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-beauty-beige last:border-0">
                  <span className="text-beauty-dark font-medium">{item.name}</span>
                  <span className="text-primary font-semibold">{item.price} ₽</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-beauty-dark mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-beauty-gray text-lg max-w-2xl mx-auto">
              Нам доверяют тысячи клиентов по всей Москве
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="p-8 rounded-2xl bg-beauty-beige/30 border border-beauty-beige">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                  ))}
                </div>
                <p className="text-beauty-gray mb-6 leading-relaxed">"{review.text}"</p>
                <div className="font-semibold text-beauty-dark">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-beauty-beige via-white to-beauty-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beauty-dark mb-4">
                Контакты
              </h2>
              <p className="text-beauty-gray text-lg">
                Запишитесь на консультацию прямо сейчас
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark mb-1">Адрес</h4>
                    <p className="text-beauty-gray">г. Москва, ул. Пушкина, д. 10</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark mb-1">Телефон</h4>
                    <p className="text-beauty-gray">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark mb-1">Email</h4>
                    <p className="text-beauty-gray">info@beautyclinic.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark mb-1">Режим работы</h4>
                    <p className="text-beauty-gray">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-beauty-beige">
                <h3 className="font-semibold text-xl text-beauty-dark mb-6">Записаться на прием</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 rounded-lg border border-beauty-beige focus:border-primary focus:outline-none transition"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 rounded-lg border border-beauty-beige focus:border-primary focus:outline-none transition"
                  />
                  <textarea 
                    placeholder="Комментарий" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-beauty-beige focus:border-primary focus:outline-none transition resize-none"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-beauty-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={24} />
              <span className="font-heading text-xl font-semibold">Beauty Clinic</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2024 Beauty Clinic. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition flex items-center justify-center">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition flex items-center justify-center">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition flex items-center justify-center">
                <Icon name="Phone" size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
