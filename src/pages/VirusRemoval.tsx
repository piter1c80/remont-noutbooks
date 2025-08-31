import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Clock, AlertTriangle, Bug, Lock, Scan, Trash2 } from 'lucide-react';

const VirusRemoval = () => {
  const virusTypes = [
    {
      icon: Bug,
      title: "Вирусы и черви",
      description: "Удаление вредоносных программ, замедляющих работу системы",
      danger: "Средняя"
    },
    {
      icon: Lock,
      title: "Шифровальщики (Ransomware)",
      description: "Восстановление зашифрованных файлов и удаление вымогателей",
      danger: "Высокая"
    },
    {
      icon: Scan,
      title: "Шпионское ПО",
      description: "Обнаружение и удаление программ слежения за пользователем",
      danger: "Высокая"
    },
    {
      icon: Trash2,
      title: "Рекламное ПО",
      description: "Очистка от навязчивой рекламы и нежелательных программ",
      danger: "Низкая"
    }
  ];

  const symptoms = [
    "Медленная работа компьютера",
    "Частые зависания и перезагрузки",
    "Появление неизвестных программ",
    "Блокировка доступа к файлам",
    "Навязчивая реклама в браузере",
    "Изменение стартовой страницы браузера",
    "Неожиданные сообщения об ошибках",
    "Высокая нагрузка на процессор"
  ];

  const services = [
    {
      title: "Экспресс-очистка",
      description: "Быстрое сканирование и удаление основных угроз",
      price: "1 500 ₽",
      time: "1-2 часа",
      includes: ["Сканирование системы", "Удаление найденных угроз", "Базовая оптимизация"]
    },
    {
      title: "Полная очистка",
      description: "Глубокое сканирование всей системы и реестра",
      price: "2 500 ₽",
      time: "3-4 часа",
      includes: ["Глубокое сканирование", "Очистка реестра", "Установка антивируса", "Настройка защиты"]
    },
    {
      title: "Восстановление после шифровальщиков",
      description: "Специализированное восстановление зашифрованных данных",
      price: "от 5 000 ₽",
      time: "1-3 дня",
      includes: ["Анализ шифрования", "Попытка расшифровки", "Восстановление из резервных копий", "Усиленная защита"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-600 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Удаление вирусов и защита
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексная очистка от вредоносного ПО и настройка надежной защиты. 
              Восстанавливаем безопасность и производительность вашего ноутбука.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Типы угроз, с которыми мы боремся
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {virusTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full">
                    <type.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge 
                    variant={type.danger === 'Высокая' ? 'destructive' : type.danger === 'Средняя' ? 'secondary' : 'outline'}
                  >
                    Опасность: {type.danger}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Признаки заражения
              </h2>
              <div className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-red-600">⚠ Экстренные меры</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    При подозрении на заражение немедленно:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                    <li>Отключите интернет</li>
                    <li>Не вводите пароли и личные данные</li>
                    <li>Не переводите деньги по требованию</li>
                    <li>Обратитесь к специалистам</li>
                  </ol>
                  <Button asChild className="w-full" variant="destructive">
                    <Link to="/emergency">Экстренная помощь</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Наши услуги
              </h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                        <Badge variant="outline">{service.time}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-600 mb-4">
                        {service.price}
                      </div>
                      <ul className="space-y-1 mb-4">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full">
                        <Link to="/order">Заказать услугу</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirusRemoval;