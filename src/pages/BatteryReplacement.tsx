import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, Clock, AlertTriangle, Zap } from 'lucide-react';

const BatteryReplacement = () => {
  const batteryProblems = [
    {
      problem: "Быстрая разрядка",
      description: "Батарея разряжается за 1-2 часа вместо обычных 4-6 часов"
    },
    {
      problem: "Не заряжается",
      description: "Ноутбук не заряжается или заряжается очень медленно"
    },
    {
      problem: "Вздутие батареи",
      description: "Физическое увеличение размера батареи, деформация корпуса"
    },
    {
      problem: "Перегрев",
      description: "Батарея сильно нагревается во время работы или зарядки"
    }
  ];

  const batteryHealth = [
    { range: "90-100%", status: "Отличное", color: "bg-green-500", description: "Батарея в идеальном состоянии" },
    { range: "70-89%", status: "Хорошее", color: "bg-blue-500", description: "Нормальная работа, небольшой износ" },
    { range: "50-69%", status: "Удовлетворительное", color: "bg-yellow-500", description: "Заметное снижение времени работы" },
    { range: "30-49%", status: "Плохое", color: "bg-orange-500", description: "Требуется замена в ближайшее время" },
    { range: "0-29%", status: "Критическое", color: "bg-red-500", description: "Немедленная замена батареи" }
  ];

  const brands = [
    { brand: "Apple MacBook", price: "4 000 - 12 000 ₽", time: "1-2 дня" },
    { brand: "ASUS", price: "2 500 - 6 000 ₽", time: "1 день" },
    { brand: "Acer", price: "2 000 - 5 500 ₽", time: "1 день" },
    { brand: "Dell", price: "2 500 - 7 000 ₽", time: "1-2 дня" },
    { brand: "HP", price: "2 200 - 6 500 ₽", time: "1 день" },
    { brand: "Lenovo", price: "2 300 - 6 000 ₽", time: "1 день" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-yellow-600 rounded-full">
                <Battery className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Замена батарей ноутбуков
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Диагностика состояния батареи и замена на оригинальные аккумуляторы. 
              Восстанавливаем автономность работы вашего ноутбука.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Признаки неисправности батареи
              </h2>
              <div className="space-y-4">
                {batteryProblems.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <span>{item.problem}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Состояние батареи
              </h2>
              <p className="text-gray-600 mb-6">
                Мы проводим полную диагностику состояния батареи и определяем процент износа:
              </p>
              <div className="space-y-4">
                {batteryHealth.map((health, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{health.range}</span>
                      <span className={`px-3 py-1 rounded-full text-white text-sm ${health.color}`}>
                        {health.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{health.description}</p>
                  </div>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-blue-600" />
                    <span>Бесплатная диагностика</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Проведем полную диагностику состояния вашей батареи бесплатно. 
                    Определим точный процент износа и дадим рекомендации.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/diagnostics">Записаться на диагностику</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Стоимость замены батарей по брендам
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{brand.brand}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Стоимость:</span>
                      <span className="font-semibold text-yellow-600">{brand.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Время:</span>
                      <span className="font-semibold">{brand.time}</span>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link to="/order">Заказать замену</Link>
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

export default BatteryReplacement;