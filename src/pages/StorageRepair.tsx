import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { HardDrive, CheckCircle, Clock, AlertTriangle, Database, Zap, Copy } from 'lucide-react';

const StorageRepair = () => {
  const storageTypes = [
    {
      type: "HDD (Жесткие диски)",
      description: "Традиционные механические накопители",
      problems: ["Битые сектора", "Механические повреждения", "Щелчки и скрежет", "Медленная работа"],
      repairability: 70,
      avgPrice: "2 000 - 8 000 ₽"
    },
    {
      type: "SSD (Твердотельные накопители)",
      description: "Современные быстрые накопители без движущихся частей",
      problems: ["Сбой контроллера", "Износ ячеек памяти", "Проблемы с прошивкой", "Логические ошибки"],
      repairability: 85,
      avgPrice: "3 000 - 12 000 ₽"
    },
    {
      type: "NVMe M.2",
      description: "Сверхбыстрые накопители нового поколения",
      problems: ["Перегрев", "Сбой контроллера", "Проблемы с интерфейсом", "Износ памяти"],
      repairability: 80,
      avgPrice: "4 000 - 15 000 ₽"
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Восстановление данных",
      description: "Восстановление утерянных файлов с поврежденных накопителей",
      features: ["Логическое восстановление", "Физическое восстановление", "Работа в чистой комнате", "Восстановление RAID"],
      price: "от 2 000 ₽",
      successRate: "90%"
    },
    {
      icon: Copy,
      title: "Клонирование дисков",
      description: "Создание точной копии накопителя для переноса данных",
      features: ["Побитовое копирование", "Перенос системы", "Сохранение структуры", "Проверка целостности"],
      price: "от 1 500 ₽",
      successRate: "99%"
    },
    {
      icon: Zap,
      title: "Увеличение памяти",
      description: "Замена накопителя на больший объем с переносом данных",
      features: ["Подбор совместимого SSD", "Перенос системы", "Оптимизация", "Настройка"],
      price: "от 3 000 ₽",
      successRate: "100%"
    }
  ];

  const warningSigns = [
    "Медленная загрузка системы",
    "Частые зависания и BSOD",
    "Странные звуки из ноутбука",
    "Ошибки при чтении файлов",
    "Исчезновение файлов",
    "Сообщения о проблемах с диском",
    "Невозможность загрузки ОС",
    "Перегрев ноутбука"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-600 rounded-full">
                <HardDrive className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт накопителей
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт HDD, SSD и NVMe накопителей. 
              Восстановление данных, увеличение памяти, замена накопителей.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Типы накопителей
          </h2>
          
          <div className="space-y-8">
            {storageTypes.map((storage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{storage.type}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {storage.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-lg">
                      {storage.avgPrice}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Типичные проблемы:</h4>
                      <div className="space-y-2">
                        {storage.problems.map((problem, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="text-gray-700">{problem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Вероятность успешного ремонта:
                      </h4>
                      <div className="space-y-2">
                        <Progress value={storage.repairability} className="h-3" />
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Успешность</span>
                          <span className="font-semibold">{storage.repairability}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наши услуги
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-indigo-100 rounded-full">
                    <service.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">
                        {service.price}
                      </div>
                      <Badge variant="secondary">
                        Успешность: {service.successRate}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Включает:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="w-full">
                      <Link to="/order">Заказать услугу</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Признаки проблем с накопителем
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <span>Обратитесь к нам, если заметили:</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {warningSigns.map((sign, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{sign}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠ Важно!</h4>
                  <p className="text-yellow-700 mb-4">
                    При первых признаках проблем с накопителем немедленно создайте резервную копию важных данных 
                    и обратитесь к специалистам. Продолжение использования может привести к полной потере данных.
                  </p>
                  <Button asChild variant="destructive">
                    <Link to="/emergency">Экстренная помощь</Link>
                  </Button>
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

export default StorageRepair;