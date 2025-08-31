import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Cpu, CheckCircle, Clock, AlertTriangle, Zap, Thermometer, Wrench } from 'lucide-react';

const MotherboardRepair = () => {
  const repairTypes = [
    {
      icon: Zap,
      title: "Ремонт цепей питания",
      description: "Восстановление подачи питания на компоненты материнской платы",
      complexity: "Высокая",
      price: "от 4 000 ₽",
      time: "2-5 дней",
      successRate: "85%"
    },
    {
      icon: Cpu,
      title: "Замена чипов BGA",
      description: "Замена процессоров, видеочипов и других BGA компонентов",
      complexity: "Очень высокая",
      price: "от 8 000 ₽",
      time: "3-7 дней",
      successRate: "75%"
    },
    {
      icon: Wrench,
      title: "Восстановление дорожек",
      description: "Восстановление поврежденных проводящих дорожек на плате",
      complexity: "Высокая",
      price: "от 3 000 ₽",
      time: "1-3 дня",
      successRate: "90%"
    },
    {
      icon: Thermometer,
      title: "Ремонт системы охлаждения",
      description: "Замена термопасты, ремонт системы охлаждения чипов",
      complexity: "Средняя",
      price: "от 2 000 ₽",
      time: "1-2 дня",
      successRate: "95%"
    }
  ];

  const symptoms = [
    "Ноутбук не включается",
    "Включается, но нет изображения",
    "Перегрев и автоматическое выключение",
    "Артефакты на экране",
    "Не заряжается батарея",
    "Не работают USB порты",
    "Проблемы с Wi-Fi",
    "Синий экран смерти (BSOD)"
  ];

  const equipment = [
    {
      name: "Паяльная станция Hakko",
      description: "Профессиональное оборудование для точной пайки"
    },
    {
      name: "BGA станция",
      description: "Специализированное оборудование для работы с BGA чипами"
    },
    {
      name: "Микроскоп",
      description: "Увеличение до 100x для работы с мелкими компонентами"
    },
    {
      name: "Тепловизор",
      description: "Диагностика перегрева компонентов"
    },
    {
      name: "Осциллограф",
      description: "Анализ электрических сигналов"
    },
    {
      name: "Мультиметр",
      description: "Измерение напряжений и сопротивлений"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Визуальная диагностика",
      description: "Осмотр платы под микроскопом, поиск видимых повреждений"
    },
    {
      step: 2,
      title: "Электрическая диагностика",
      description: "Проверка цепей питания, измерение напряжений"
    },
    {
      step: 3,
      title: "Тепловая диагностика",
      description: "Поиск перегревающихся компонентов с помощью тепловизора"
    },
    {
      step: 4,
      title: "Ремонт",
      description: "Выполнение ремонтных работ с использованием профессионального оборудования"
    },
    {
      step: 5,
      title: "Тестирование",
      description: "Проверка работоспособности всех систем после ремонта"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-600 rounded-full">
                <Cpu className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт материнских плат
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Сложный ремонт материнских плат ноутбуков. Микропайка, замена чипов, 
              восстановление цепей питания с использованием профессионального оборудования.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Виды ремонта материнских плат
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {repairTypes.map((repair, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <repair.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{repair.title}</CardTitle>
                      <CardDescription className="text-base">
                        {repair.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Сложность:</div>
                      <Badge variant={repair.complexity === 'Очень высокая' ? 'destructive' : 'secondary'}>
                        {repair.complexity}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Успешность:</div>
                      <Badge variant="outline">{repair.successRate}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-red-600">{repair.price}</div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{repair.time}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to="/order">Заказать</Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Признаки неисправности материнской платы
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
                  <CardTitle className="text-red-600">⚠ Важное предупреждение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Ремонт материнских плат — это сложная процедура, требующая специального 
                    оборудования и высокой квалификации. Не пытайтесь ремонтировать самостоятельно!
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Риск полного выхода из строя</li>
                    <li>• Потеря гарантии</li>
                    <li>• Возможность повреждения других компонентов</li>
                    <li>• Высокая стоимость восстановления</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Наше оборудование
              </h2>
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Процесс диагностики и ремонта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                        </div>
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

export default MotherboardRepair;