import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Wifi, CheckCircle, Clock, AlertTriangle, Radio, Bluetooth, Signal } from 'lucide-react';

const WifiRepair = () => {
  const services = [
    {
      icon: Wifi,
      title: "Замена Wi-Fi модуля",
      description: "Полная замена неисправного беспроводного модуля",
      price: "от 1 800 ₽",
      time: "1-2 часа",
      warranty: "6 месяцев"
    },
    {
      icon: Radio,
      title: "Ремонт антенн",
      description: "Замена или ремонт Wi-Fi антенн в крышке экрана",
      price: "от 1 200 ₽",
      time: "1-2 часа",
      warranty: "3 месяца"
    },
    {
      icon: Bluetooth,
      title: "Ремонт Bluetooth",
      description: "Восстановление работы Bluetooth соединения",
      price: "от 1 500 ₽",
      time: "1 час",
      warranty: "6 месяцев"
    },
    {
      icon: Signal,
      title: "Настройка и оптимизация",
      description: "Настройка драйверов, оптимизация сигнала",
      price: "от 800 ₽",
      time: "30-60 минут",
      warranty: "1 месяц"
    }
  ];

  const problems = [
    "Wi-Fi не включается",
    "Не видит беспроводные сети",
    "Слабый сигнал Wi-Fi",
    "Частые разрывы соединения",
    "Медленная скорость интернета",
    "Не работает Bluetooth",
    "Ошибки драйверов",
    "Перегрев Wi-Fi модуля"
  ];

  const diagnosticSteps = [
    {
      step: 1,
      title: "Проверка драйверов",
      description: "Проверяем актуальность и корректность установленных драйверов"
    },
    {
      step: 2,
      title: "Тест оборудования",
      description: "Проверяем работоспособность Wi-Fi модуля и антенн"
    },
    {
      step: 3,
      title: "Анализ сигнала",
      description: "Измеряем силу сигнала и качество соединения"
    },
    {
      step: 4,
      title: "Физический осмотр",
      description: "Проверяем целостность модуля и антенных проводов"
    }
  ];

  const supportedStandards = [
    { standard: "802.11a", speed: "54 Мбит/с", frequency: "5 ГГц" },
    { standard: "802.11b", speed: "11 Мбит/с", frequency: "2.4 ГГц" },
    { standard: "802.11g", speed: "54 Мбит/с", frequency: "2.4 ГГц" },
    { standard: "802.11n", speed: "600 Мбит/с", frequency: "2.4/5 ГГц" },
    { standard: "802.11ac", speed: "6.93 Гбит/с", frequency: "5 ГГц" },
    { standard: "802.11ax (Wi-Fi 6)", speed: "9.6 Гбит/с", frequency: "2.4/5 ГГц" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full">
                <Wifi className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт Wi-Fi модулей
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Восстановление беспроводного соединения ноутбуков. Ремонт Wi-Fi и Bluetooth модулей, 
              замена антенн, настройка драйверов.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наши услуги по ремонту Wi-Fi
          </h2>
          
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
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Цена</div>
                      <div className="font-semibold text-blue-600">{service.price}</div>
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
                Признаки проблем с Wi-Fi
              </h2>
              <div className="space-y-3">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Быстрая самодиагностика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Попробуйте эти шаги перед обращением к нам:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Перезагрузите ноутбук</li>
                    <li>Проверьте, включен ли Wi-Fi (Fn + F2/F3)</li>
                    <li>Обновите драйверы сетевого адаптера</li>
                    <li>Проверьте работу на другой сети</li>
                  </ol>
                  <p className="text-sm text-gray-600 mt-4">
                    Если проблема не решилась — обращайтесь к нам!
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Процесс диагностики
              </h2>
              <div className="space-y-6">
                {diagnosticSteps.map((step, index) => (
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

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Поддерживаемые стандарты Wi-Fi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {supportedStandards.map((standard, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div>
                          <div className="font-semibold">{standard.standard}</div>
                          <div className="text-sm text-gray-600">{standard.frequency}</div>
                        </div>
                        <Badge variant="outline">{standard.speed}</Badge>
                      </div>
                    ))}
                  </div>
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

export default WifiRepair;