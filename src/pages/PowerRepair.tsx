import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, Clock, AlertTriangle, Plug, Battery, Power } from 'lucide-react';

const PowerRepair = () => {
  const powerServices = [
    {
      icon: Plug,
      title: "Замена разъема питания",
      description: "Ремонт или замена поврежденного разъема зарядки",
      price: "от 1 500 ₽",
      time: "2-4 часа",
      complexity: "Средняя"
    },
    {
      icon: Zap,
      title: "Ремонт цепей питания",
      description: "Восстановление поврежденных цепей питания на материнской плате",
      price: "от 3 000 ₽",
      time: "1-3 дня",
      complexity: "Высокая"
    },
    {
      icon: Battery,
      title: "Ремонт контроллера заряда",
      description: "Замена или ремонт микросхемы управления зарядкой",
      price: "от 2 500 ₽",
      time: "1-2 дня",
      complexity: "Высокая"
    },
    {
      icon: Power,
      title: "Замена блока питания",
      description: "Подбор и замена зарядного устройства",
      price: "от 1 200 ₽",
      time: "1 час",
      complexity: "Низкая"
    }
  ];

  const symptoms = [
    "Ноутбук не заряжается",
    "Заряжается только в определенном положении кабеля",
    "Быстро разряжается батарея",
    "Ноутбук работает только от сети",
    "Перегрев зарядного устройства",
    "Искры при подключении зарядки",
    "Неисправный индикатор зарядки",
    "Ноутбук выключается при отключении зарядки"
  ];

  const safetyTips = [
    {
      title: "Не используйте поврежденные зарядки",
      description: "Поврежденные кабели и блоки питания могут быть опасны"
    },
    {
      title: "Избегайте перегрева",
      description: "Не закрывайте вентиляционные отверстия зарядного устройства"
    },
    {
      title: "Используйте оригинальные зарядки",
      description: "Неоригинальные зарядки могут повредить ноутбук"
    },
    {
      title: "Не оставляйте на зарядке постоянно",
      description: "Постоянная зарядка может сократить срок службы батареи"
    }
  ];

  const diagnosticProcess = [
    {
      step: 1,
      title: "Проверка зарядного устройства",
      description: "Тестируем блок питания и кабель на работоспособность"
    },
    {
      step: 2,
      title: "Диагностика разъема",
      description: "Проверяем состояние разъема питания на ноутбуке"
    },
    {
      step: 3,
      title: "Тест цепей питания",
      description: "Измеряем напряжения на материнской плате"
    },
    {
      step: 4,
      title: "Проверка контроллера заряда",
      description: "Диагностируем работу микросхемы управления питанием"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-yellow-600 rounded-full">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт системы питания
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Диагностика и ремонт всех компонентов системы питания ноутбука. 
              От замены разъемов до сложного ремонта цепей питания.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Услуги по ремонту питания
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {powerServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-yellow-600" />
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
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Цена</div>
                      <div className="font-semibold text-yellow-600">{service.price}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Время</div>
                      <div className="font-semibold">{service.time}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Сложность</div>
                      <Badge variant={
                        service.complexity === 'Высокая' ? 'destructive' : 
                        service.complexity === 'Средняя' ? 'secondary' : 'outline'
                      }>
                        {service.complexity}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/order">Заказать ремонт</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Признаки проблем с питанием
              </h2>
              <div className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-red-600">⚠ Меры безопасности</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {safetyTips.map((tip, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                        <p className="text-sm text-gray-600">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Процесс диагностики
              </h2>
              <div className="space-y-6">
                {diagnosticProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
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

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Экстренная помощь</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    При проблемах с питанием, которые могут быть опасны 
                    (искры, дым, запах гари), немедленно:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                    <li>Отключите зарядное устройство</li>
                    <li>Выключите ноутбук</li>
                    <li>Извлеките батарею (если возможно)</li>
                    <li>Обратитесь к специалистам</li>
                  </ol>
                  <Button asChild className="w-full" variant="destructive">
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

export default PowerRepair;