import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Volume2, CheckCircle, Clock, AlertTriangle, Headphones, Mic, Speaker } from 'lucide-react';

const AudioRepair = () => {
  const audioServices = [
    {
      icon: Speaker,
      title: "Замена динамиков",
      description: "Замена неисправных встроенных динамиков",
      price: "от 1 200 ₽",
      time: "1-2 часа",
      includes: ["Диагностика звука", "Замена динамиков", "Настройка звука", "Тестирование"]
    },
    {
      icon: Headphones,
      title: "Ремонт аудиоразъемов",
      description: "Ремонт разъемов для наушников и микрофона",
      price: "от 800 ₽",
      time: "1 час",
      includes: ["Замена разъема", "Пайка контактов", "Проверка контактов", "Тестирование"]
    },
    {
      icon: Mic,
      title: "Ремонт микрофона",
      description: "Восстановление работы встроенного микрофона",
      price: "от 1 000 ₽",
      time: "1-2 часа",
      includes: ["Замена микрофона", "Настройка чувствительности", "Проверка записи", "Калибровка"]
    },
    {
      icon: Volume2,
      title: "Настройка аудиосистемы",
      description: "Программная настройка звука и драйверов",
      price: "от 500 ₽",
      time: "30-60 минут",
      includes: ["Установка драйверов", "Настройка эквалайзера", "Оптимизация звука", "Тестирование"]
    }
  ];

  const commonProblems = [
    "Нет звука из динамиков",
    "Тихий или искаженный звук",
    "Не работает разъем для наушников",
    "Треск и шумы в динамиках",
    "Не работает микрофон",
    "Звук только из одного динамика",
    "Проблемы с Bluetooth аудио",
    "Эхо или обратная связь"
  ];

  const troubleshooting = [
    {
      problem: "Нет звука",
      solutions: [
        "Проверьте уровень громкости",
        "Убедитесь, что звук не отключен",
        "Проверьте драйверы аудио",
        "Перезагрузите аудиослужбы"
      ]
    },
    {
      problem: "Искаженный звук",
      solutions: [
        "Проверьте настройки эквалайзера",
        "Отключите звуковые эффекты",
        "Обновите аудиодрайверы",
        "Проверьте целостность динамиков"
      ]
    },
    {
      problem: "Не работает микрофон",
      solutions: [
        "Проверьте разрешения приложений",
        "Настройте уровень записи",
        "Обновите драйверы",
        "Проверьте физическое подключение"
      ]
    }
  ];

  const audioSpecs = [
    { component: "Встроенные динамики", power: "2-5 Вт", frequency: "100 Гц - 20 кГц" },
    { component: "Встроенный микрофон", type: "Конденсаторный", sensitivity: "-40 дБ" },
    { component: "Аудиоразъем", type: "3.5 мм", standard: "TRRS/TRS" },
    { component: "Bluetooth аудио", version: "4.0-5.2", codecs: "SBC, AAC, aptX" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-600 rounded-full">
                <Volume2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт аудиосистемы
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Восстановление звука в ноутбуках. Ремонт динамиков, микрофонов, 
              аудиоразъемов и настройка аудиосистемы.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Услуги по ремонту аудио
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {audioServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-purple-600" />
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
                      <div className="font-semibold text-purple-600">{service.price}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Время</div>
                      <div className="font-semibold">{service.time}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Гарантия</div>
                      <div className="font-semibold text-green-600">{service.warranty}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Включает:</h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
                Частые проблемы со звуком
              </h2>
              <div className="space-y-3">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Самостоятельная диагностика
              </h2>
              <div className="space-y-6">
                {troubleshooting.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg text-red-600">{item.problem}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">Попробуйте:</p>
                      <ul className="space-y-1">
                        {item.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Технические характеристики аудио
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Спецификации аудиокомпонентов</CardTitle>
                <CardDescription>
                  Технические характеристики аудиосистем современных ноутбуков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Компонент</th>
                        <th className="text-left py-2">Характеристики</th>
                        <th className="text-left py-2">Дополнительно</th>
                      </tr>
                    </thead>
                    <tbody>
                      {audioSpecs.map((spec, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 font-semibold">{spec.component}</td>
                          <td className="py-3">
                            {spec.power && <div>Мощность: {spec.power}</div>}
                            {spec.type && <div>Тип: {spec.type}</div>}
                            {spec.version && <div>Версия: {spec.version}</div>}
                          </td>
                          <td className="py-3">
                            {spec.frequency && <div>{spec.frequency}</div>}
                            {spec.sensitivity && <div>{spec.sensitivity}</div>}
                            {spec.standard && <div>{spec.standard}</div>}
                            {spec.codecs && <div>{spec.codecs}</div>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default AudioRepair;