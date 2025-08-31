import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Clock, FileText, AlertTriangle } from 'lucide-react';

const Warranty = () => {
  const warrantyTypes = [
    {
      type: "Гарантия на работы",
      duration: "3-12 месяцев",
      description: "Гарантируем качество выполненных работ",
      coverage: [
        "Повторная поломка по той же причине",
        "Некачественное выполнение работ",
        "Использование неподходящих материалов",
        "Ошибки при сборке/разборке"
      ],
      color: "text-blue-600"
    },
    {
      type: "Гарантия на запчасти",
      duration: "6-24 месяца",
      description: "Гарантия производителя на установленные компоненты",
      coverage: [
        "Заводской брак запчастей",
        "Преждевременный выход из строя",
        "Несоответствие заявленным характеристикам",
        "Дефекты материалов"
      ],
      color: "text-green-600"
    },
    {
      type: "Расширенная гарантия",
      duration: "до 36 месяцев",
      description: "Дополнительная защита для дорогостоящих ремонтов",
      coverage: [
        "Все виды поломок",
        "Приоритетное обслуживание",
        "Бесплатная диагностика",
        "Скидки на дополнительные услуги"
      ],
      color: "text-purple-600"
    }
  ];

  const warrantyTerms = [
    {
      service: "Замена экрана",
      workWarranty: "6 месяцев",
      partWarranty: "12 месяцев",
      conditions: "При соблюдении правил эксплуатации"
    },
    {
      service: "Ремонт клавиатуры",
      workWarranty: "3 месяца",
      partWarranty: "6 месяцев",
      conditions: "Исключая механические повреждения"
    },
    {
      service: "Замена батареи",
      workWarranty: "6 месяцев",
      partWarranty: "12 месяцев",
      conditions: "При правильной эксплуатации"
    },
    {
      service: "Ремонт материнской платы",
      workWarranty: "12 месяцев",
      partWarranty: "6 месяцев",
      conditions: "На отремонтированные компоненты"
    },
    {
      service: "Восстановление данных",
      workWarranty: "1 месяц",
      partWarranty: "Не применимо",
      conditions: "На качество восстановленных файлов"
    }
  ];

  const warrantyExclusions = [
    "Механические повреждения после ремонта",
    "Попадание жидкости после ремонта",
    "Самостоятельные попытки ремонта",
    "Использование неоригинальных запчастей",
    "Нарушение пломб сервисного центра",
    "Естественный износ компонентов",
    "Повреждения от скачков напряжения",
    "Вирусные атаки и программные сбои"
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: "Обращение",
      description: "Свяжитесь с нами по телефону или приезжайте в офис с гарантийным талоном"
    },
    {
      step: 2,
      title: "Диагностика",
      description: "Проводим диагностику для определения гарантийности случая"
    },
    {
      step: 3,
      title: "Решение",
      description: "Бесплатно устраняем неисправность или заменяем компонент"
    },
    {
      step: 4,
      title: "Возврат",
      description: "Возвращаем отремонтированное устройство с продленной гарантией"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Гарантийные обязательства
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы уверены в качестве наших услуг и предоставляем расширенную гарантию 
              на все виды работ и установленные запчасти.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Виды гарантий
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full">
                    <Shield className={`h-8 w-8 ${warranty.color}`} />
                  </div>
                  <CardTitle className="text-xl">{warranty.type}</CardTitle>
                  <CardDescription>{warranty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <Badge variant="secondary" className="text-lg">
                      {warranty.duration}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Покрывает:</h4>
                    <ul className="space-y-2">
                      {warranty.coverage.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
            Условия гарантии по услугам
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Услуга</th>
                        <th className="text-center py-3">Гарантия на работы</th>
                        <th className="text-center py-3">Гарантия на запчасти</th>
                        <th className="text-left py-3">Условия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {warrantyTerms.map((term, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-4 font-semibold">{term.service}</td>
                          <td className="py-4 text-center">
                            <Badge variant="outline">{term.workWarranty}</Badge>
                          </td>
                          <td className="py-4 text-center">
                            <Badge variant="secondary">{term.partWarranty}</Badge>
                          </td>
                          <td className="py-4 text-sm text-gray-600">{term.conditions}</td>
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Гарантия не распространяется
              </h2>
              <div className="space-y-3">
                {warrantyExclusions.map((exclusion, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{exclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Процедура гарантийного обслуживания
              </h2>
              <div className="space-y-6">
                {warrantyProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
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
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <span>Документы для гарантии</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Для гарантийного обслуживания необходимо предоставить:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Гарантийный талон</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Документ, удостоверяющий личность</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Чек об оплате услуг</span>
                    </li>
                  </ul>
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

export default Warranty;