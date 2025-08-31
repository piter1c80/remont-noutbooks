import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, Clock, Thermometer, Wind, Droplets, Brush } from 'lucide-react';

const Maintenance = () => {
  const maintenanceServices = [
    {
      icon: Brush,
      title: "Чистка от пыли",
      description: "Полная разборка и очистка всех компонентов от пыли и грязи",
      price: "1 500 ₽",
      time: "2-3 часа",
      frequency: "Каждые 6-12 месяцев",
      benefits: ["Снижение температуры", "Уменьшение шума", "Продление срока службы"]
    },
    {
      icon: Thermometer,
      title: "Замена термопасты",
      description: "Замена термоинтерфейса на процессоре и видеочипе",
      price: "1 200 ₽",
      time: "1-2 часа",
      frequency: "Каждые 2-3 года",
      benefits: ["Лучшее охлаждение", "Снижение троттлинга", "Стабильная работа"]
    },
    {
      icon: Wind,
      title: "Обслуживание системы охлаждения",
      description: "Чистка радиаторов, смазка вентиляторов, проверка работы",
      price: "2 000 ₽",
      time: "2-4 часа",
      frequency: "Каждые 12-18 месяцев",
      benefits: ["Эффективное охлаждение", "Тихая работа", "Предотвращение перегрева"]
    },
    {
      icon: Settings,
      title: "Комплексная профилактика",
      description: "Полное техническое обслуживание всех систем ноутбука",
      price: "3 500 ₽",
      time: "4-6 часов",
      frequency: "Каждые 12 месяцев",
      benefits: ["Полная диагностика", "Оптимизация работы", "Продление срока службы"]
    }
  ];

  const cleaningSteps = [
    {
      step: 1,
      title: "Диагностика и разборка",
      description: "Проверяем состояние ноутбука и аккуратно разбираем корпус"
    },
    {
      step: 2,
      title: "Очистка компонентов",
      description: "Удаляем пыль с материнской платы, вентиляторов и радиаторов"
    },
    {
      step: 3,
      title: "Замена термопасты",
      description: "Наносим новую качественную термопасту на процессор и видеочип"
    },
    {
      step: 4,
      title: "Смазка вентиляторов",
      description: "Смазываем подшипники вентиляторов для бесшумной работы"
    },
    {
      step: 5,
      title: "Сборка и тестирование",
      description: "Собираем ноутбук и проверяем температуры под нагрузкой"
    }
  ];

  const temperatureGuide = [
    { component: "Процессор (простой)", normal: "30-50°C", warning: "50-70°C", critical: ">80°C" },
    { component: "Процессор (нагрузка)", normal: "50-70°C", warning: "70-85°C", critical: ">90°C" },
    { component: "Видеокарта (простой)", normal: "30-45°C", warning: "45-65°C", critical: ">80°C" },
    { component: "Видеокарта (нагрузка)", normal: "60-80°C", warning: "80-90°C", critical: ">95°C" }
  ];

  const maintenanceSchedule = [
    { period: "Каждый месяц", tasks: ["Очистка экрана", "Проверка вентиляционных отверстий", "Обновление ПО"] },
    { period: "Каждые 3 месяца", tasks: ["Очистка клавиатуры", "Проверка температур", "Дефрагментация диска"] },
    { period: "Каждые 6 месяцев", tasks: ["Поверхностная чистка от пыли", "Проверка батареи", "Обновление драйверов"] },
    { period: "Каждый год", tasks: ["Полная чистка", "Замена термопасты", "Комплексная диагностика"] }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600 rounded-full">
                <Settings className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Профилактика и чистка
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Регулярное обслуживание ноутбука для поддержания оптимальной производительности. 
              Чистка от пыли, замена термопасты, профилактика системы охлаждения.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Услуги по обслуживанию
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-green-600" />
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
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Стоимость</div>
                      <div className="text-lg font-semibold text-green-600">{service.price}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Время</div>
                      <div className="font-semibold">{service.time}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Рекомендуемая частота:</div>
                    <Badge variant="outline">{service.frequency}</Badge>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Преимущества:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/order">Записаться</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Процесс профилактики
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {cleaningSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Нормальные температуры
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>Температурный мониторинг</CardTitle>
                  <CardDescription>
                    Контрольные значения температур для основных компонентов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {temperatureGuide.map((temp, index) => (
                      <div key={index} className="border-b pb-3 last:border-b-0">
                        <div className="font-semibold text-gray-900 mb-2">{temp.component}</div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div className="text-center p-2 bg-green-100 rounded">
                            <div className="text-green-700 font-semibold">Норма</div>
                            <div>{temp.normal}</div>
                          </div>
                          <div className="text-center p-2 bg-yellow-100 rounded">
                            <div className="text-yellow-700 font-semibold">Внимание</div>
                            <div>{temp.warning}</div>
                          </div>
                          <div className="text-center p-2 bg-red-100 rounded">
                            <div className="text-red-700 font-semibold">Критично</div>
                            <div>{temp.critical}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                График обслуживания
              </h2>
              <div className="space-y-4">
                {maintenanceSchedule.map((schedule, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{schedule.period}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {schedule.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Абонентское обслуживание</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Предлагаем программу регулярного обслуживания со скидкой:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Скидка 20% на все услуги</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Приоритетное обслуживание</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Напоминания о профилактике</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/subscription">Подключить абонемент</Link>
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

export default Maintenance;