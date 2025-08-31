import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Keyboard, 
  Battery, 
  HardDrive, 
  Cpu, 
  Wifi, 
  Volume2, 
  Zap, 
  Shield, 
  Settings,
  Clock,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Ремонт экранов и матриц",
      description: "Замена разбитых экранов, ремонт подсветки, устранение полос и битых пикселей",
      price: "от 3 500 ₽",
      time: "1-2 дня",
      features: ["Оригинальные матрицы", "Гарантия 6 месяцев", "Бесплатная диагностика"],
      link: "/screen-repair"
    },
    {
      icon: Keyboard,
      title: "Ремонт клавиатур",
      description: "Замена отдельных клавиш, ремонт шлейфов, чистка после попадания жидкости",
      price: "от 1 500 ₽",
      time: "1 день",
      features: ["Замена отдельных клавиш", "Ремонт подсветки", "Чистка механизмов"],
      link: "/keyboard-repair"
    },
    {
      icon: Battery,
      title: "Замена аккумуляторов",
      description: "Диагностика батареи, замена на оригинальные аккумуляторы, калибровка",
      price: "от 2 500 ₽",
      time: "1 день",
      features: ["Оригинальные батареи", "Калибровка системы", "Гарантия 12 месяцев"],
      link: "/battery-replacement"
    },
    {
      icon: HardDrive,
      title: "Ремонт накопителей",
      description: "Восстановление данных, замена HDD/SSD, увеличение объема памяти",
      price: "от 2 000 ₽",
      time: "1-3 дня",
      features: ["Восстановление данных", "Клонирование дисков", "Увеличение памяти"],
      link: "/storage-repair"
    },
    {
      icon: Cpu,
      title: "Ремонт материнских плат",
      description: "Микропайка компонентов, замена чипов, ремонт цепей питания",
      price: "от 4 000 ₽",
      time: "2-5 дней",
      features: ["Микропайка BGA", "Замена чипов", "Ремонт цепей"],
      link: "/motherboard-repair"
    },
    {
      icon: Wifi,
      title: "Ремонт Wi-Fi модулей",
      description: "Замена Wi-Fi карт, ремонт антенн, настройка беспроводных соединений",
      price: "от 1 800 ₽",
      time: "1 день",
      features: ["Замена Wi-Fi карт", "Ремонт антенн", "Настройка сети"],
      link: "/wifi-repair"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Услуги по ремонту ноутбуков
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по диагностике, ремонту и обслуживанию ноутбуков. 
              Работаем быстро, качественно и с гарантией.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="text-lg font-semibold">
                        {service.price}
                      </Badge>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{service.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <Button asChild className="flex-1">
                      <Link to={service.link}>Подробнее</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/order">Заказать</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;