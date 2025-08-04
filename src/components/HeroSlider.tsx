import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

const slides: Slide[] = [
  {
    title: "ИТ-консалтинг и аудит",
    subtitle: "Next Level IT",
    description: "Комплексные решения для цифровой трансформации вашего бизнеса. Аудит существующих систем и разработка стратегии развития.",
    buttonText: "Получить консультацию",
    backgroundImage: "url('/img/76e7716d-c60a-4321-bd78-079fd021ba5c.jpg')"
  },
  {
    title: "E-commerce решения",
    subtitle: "Онлайн продажи",
    description: "Разработка и интеграция платформ электронной коммерции. Омниканальные решения для максимизации продаж.",
    buttonText: "Узнать больше",
    backgroundImage: "url('/img/ce4cddcc-0227-4793-9ebf-6d472064fa83.jpg')"
  },
  {
    title: "Техническая поддержка",
    subtitle: "24/7 мониторинг",
    description: "Круглосуточная поддержка высоконагруженных проектов. Мониторинг, обслуживание и оптимизация систем.",
    buttonText: "Подключить поддержку",
    backgroundImage: "url('/img/6f9ce39b-23d6-44c1-b60b-85e462f49701.jpg')"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
          style={{ 
            backgroundImage: slide.backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Diagonal overlay with gradient */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black from-25% via-black/70 via-black/40 to-transparent"
              style={{
                clipPath: 'polygon(0 0, 60% 0, 45% 100%, 0 100%)'
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl text-white">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-avenir font-medium">
                  {slide.subtitle}
                </span>
              </div>
              
              <h1 className="font-avenir font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                {slide.title}
              </h1>
              
              <p className="font-avenir text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 font-avenir font-medium"
                >
                  {slide.buttonText}
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white px-8 py-3 font-avenir font-medium"
                >
                  Смотреть проекты
                  <Icon name="ExternalLink" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
}