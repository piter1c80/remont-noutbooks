import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react';

const Subscription = () => {
  const plans = [
    {
      name: "Базовый",
      price: "2 000 ₽/мес",
      description: "Для домашних пользователей",
      features: [
        "Ежемесячная диагностика",
        "Чистка от пыли (1 раз в 6 мес)",
        "Скидка 15% на все ремонты",
        "Приоритетная запись",
        "Бесплатные консультации",
        "Напоминания о профилактике"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Стандартный",
      price: "3 500 ₽/мес",
      description: "Оптимальный выбор",
      features: [
        "Все из базового плана",
        "Замена термопасты (1 раз в год)",
        "Скидка 25% на все ремонты",
        "Экстренный выезд со скидкой 50%",
        "Резервное копирование данных",
        "Обновление ПО и драйверов",
        "Оптимизация системы"
      ],
      popular: true,
      color: "border-blue-500"
    },
    {
      name: "Премиум",
      price: "5 000 ₽/мес",
      description: "Максимальная защита",
      features: [
        "Все из стандартного плана",
        "Ежемесячная профилактика",
        "Скидка 35% на все ремонты",
        "Бесплатный экстренный выезд",
        "Замена расходников",
        "Персональный менеджер",
        "Гарантия 24 месяца",
        "Лоанер на время ремонта"
      ],
      popular: false,
      color: "border-purple-500"
    }
  ];

  const corporatePlans = [
    {
      name: "Малый офис",
      devices: "До 10 устройств",
      price: "15 000 ₽/мес",
      features: [
        "Ежемесячное ТО всех устройств",
        "Скидка 30% на ремонты",
        "Выездное обслуживание",
        "Приоритетная поддержка",
        "Отчеты о состоянии техники"
      ]
    },
    {
      name: "Средний офис",
      devices: "До 50 устройств",
      price: "45 000 ₽/мес",
      features: [
        "Все из плана 'Малый офис'",
        "Персональный инженер",
        "Склад запчастей на объекте",
        "Экстренный ремонт 24/7",
        "Обучение IT-персонала"
      ]
    },
    {
      name: "Крупный офис",
      devices: "Более 50 устройств",
      price: "По договоренности",
      features: [
        "Индивидуальные условия",
        "Команда инженеров",
        "Полное IT-сопровождение",
        "Максимальные скидки",
        "Специальные условия"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Экономия времени",
      description: "Регулярное обслуживание предотвращает серьезные поломки"
    },
    {
      icon: Shield,
      title: "Защита инвестиций",
      description: "Продлеваем срок службы вашего оборудования"
    },
    {
      icon: Star,
      title: "Приоритетный сервис",
      description: "Первоочередное обслуживание для абонентов"
    },
    {
      icon: Users,
      title: "Персональный подход",
      description: "Индивидуальный план обслуживания для каждого клиента"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full">
                <Calendar className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Абонентское обслуживание
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Регулярное техническое обслуживание для поддержания оптимальной работы 
              ваших устройств. Предотвращение поломок и экономия на ремонте.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Планы для частных лиц
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-shadow duration-300 relative ${plan.color} ${
                  plan.popular ? 'border-2 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-4">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to="/order">Подключить план</Link>
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
            Корпоративные планы
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corporatePlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.devices}</CardDescription>
                  <div className="text-2xl font-bold text-purple-600 mt-4">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/contacts">Обсудить условия</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Преимущества абонентского обслуживания
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Подключите абонентское обслуживание и забудьте о проблемах с техникой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/order">Подключить план</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/contacts">Получить консультацию</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscription;