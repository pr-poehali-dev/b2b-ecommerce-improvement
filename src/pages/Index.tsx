import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import HeroSlider from "@/components/HeroSlider";

const Index = () => {
  const [animatedValues, setAnimatedValues] = useState({ orders: 0, errors: 0, satisfaction: 0, costs: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({ orders: 92, errors: 90, satisfaction: 40, costs: 70 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: "Star",
      title: "Первая услуга",
      description: "Описание первой услуги, которую предоставляет ваша компания"
    },
    {
      icon: "Target",
      title: "Вторая услуга",
      description: "Описание второй ключевой услуги и ее преимуществ"
    },
    {
      icon: "Zap",
      title: "Третья услуга",
      description: "Описание третьей услуги с акцентом на уникальных выгодах"
    },
    {
      icon: "Shield",
      title: "Четвертая услуга",
      description: "Описание четвертой услуги с указанием конкретных результатов"
    },
    {
      icon: "TrendingUp",
      title: "Пятая услуга",
      description: "Описание пятой услуги с фокусом на рост и развитие"
    }
  ];

  const roiMetrics = [
    { label: "Метрика 1", before: "До", after: "После", improvement: "XX%" },
    { label: "Метрика 2", before: "До", after: "После", improvement: "XX%" },
    { label: "Метрика 3", before: "До", after: "После", improvement: "XX%" },
    { label: "Метрика 4", before: "До", after: "После", improvement: "XX%" }
  ];

  const benefits = [
    "Первое преимущество вашей компании",
    "Второе ключевое преимущество",
    "Третье преимущество с конкретными результатами",
    "Четвертое преимущество для клиентов",
    "Пятое преимущество с фокусом на будущее"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-avenir font-bold text-2xl text-white drop-shadow-lg">КОМПАНИЯ</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white/90 hover:text-white transition-colors font-avenir">Услуги</a>
              <a href="#solutions" className="text-white/90 hover:text-white transition-colors font-avenir">Решения</a>
              <a href="#cases" className="text-white/90 hover:text-white transition-colors font-avenir">Портфолио</a>
              <a href="#roi" className="text-white/90 hover:text-white transition-colors font-avenir">О нас</a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors font-avenir">Контакты</a>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 font-avenir font-medium">Связаться</Button>
          </div>
        </div>
      </nav>

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-avenir font-bold text-3xl md:text-4xl text-black mb-4">
              Наши услуги
            </h2>
            <p className="font-avenir text-lg text-gray-600 max-w-2xl mx-auto">
              Опишите здесь основные направления вашей деятельности и преимущества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-inter text-lg text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-open-sans text-slate-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Наши результаты
            </h2>
            <p className="font-open-sans text-lg text-slate-600 max-w-2xl mx-auto">
              Покажите здесь конкретные результаты вашей работы и успехи клиентов
            </p>
          </div>

          {/* ROI Comparison Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-inter font-semibold text-slate-900">Метрика</th>
                    <th className="px-6 py-4 text-center font-inter font-semibold text-slate-900">До внедрения</th>
                    <th className="px-6 py-4 text-center font-inter font-semibold text-slate-900">После внедрения</th>
                    <th className="px-6 py-4 text-center font-inter font-semibold text-slate-900">Улучшение</th>
                  </tr>
                </thead>
                <tbody>
                  {roiMetrics.map((metric, index) => (
                    <tr key={index} className="border-t border-slate-200">
                      <td className="px-6 py-4 font-open-sans text-slate-900">{metric.label}</td>
                      <td className="px-6 py-4 text-center font-open-sans text-red-600 font-medium">{metric.before}</td>
                      <td className="px-6 py-4 text-center font-open-sans text-green-600 font-medium">{metric.after}</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          +{metric.improvement}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00938c] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <h3 className="font-avenir font-semibold text-xl text-black">Метрика 1</h3>
                </div>
                <div className="space-y-3">
                  <Progress value={animatedValues.orders} className="h-3" />
                  <p className="text-3xl font-bold text-[#00938c]">{animatedValues.orders}%</p>
                  <p className="text-gray-600 font-avenir">описание метрики</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="AlertTriangle" size={24} className="text-white" />
                  </div>
                  <h3 className="font-avenir font-semibold text-xl text-black">Метрика 2</h3>
                </div>
                <div className="space-y-3">
                  <Progress value={animatedValues.errors} className="h-3" />
                  <p className="text-3xl font-bold text-black">{animatedValues.errors}%</p>
                  <p className="text-gray-600 font-avenir">описание метрики</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Heart" size={24} className="text-purple-600" />
                  <h3 className="font-inter font-semibold text-slate-900">Метрика 3</h3>
                </div>
                <div className="space-y-2">
                  <Progress value={animatedValues.satisfaction} className="h-2" />
                  <p className="text-2xl font-bold text-purple-600">+{animatedValues.satisfaction}%</p>
                  <p className="text-sm text-slate-600">описание метрики</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="DollarSign" size={24} className="text-orange-600" />
                  <h3 className="font-inter font-semibold text-slate-900">Метрика 4</h3>
                </div>
                <div className="space-y-2">
                  <Progress value={animatedValues.costs} className="h-2" />
                  <p className="text-2xl font-bold text-orange-600">{animatedValues.costs}%</p>
                  <p className="text-sm text-slate-600">описание метрики</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-md transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-200 transition-colors">
                      <Icon name="Check" size={16} className="text-green-600" />
                    </div>
                    <p className="font-open-sans text-slate-700 group-hover:text-slate-900 transition-colors">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-6">
            Готовы начать?
          </h2>
          <p className="font-open-sans text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Опишите здесь призыв к действию и предложите клиентам связаться с вами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-avenir font-bold text-white text-2xl mb-4">КОМПАНИЯ</h3>
              <p className="font-avenir text-gray-300 text-lg mb-6 max-w-md">
                Краткое описание вашей компании и основных направлений деятельности.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#00938c] rounded-lg flex items-center justify-center hover:bg-[#00938c]/80 transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#00938c] rounded-lg flex items-center justify-center hover:bg-[#00938c]/80 transition-colors cursor-pointer">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#00938c] rounded-lg flex items-center justify-center hover:bg-[#00938c]/80 transition-colors cursor-pointer">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-avenir font-semibold text-white text-lg mb-6">Услуги</h4>
              <ul className="font-avenir text-gray-300 space-y-3">
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Первая услуга</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Вторая услуга</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Третья услуга</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Четвертая услуга</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Пятая услуга</li>
              </ul>
            </div>
            <div>
              <h4 className="font-avenir font-semibold text-white text-lg mb-6">Компания</h4>
              <ul className="font-avenir text-gray-300 space-y-3">
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Проекты</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Команда</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Карьера</li>
                <li className="hover:text-[#00938c] transition-colors cursor-pointer">Контакты</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-avenir text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 КОМПАНИЯ. Все права защищены.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="font-avenir text-gray-400 text-sm hover:text-[#00938c] transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="font-avenir text-gray-400 text-sm hover:text-[#00938c] transition-colors">
                  Условия использования
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;