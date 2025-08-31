import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InfoSections from '@/components/InfoSections';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  Wrench,
  CheckCircle,
  Phone
} from 'lucide-react';

const Index = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Быстрый ремонт",
      description: "Большинство ремонтов выполняем в день обращения"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Предоставляем гарантию до 12 месяцев на все виды работ"
    },
    {
      icon: Award,
      title: "Сертифицированные мастера",
      description: "Наши специалисты имеют официальные сертификаты"
    },
    {
      icon: Users,
      title: "5000+ довольных клиентов",
      description: "За 15 лет работы мы заслужили доверие тысяч клиентов"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличный сервис! Быстро починили экран моего ноутбука, работает как новый.",
      date: "15 января 2025"
    },
    {
      name: "Михаил Иванов",
      rating: 5,
      text: "Профессиональный подход, разумные цены. Рекомендую всем!",
      date: "12 января 2025"
    },
    {
      name: "Елена Сидорова",
      rating: 5,
      text: "Спасли мои важные данные после поломки жесткого диска. Огромное спасибо!",
      date: "8 января 2025"
    }
  ];

  const brands = [
    "Apple", "ASUS", "Acer", "Dell", "HP", "Lenovo", "MSI", "Samsung", "Sony", "Toshiba"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfoSections />
      
      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Мы предлагаем лучшие условия для ремонта вашего ноутбука
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <advantage.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Поддерживаемые бренды */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Работаем со всеми брендами
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем ноутбуки любых производителей
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                {brand}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/reviews">Все отзывы</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Экстренный вызов */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Нужен срочный ремонт?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Звоните прямо сейчас! Работаем 24/7 для экстренных случаев
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-white text-2xl font-bold">
              <Phone className="h-6 w-6" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/emergency">Экстренный вызов</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;