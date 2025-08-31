import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Monitor, CheckCircle, Clock, Shield, AlertTriangle } from 'lucide-react';

const ScreenRepair = () => {
  const problems = [
    "Разбитый экран или трещины",
    "Темный или черный экран",
    "Полосы на экране",
    "Битые пиксели",
    "Мерцание экрана",
    "Неработающая подсветка",
    "Искажение цветов",
    "Белый экран"
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Диагностика",
      description: "Определяем точную причину неисправности экрана"
    },
    {
      step: 2,
      title: "Подбор матрицы",
      description: "Находим точно подходящую матрицу для вашей модели"
    },
    {
      step: 3,
      title: "Замена",
      description: "Аккуратно заменяем поврежденную матрицу на новую"
    },
    {
      step: 4,
      title: "Тестирование",
      description: "Проверяем качество изображения и калибруем экран"
    }
  ];

  const prices = [
    { size: "11-13 дюймов", price: "3 500 - 8 000 ₽" },
    { size: "14-15 дюймов", price: "4 000 - 12 000 ₽" },
    { size: "16-17 дюймов", price: "5 000 - 15 000 ₽" },
    { size: "Gaming ноутбуки", price: "8 000 - 25 000 ₽" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full">
                <Monitor className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт экранов ноутбуков
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная замена матриц и ремонт экранов ноутбуков всех марок. 
              Используем только оригинальные комплектующие с гарантией качества.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Какие проблемы мы решаем
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Процесс ремонта
              </h2>
              <div className="space-y-4">
                {repairSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Стоимость ремонта экранов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prices.map((price, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{price.size}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {price.price}
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/order">Заказать ремонт</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span>Гарантии и преимущества</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold">Гарантия 6 месяцев</div>
                    <div className="text-sm text-gray-600">на все работы</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold">Быстрый ремонт</div>
                    <div className="text-sm text-gray-600">1-2 дня</div>
                  </div>
                  <div className="text-center">
                    <Monitor className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <div className="font-semibold">Оригинальные матрицы</div>
                    <div className="text-sm text-gray-600">высокое качество</div>
                  </div>
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

export default ScreenRepair;