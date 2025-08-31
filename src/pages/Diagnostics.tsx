import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { 
  Search, 
  CheckCircle, 
  Clock, 
  Phone, 
  Mail, 
  Calendar,
  Laptop,
  AlertTriangle,
  Settings
} from 'lucide-react';

const Diagnostics = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    problem: '',
    urgency: false
  });

  const diagnosticTypes = [
    {
      icon: Search,
      title: "Базовая диагностика",
      description: "Проверка основных компонентов и выявление очевидных неисправностей",
      time: "30 минут",
      price: "Бесплатно",
      includes: ["Тест процессора", "Проверка памяти", "Диагностика накопителя", "Тест батареи"]
    },
    {
      icon: Settings,
      title: "Расширенная диагностика",
      description: "Глубокая проверка всех систем с использованием профессионального оборудования",
      time: "1-2 часа",
      price: "1 000 ₽",
      includes: ["Полная диагностика железа", "Тест под нагрузкой", "Проверка температур", "Анализ BIOS/UEFI", "Тест портов и разъемов"]
    },
    {
      icon: AlertTriangle,
      title: "Диагностика после повреждений",
      description: "Специальная диагностика после падений, залития или других повреждений",
      time: "2-4 часа",
      price: "1 500 ₽",
      includes: ["Визуальный осмотр", "Проверка целостности плат", "Тест цепей питания", "Оценка ущерба", "План восстановления"]
    }
  ];

  const checkupSteps = [
    {
      step: 1,
      title: "Прием устройства",
      description: "Регистрируем ваш ноутбук и выдаем квитанцию"
    },
    {
      step: 2,
      title: "Внешний осмотр",
      description: "Проверяем внешние повреждения и комплектность"
    },
    {
      step: 3,
      title: "Тестирование",
      description: "Проводим комплексную диагностику всех систем"
    },
    {
      step: 4,
      title: "Отчет",
      description: "Составляем подробный отчет с рекомендациями"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-600 rounded-full">
                <Search className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Диагностика ноутбуков
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная диагностика для точного определения неисправностей. 
              Базовая диагностика проводится бесплатно в течение 30 минут.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Виды диагностики
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {diagnosticTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-indigo-100 rounded-full">
                    <type.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">
                      {type.price}
                    </div>
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{type.time}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Включает:</h4>
                    {type.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/order">Записаться</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Процесс диагностики
              </h2>
              <div className="space-y-6">
                {checkupSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
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
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Записаться на диагностику</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами для уточнения деталей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
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
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="brand">Бренд</Label>
                        <Input
                          id="brand"
                          value={formData.brand}
                          onChange={(e) => setFormData({...formData, brand: e.target.value})}
                          placeholder="Apple, ASUS, HP..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="model">Модель</Label>
                        <Input
                          id="model"
                          value={formData.model}
                          onChange={(e) => setFormData({...formData, model: e.target.value})}
                          placeholder="MacBook Pro, ZenBook..."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="problem">Описание проблемы</Label>
                      <Textarea
                        id="problem"
                        value={formData.problem}
                        onChange={(e) => setFormData({...formData, problem: e.target.value})}
                        placeholder="Опишите, что именно не работает..."
                        rows={4}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="urgency"
                        checked={formData.urgency}
                        onCheckedChange={(checked) => setFormData({...formData, urgency: checked as boolean})}
                      />
                      <Label htmlFor="urgency" className="text-sm">
                        Срочная диагностика (в течение 2 часов)
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Записаться на диагностику
                    </Button>
                  </form>
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

export default Diagnostics;