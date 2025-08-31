import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { HardDrive, CheckCircle, Clock, AlertTriangle, FileText, Image, Music, Video } from 'lucide-react';

const DataRecovery = () => {
  const recoveryTypes = [
    {
      icon: FileText,
      title: "Документы",
      description: "Word, Excel, PDF, текстовые файлы",
      successRate: "95%"
    },
    {
      icon: Image,
      title: "Фотографии",
      description: "JPEG, PNG, RAW, все форматы изображений",
      successRate: "90%"
    },
    {
      icon: Video,
      title: "Видео",
      description: "MP4, AVI, MOV, все видеоформаты",
      successRate: "85%"
    },
    {
      icon: Music,
      title: "Аудио",
      description: "MP3, WAV, FLAC, музыкальные файлы",
      successRate: "92%"
    }
  ];

  const causes = [
    "Физическое повреждение диска",
    "Случайное удаление файлов",
    "Форматирование диска",
    "Вирусная атака",
    "Сбой файловой системы",
    "Повреждение секторов",
    "Отказ контроллера диска",
    "Повреждение от воды"
  ];

  const process = [
    {
      step: 1,
      title: "Диагностика",
      description: "Определяем тип повреждения и возможность восстановления",
      time: "30-60 минут"
    },
    {
      step: 2,
      title: "Создание образа",
      description: "Создаем побитовую копию поврежденного носителя",
      time: "2-8 часов"
    },
    {
      step: 3,
      title: "Восстановление",
      description: "Используем специализированное ПО для восстановления данных",
      time: "4-24 часа"
    },
    {
      step: 4,
      title: "Проверка",
      description: "Проверяем целостность восстановленных файлов",
      time: "1-2 часа"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-600 rounded-full">
                <HardDrive className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Восстановление данных
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональное восстановление утерянных данных с любых носителей. 
              Используем современное оборудование и программное обеспечение.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Типы восстанавливаемых данных
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {recoveryTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full">
                    <type.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-lg">
                    Успех: {type.successRate}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Причины потери данных
              </h2>
              <div className="space-y-3">
                {causes.map((cause, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{cause}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Процесс восстановления
              </h2>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{step.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Стоимость восстановления данных
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-green-600">Простое восстановление</CardTitle>
                  <CardDescription>Случайное удаление, форматирование</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-4">от 2 000 ₽</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Логические повреждения</li>
                    <li>• Быстрое восстановление</li>
                    <li>• Высокий процент успеха</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-600">Сложное восстановление</CardTitle>
                  <CardDescription>Физические повреждения диска</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-4">от 5 000 ₽</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Физические повреждения</li>
                    <li>• Работа в чистой комнате</li>
                    <li>• Специальное оборудование</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-red-600">Критическое восстановление</CardTitle>
                  <CardDescription>Серьезные повреждения, вода, огонь</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-4">от 10 000 ₽</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Критические повреждения</li>
                    <li>• Максимальные усилия</li>
                    <li>• Индивидуальный подход</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Важная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✓ Что мы гарантируем:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Бесплатная диагностика</li>
                      <li>• Конфиденциальность данных</li>
                      <li>• Оплата только при успехе</li>
                      <li>• Подробный отчет о работе</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">⚠ Важные рекомендации:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Не пытайтесь включать поврежденный диск</li>
                      <li>• Не устанавливайте программы восстановления</li>
                      <li>• Обратитесь к нам как можно скорее</li>
                      <li>• Не разбирайте устройство самостоятельно</li>
                    </ul>
                  </div>
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

export default DataRecovery;