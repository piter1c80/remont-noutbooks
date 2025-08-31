import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Monitor, 
  Keyboard, 
  Battery, 
  HardDrive, 
  Cpu, 
  Wifi,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

const Repair = () => {
  const repairCategories = [
    {
      icon: Monitor,
      title: "Ремонт экранов",
      description: "Замена матриц, ремонт подсветки, устранение дефектов изображения",
      services: ["Замена матрицы", "Ремонт подсветки", "Устранение полос", "Замена стекла"],
      priceRange: "3 500 - 15 000 ₽",
      link: "/screen-repair"
    },
    {
      icon: Keyboard,
      title: "Ремонт клавиатур",
      description: "Замена клавиш, ремонт шлейфов, восстановление после залития",
      services: ["Замена клавиш", "Ремонт шлейфа", "Чистка после жидкости", "Ремонт подсветки"],
      priceRange: "200 - 3 000 ₽",
      link: "/keyboard-repair"
    },
    {
      icon: Battery,
      title: "Замена батарей",
      description: "Диагностика и замена аккумуляторов, калибровка системы питания",
      services: ["Замена батареи", "Калибровка", "Диагностика износа", "Ремонт контроллера"],
      priceRange: "2 000 - 12 000 ₽",
      link: "/battery-replacement"
    },
    {
      icon: HardDrive,
      title: "Ремонт накопителей",
      description: "Восстановление данных, замена HDD/SSD, увеличение памяти",
      services: ["Восстановление данных", "Замена HDD/SSD", "Увеличение памяти", "Клонирование"],
      priceRange: "2 000 - 20 000 ₽",
      link: "/storage-repair"
    },
    {
      icon: Cpu,
      title: "Ремонт материнских плат",
      description: "Микропайка, замена чипов, ремонт цепей питания",
      services: ["Микропайка BGA", "Замена чипов", "Ремонт цепей", "Восстановление дорожек"],
      priceRange: "4 000 - 25 000 ₽",
      link: "/motherboard-repair"
    },
    {
      icon: Wifi,
      title: "Ремонт беспроводных модулей",
      description: "Замена Wi-Fi карт, ремонт антенн, настройка соединений",
      services: ["Замена Wi-Fi карты", "Ремонт антенн", "Настройка Bluetooth", "Обновление драйверов"],
      priceRange: "1 500 - 5 000 ₽",
      link: "/wifi-repair"
    }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Прием и регистрация",
      description: "Принимаем ваш ноутбук, оформляем документы, выдаем квитанцию",
      time: "5-10 минут"
    },
    {
      step: 2,
      title: "Диагностика",
      description: "Проводим полную диагностику для выявления всех неисправностей",
      time: "30-60 минут"
    },
    {
      step: 3,
      title: "Согласование",
      description: "Сообщаем результаты диагностики и согласовываем стоимость ремонта",
      time: "15-30 минут"
    },
    {
      step: 4,
      title: "Ремонт",
      description: "Выполняем ремонтные работы с использованием качественных запчастей",
      time: "1-5 дней"
    },
    {
      step: 5,
      title: "Тестирование",
      description: "Проверяем качество выполненных работ и стабильность работы",
      time: "30-60 минут"
    },
    {
      step: 6,
      title: "Выдача",
      description: "Выдаем отремонтированный ноутбук с гарантией и документами",
      time: "10-15 минут"
    }
  ];

  const guarantees = [
    "Гарантия на работы до 12 месяцев",
    "Гарантия на запчасти до 24 месяцев",
    "Бесплатная диагностика при ремонте",
    "Фиксированные цены без доплат",
    "Использование оригинальных запчастей",
    "Возврат денег при невозможности ремонта"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-600 rounded-full">
                <Wrench className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт ноутбуков
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт ноутбуков любой сложности. 
              От простой замены клавиш до сложного ремонта материнских плат.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Виды ремонта
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {repairCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <category.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Услуги:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-1">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-base">
                      {category.priceRange}
                    </Badge>
                    <Button asChild>
                      <Link to={category.link}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Процесс ремонта
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repairProcess.map((process, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {process.step}
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                    <CardDescription>{process.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{process.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                  <Shield className="h-8 w-8 text-green-600" />
                  <span>Наши гарантии</span>
                </CardTitle>
                <CardDescription>
                  Мы уверены в качестве наших услуг и предоставляем расширенные гарантии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{guarantee}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild size="lg">
                    <Link to="/order">Заказать ремонт</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Repair;