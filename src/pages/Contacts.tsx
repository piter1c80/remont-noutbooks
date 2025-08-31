import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  MessageCircle,
  Send
} from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните с 9:00 до 20:00",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@laptopservice.ru",
      description: "Отвечаем в течение часа",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "Москва, ул. Тверская, 1",
      description: "Метро Охотный ряд, 2 минуты пешком",
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "Пн-Пт: 9:00-20:00",
      description: "Сб-Вс: 10:00-18:00",
      color: "text-purple-600"
    }
  ];

  const offices = [
    {
      name: "Главный офис",
      address: "Москва, ул. Тверская, 1",
      phone: "+7 (495) 123-45-67",
      hours: "Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00",
      services: ["Все виды ремонта", "Диагностика", "Консультации"]
    },
    {
      name: "Филиал на Арбате",
      address: "Москва, ул. Арбат, 25",
      phone: "+7 (495) 123-45-68",
      hours: "Пн-Пт: 10:00-19:00, Сб: 11:00-17:00",
      services: ["Экспресс-ремонт", "Замена экранов", "Чистка"]
    },
    {
      name: "Филиал в Сокольниках",
      address: "Москва, ул. Сокольническая, 15",
      phone: "+7 (495) 123-45-69",
      hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
      services: ["Ремонт Apple", "Восстановление данных", "Диагностика"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь 
              с ремонтом и обслуживанием вашего ноутбука.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full">
                    <contact.icon className={`h-8 w-8 ${contact.color}`} />
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-gray-900 mb-2">
                    {contact.value}
                  </div>
                  <p className="text-sm text-gray-600">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Наши офисы
              </h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{office.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{office.address}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-green-600" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span>{office.hours}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Услуги:</h4>
                          <div className="flex flex-wrap gap-2">
                            {office.services.map((service, idx) => (
                              <Badge key={idx} variant="outline">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                    <span>Написать нам</span>
                  </CardTitle>
                  <CardDescription>
                    Задайте вопрос или опишите проблему с вашим ноутбуком
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Тема обращения</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Кратко опишите тему"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Подробно опишите вашу проблему или вопрос..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Как нас найти</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Navigation className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">
                        Метро "Охотный ряд", выход 3, 2 минуты пешком
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">
                        Вход со стороны Тверской улицы, 2 этаж
                      </span>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        Парковка: платная парковка рядом с офисом. 
                        Рекомендуем добираться на общественном транспорте.
                      </p>
                    </div>
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

export default Contacts;