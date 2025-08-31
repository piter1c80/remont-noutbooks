import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, Clock, Star } from 'lucide-react';

const Prices = () => {
  const priceCategories = [
    {
      category: "Диагностика",
      services: [
        { name: "Базовая диагностика", price: "Бесплатно", time: "30 мин" },
        { name: "Расширенная диагностика", price: "1 000 ₽", time: "1-2 часа" },
        { name: "Диагностика после повреждений", price: "1 500 ₽", time: "2-4 часа" }
      ]
    },
    {
      category: "Ремонт экранов",
      services: [
        { name: "Замена матрицы 11-13\"", price: "3 500 - 8 000 ₽", time: "1-2 дня" },
        { name: "Замена матрицы 14-15\"", price: "4 000 - 12 000 ₽", time: "1-2 дня" },
        { name: "Замена матрицы 16-17\"", price: "5 000 - 15 000 ₽", time: "1-2 дня" },
        { name: "Ремонт подсветки", price: "2 000 - 4 000 ₽", time: "1 день" }
      ]
    },
    {
      category: "Ремонт клавиатур",
      services: [
        { name: "Замена одной клавиши", price: "200 ₽", time: "15 мин" },
        { name: "Замена клавиатуры", price: "1 500 - 3 000 ₽", time: "1-2 часа" },
        { name: "Чистка после залития", price: "1 000 - 2 000 ₽", time: "2-4 часа" },
        { name: "Ремонт подсветки клавиш", price: "800 - 1 500 ₽", time: "1-2 часа" }
      ]
    },
    {
      category: "Замена батарей",
      services: [
        { name: "Батарея для ноутбука (стандарт)", price: "2 500 - 6 000 ₽", time: "1 день" },
        { name: "Батарея для MacBook", price: "4 000 - 12 000 ₽", time: "1-2 дня" },
        { name: "Батарея для игровых ноутбуков", price: "3 500 - 8 000 ₽", time: "1 день" },
        { name: "Калибровка батареи", price: "500 ₽", time: "2 часа" }
      ]
    },
    {
      category: "Восстановление данных",
      services: [
        { name: "Логическое восстановление", price: "2 000 - 5 000 ₽", time: "1-2 дня" },
        { name: "Физическое восстановление", price: "5 000 - 15 000 ₽", time: "3-7 дней" },
        { name: "Восстановление RAID", price: "8 000 - 25 000 ₽", time: "5-10 дней" },
        { name: "Экстренное восстановление", price: "+100% к стоимости", time: "24 часа" }
      ]
    },
    {
      category: "Профилактика",
      services: [
        { name: "Чистка от пыли", price: "1 500 ₽", time: "2-3 часа" },
        { name: "Замена термопасты", price: "1 200 ₽", time: "1-2 часа" },
        { name: "Комплексная профилактика", price: "3 500 ₽", time: "4-6 часов" },
        { name: "Абонентское обслуживание", price: "от 2 000 ₽/мес", time: "по графику" }
      ]
    }
  ];

  const discounts = [
    { condition: "Студентам и пенсионерам", discount: "10%" },
    { condition: "При ремонте 2+ устройств", discount: "15%" },
    { condition: "Постоянным клиентам", discount: "20%" },
    { condition: "Абонентское обслуживание", discount: "25%" }
  ];

  const additionalServices = [
    { service: "Срочный ремонт (в течение дня)", surcharge: "+100%" },
    { service: "Ускоренный ремонт (1 день)", surcharge: "+50%" },
    { service: "Вызов курьера", surcharge: "+500 ₽" },
    { service: "Выездной ремонт", surcharge: "+1 000 ₽" },
    { service: "Работа в выходные", surcharge: "+30%" },
    { service: "Ремонт в ночное время", surcharge: "+50%" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full">
                <Calculator className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Цены на услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозрачное ценообразование без скрытых доплат. Все цены фиксированы 
              и согласовываются с клиентом до начала работ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {priceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="border-b pb-3 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-gray-900 text-sm">
                            {service.name}
                          </span>
                          <span className="font-semibold text-blue-600 text-sm">
                            {service.price}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <Clock className="h-3 w-3" />
                          <span>{service.time}</span>
                        </div>
                      </div>
                    ))}
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
                Скидки и акции
              </h2>
              <div className="space-y-4">
                {discounts.map((discount, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">{discount.condition}</span>
                        <Badge variant="secondary" className="text-lg">
                          -{discount.discount}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <span>Программа лояльности</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Накапливайте бонусы за каждый ремонт и получайте скидки на будущие услуги:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">5% кэшбэк с каждого заказа</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Дополнительные скидки постоянным клиентам</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Приоритетное обслуживание</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Дополнительные услуги
              </h2>
              <div className="space-y-3">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700">{service.service}</span>
                    <Badge variant="outline">{service.surcharge}</Badge>
                  </div>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Способы оплаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Наличными в офисе</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Банковской картой</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Безналичный расчет для юр. лиц</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Рассрочка до 12 месяцев</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Нужна точная стоимость?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Оставьте заявку на бесплатную диагностику, и мы определим точную стоимость ремонта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/diagnostics">Бесплатная диагностика</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/order">Заказать ремонт</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;