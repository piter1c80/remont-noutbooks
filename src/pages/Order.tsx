import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar, Clock, Laptop, CheckCircle } from 'lucide-react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    serviceType: '',
    problem: '',
    urgency: 'normal',
    visitType: 'office',
    address: '',
    agreedToTerms: false
  });

  const serviceTypes = [
    "Диагностика",
    "Ремонт экрана",
    "Ремонт клавиатуры",
    "Замена батареи",
    "Ремонт материнской платы",
    "Восстановление данных",
    "Удаление вирусов",
    "Чистка и профилактика",
    "Ремонт системы питания",
    "Другое"
  ];

  const urgencyOptions = [
    { value: 'normal', label: 'Обычный (2-3 дня)', price: '' },
    { value: 'fast', label: 'Ускоренный (1 день)', price: '+50%' },
    { value: 'urgent', label: 'Срочный (в течение дня)', price: '+100%' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600 rounded-full">
                <Laptop className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Заказать ремонт
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Заполните форму заказа, и мы свяжемся с вами в течение 15 минут 
              для уточнения деталей и согласования времени.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Форма заказа</CardTitle>
                    <CardDescription>
                      Заполните все поля для быстрой обработки заявки
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="brand">Бренд ноутбука *</Label>
                          <Select onValueChange={(value) => setFormData({...formData, brand: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите бренд" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="apple">Apple</SelectItem>
                              <SelectItem value="asus">ASUS</SelectItem>
                              <SelectItem value="acer">Acer</SelectItem>
                              <SelectItem value="dell">Dell</SelectItem>
                              <SelectItem value="hp">HP</SelectItem>
                              <SelectItem value="lenovo">Lenovo</SelectItem>
                              <SelectItem value="msi">MSI</SelectItem>
                              <SelectItem value="samsung">Samsung</SelectItem>
                              <SelectItem value="other">Другой</SelectItem>
                            </SelectContent>
                          </Select>
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
                        <Label htmlFor="serviceType">Тип услуги *</Label>
                        <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип услуги" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service, index) => (
                              <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="problem">Описание проблемы *</Label>
                        <Textarea
                          id="problem"
                          value={formData.problem}
                          onChange={(e) => setFormData({...formData, problem: e.target.value})}
                          placeholder="Подробно опишите, что именно не работает..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label className="text-base font-semibold">Срочность выполнения</Label>
                        <RadioGroup 
                          value={formData.urgency} 
                          onValueChange={(value) => setFormData({...formData, urgency: value})}
                          className="mt-3"
                        >
                          {urgencyOptions.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={option.value} />
                              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                                <span>{option.label}</span>
                                {option.price && (
                                  <span className="text-red-600 font-semibold ml-2">
                                    {option.price}
                                  </span>
                                )}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <Label className="text-base font-semibold">Способ обслуживания</Label>
                        <RadioGroup 
                          value={formData.visitType} 
                          onValueChange={(value) => setFormData({...formData, visitType: value})}
                          className="mt-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="office" id="office" />
                            <Label htmlFor="office" className="cursor-pointer">
                              Принести в сервис-центр
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <Label htmlFor="pickup" className="cursor-pointer">
                              Вызов курьера (+500 ₽)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {formData.visitType === 'pickup' && (
                        <div>
                          <Label htmlFor="address">Адрес для курьера *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                            placeholder="Укажите точный адрес"
                            required
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm cursor-pointer">
                          Я согласен с условиями обслуживания и политикой конфиденциальности
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span>Что дальше?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <div className="font-semibold">Обработка заявки</div>
                          <div className="text-sm text-gray-600">В течение 15 минут</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <div className="font-semibold">Звонок менеджера</div>
                          <div className="text-sm text-gray-600">Уточнение деталей</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <div className="font-semibold">Диагностика</div>
                          <div className="text-sm text-gray-600">Бесплатно в течение 30 минут</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <div>
                          <div className="font-semibold">Ремонт</div>
                          <div className="text-sm text-gray-600">После согласования стоимости</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Гарантии</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Бесплатная диагностика</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Гарантия до 12 месяцев</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Оригинальные запчасти</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Фиксированные цены</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Контакты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Пн-Пт: 9:00-20:00</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Сб-Вс: 10:00-18:00</span>
                      </div>
                      <div className="text-center pt-4">
                        <div className="text-2xl font-bold text-blue-600">
                          +7 (495) 123-45-67
                        </div>
                        <div className="text-sm text-gray-600">
                          Горячая линия 24/7
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Order;