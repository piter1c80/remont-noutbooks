import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Phone, Clock, Zap, Droplets, Fire, Shield } from 'lucide-react';

const Emergency = () => {
  const [emergencyForm, setEmergencyForm] = useState({
    name: '',
    phone: '',
    problem: '',
    urgency: 'high'
  });

  const emergencyTypes = [
    {
      icon: Droplets,
      title: "Попадание жидкости",
      description: "Залитие водой, кофе, чаем или другими жидкостями",
      actions: [
        "Немедленно выключите ноутбук",
        "Отключите зарядное устройство",
        "Извлеките батарею (если возможно)",
        "Переверните ноутбук клавиатурой вниз",
        "Не пытайтесь включать!"
      ],
      timeLimit: "Первые 2 часа критичны",
      color: "text-blue-600"
    },
    {
      icon: Fire,
      title: "Перегрев и дым",
      description: "Сильный перегрев, появление дыма или запаха гари",
      actions: [
        "Немедленно выключите устройство",
        "Отключите от сети",
        "Обеспечьте проветривание",
        "Не прикасайтесь к горячим частям",
        "Вызовите экстренную помощь"
      ],
      timeLimit: "Немедленно!",
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "Проблемы с питанием",
      description: "Искры, треск, неисправность зарядного устройства",
      actions: [
        "Отключите зарядное устройство",
        "Не используйте поврежденные кабели",
        "Проверьте розетку",
        "Не пытайтесь ремонтировать самостоятельно"
      ],
      timeLimit: "В течение часа",
      color: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "Вирусы-шифровальщики",
      description: "Блокировка файлов, требование выкупа",
      actions: [
        "Отключите интернет",
        "Не перезагружайте компьютер",
        "Не платите выкуп",
        "Не удаляйте файлы",
        "Обратитесь к специалистам"
      ],
      timeLimit: "Как можно скорее",
      color: "text-purple-600"
    }
  ];

  const emergencyContacts = [
    {
      type: "Горячая линия",
      number: "+7 (495) 123-45-67",
      availability: "24/7",
      description: "Круглосуточная техническая поддержка"
    },
    {
      type: "Экстренный выезд",
      number: "+7 (495) 123-45-68",
      availability: "9:00-22:00",
      description: "Выезд мастера в течение 2 часов"
    },
    {
      type: "WhatsApp",
      number: "+7 (495) 123-45-69",
      availability: "24/7",
      description: "Быстрые консультации в мессенджере"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Emergency form submitted:', emergencyForm);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-600 rounded-full animate-pulse">
                <AlertTriangle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Экстренная помощь
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Круглосуточная техническая поддержка при критических ситуациях. 
              Быстрое реагирование и профессиональная помощь.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{contact.type}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600 mb-2">
                    {contact.number}
                  </div>
                  <Badge variant="outline">{contact.availability}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Экстренные ситуации
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergencyTypes.map((emergency, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <emergency.icon className={`h-8 w-8 ${emergency.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{emergency.title}</CardTitle>
                      <CardDescription className="text-base">
                        {emergency.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="destructive" className="mb-4">
                      {emergency.timeLimit}
                    </Badge>
                    <h4 className="font-semibold text-gray-900 mb-3">Немедленные действия:</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      {emergency.actions.map((action, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">{action}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <Button className="w-full" variant="destructive">
                    <Phone className="h-4 w-4 mr-2" />
                    Вызвать экстренную помощь
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Форма экстренного вызова
                </CardTitle>
                <CardDescription className="text-center">
                  Заполните форму для быстрого реагирования наших специалистов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="emergencyName">Ваше имя *</Label>
                    <Input
                      id="emergencyName"
                      value={emergencyForm.name}
                      onChange={(e) => setEmergencyForm({...emergencyForm, name: e.target.value})}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="emergencyPhone">Телефон *</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={emergencyForm.phone}
                      onChange={(e) => setEmergencyForm({...emergencyForm, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="emergencyProblem">Описание экстренной ситуации *</Label>
                    <Textarea
                      id="emergencyProblem"
                      value={emergencyForm.problem}
                      onChange={(e) => setEmergencyForm({...emergencyForm, problem: e.target.value})}
                      placeholder="Подробно опишите, что произошло..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" size="lg" variant="destructive" className="w-full">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Отправить экстренный вызов
                    </Button>
                    <p className="text-sm text-gray-600 mt-2">
                      Мы свяжемся с вами в течение 5 минут
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Emergency;