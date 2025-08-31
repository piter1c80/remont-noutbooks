import React from 'react';
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
  Settings 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InfoSections = () => {
  const sections = [
    {
      icon: Monitor,
      title: "Ремонт экранов",
      description: "Замена матриц, ремонт подсветки, устранение битых пикселей",
      link: "/screen-repair",
      color: "text-blue-600"
    },
    {
      icon: Keyboard,
      title: "Ремонт клавиатур",
      description: "Замена клавиш, ремонт шлейфов, чистка от жидкости",
      link: "/keyboard-repair",
      color: "text-green-600"
    },
    {
      icon: Battery,
      title: "Замена батарей",
      description: "Диагностика и замена аккумуляторов, калибровка батареи",
      link: "/battery-replacement",
      color: "text-yellow-600"
    },
    {
      icon: HardDrive,
      title: "Ремонт накопителей",
      description: "Восстановление данных, замена HDD/SSD, увеличение памяти",
      link: "/storage-repair",
      color: "text-purple-600"
    },
    {
      icon: Cpu,
      title: "Ремонт материнских плат",
      description: "Пайка компонентов, замена чипов, ремонт цепей питания",
      link: "/motherboard-repair",
      color: "text-red-600"
    },
    {
      icon: Wifi,
      title: "Ремонт Wi-Fi модулей",
      description: "Замена Wi-Fi карт, настройка беспроводных соединений",
      link: "/wifi-repair",
      color: "text-indigo-600"
    },
    {
      icon: Volume2,
      title: "Ремонт аудиосистемы",
      description: "Замена динамиков, ремонт разъемов, настройка звука",
      link: "/audio-repair",
      color: "text-pink-600"
    },
    {
      icon: Zap,
      title: "Ремонт системы питания",
      description: "Замена разъемов питания, ремонт зарядных устройств",
      link: "/power-repair",
      color: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Защита от вирусов",
      description: "Удаление вредоносного ПО, установка антивирусов",
      link: "/virus-removal",
      color: "text-teal-600"
    },
    {
      icon: Settings,
      title: "Профилактика и чистка",
      description: "Чистка от пыли, замена термопасты, профилактика системы",
      link: "/maintenance",
      color: "text-gray-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и обслуживанию ноутбуков. 
            Работаем с устройствами всех производителей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full group-hover:bg-blue-50 transition-colors">
                  <section.icon className={`h-8 w-8 ${section.color}`} />
                </div>
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  {section.description}
                </CardDescription>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={section.link}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;