import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Keyboard, CheckCircle, Clock, Droplets, Zap } from 'lucide-react';

const KeyboardRepair = () => {
  const services = [
    {
      title: "Замена отдельных клавиш",
      description: "Замена сломанных или отсутствующих клавиш",
      price: "от 200 ₽ за клавишу",
      time: "30 минут"
    },
    {
      title: "Замена всей клавиатуры",
      description: "Полная замена клавиатуры при серьезных повреждениях",
      price: "от 1 500 ₽",
      time: "1-2 часа"
    },
    {
      title: "Чистка после попадания жидкости",
      description: "Разборка, чистка и восстановление после залития",
      price: "от 1 000 ₽",
      time: "2-4 часа"
    },
    {
      title: "Ремонт подсветки клавиатуры",
      description: "Восстановление работы подсветки клавиш",
      price: "от 800 ₽",
      time: "1-2 часа"
    }
  ];

  const problems = [
    "Не работают отдельные клавиши",
    "Залитие жидкостью",
    "Сломанные клавиши",
    "Не работает подсветка",
    "Клавиши западают",
    "Двойное нажатие клавиш",
    "Поврежден шлейф клавиатуры",
    "Стерлись символы на клавишах"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600 rounded-full">
                <Keyboard className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт клавиатур ноутбуков
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Восстанавливаем работоспособность клавиатур после любых повреждений. 
              От замены отдельных клавиш до полной замены клавиатуры.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Наши услуги по ремонту клавиатур
              </h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-semibold text-green-600">
                            {service.price}
                          </span>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{service.time}</span>
                          </div>
                        </div>
                        <Button asChild size="sm">
                          <Link to="/order">Заказать</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Типичные проблемы с клавиатурой
              </h2>
              <div className="space-y-3">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Droplets className="h-6 w-6 text-blue-600" />
                    <span>Экстренная помощь при залитии</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Если вы пролили жидкость на клавиатуру, немедленно:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                    <li>Выключите ноутбук</li>
                    <li>Отключите зарядное устройство</li>
                    <li>Переверните ноутбук клавиатурой вниз</li>
                    <li>Обратитесь к нам как можно скорее</li>
                  </ol>
                  <Button asChild className="w-full">
                    <Link to="/emergency">Экстренный вызов</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KeyboardRepair;