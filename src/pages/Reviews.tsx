import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, ThumbsUp, MessageSquare, Calendar } from 'lucide-react';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      service: "Замена экрана MacBook Pro",
      rating: 5,
      date: "15 января 2025",
      comment: "Отличный сервис! Быстро и качественно заменили экран на MacBook. Работает как новый, цвета яркие, никаких дефектов. Мастера очень вежливые и профессиональные. Обязательно обращусь еще раз при необходимости.",
      helpful: 12
    },
    {
      id: 2,
      name: "Михаил Иванов",
      service: "Чистка и замена термопасты",
      rating: 5,
      date: "12 января 2025",
      comment: "Ноутбук перегревался и тормозил. После чистки и замены термопасты работает отлично! Температуры снизились на 20 градусов, вентилятор почти не слышно. Цена адекватная, работу выполнили быстро.",
      helpful: 8
    },
    {
      id: 3,
      name: "Елена Сидорова",
      service: "Восстановление данных",
      rating: 5,
      date: "8 января 2025",
      comment: "Спасли мои важные документы и фотографии после поломки жесткого диска! Думала, что все потеряно навсегда. Мастера смогли восстановить 95% данных. Огромное спасибо за профессионализм!",
      helpful: 15
    },
    {
      id: 4,
      name: "Дмитрий Козлов",
      service: "Ремонт клавиатуры после залития",
      rating: 4,
      date: "5 января 2025",
      comment: "Пролил кофе на клавиатуру. Принес в тот же день, через день уже забрал. Клавиатура работает нормально, но пришлось заменить несколько клавиш. В целом доволен результатом.",
      helpful: 6
    },
    {
      id: 5,
      name: "Ольга Морозова",
      service: "Замена батареи ASUS",
      rating: 5,
      date: "2 января 2025",
      comment: "Батарея держала заряд всего час. После замены ноутбук снова работает 5-6 часов без подзарядки. Быстро, качественно, с гарантией. Рекомендую!",
      helpful: 9
    },
    {
      id: 6,
      name: "Александр Волков",
      service: "Удаление вирусов",
      rating: 5,
      date: "28 декабря 2024",
      comment: "Ноутбук был полностью заражен, работал очень медленно. Мастера не только удалили все вирусы, но и установили хороший антивирус, настроили систему. Теперь работает как часы!",
      helpful: 7
    },
    {
      id: 7,
      name: "Мария Лебедева",
      service: "Ремонт разъема питания",
      rating: 4,
      date: "25 декабря 2024",
      comment: "Разъем питания расшатался, ноутбук заряжался только в определенном положении кабеля. Заменили разъем, теперь все работает стабильно. Единственный минус — пришлось ждать запчасть 2 дня.",
      helpful: 4
    },
    {
      id: 8,
      name: "Сергей Новиков",
      service: "Диагностика и консультация",
      rating: 5,
      date: "22 декабря 2024",
      comment: "Обратился за диагностикой тормозящего ноутбука. Оказалось, проблема в переполненном диске и устаревших драйверах. Мастер все объяснил, дал рекомендации. Диагностика бесплатная — очень приятно!",
      helpful: 11
    }
  ];

  const stats = [
    { label: "Средняя оценка", value: "4.9", icon: Star },
    { label: "Всего отзывов", value: "500+", icon: MessageSquare },
    { label: "Положительных", value: "98%", icon: ThumbsUp }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review submitted:', newReview);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-yellow-600 rounded-full">
                <Star className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Читайте реальные отзывы наших клиентов о качестве ремонта и уровне сервиса. 
              Ваше мнение важно для нас!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Отзывы наших клиентов
              </h2>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{review.name}</CardTitle>
                          <CardDescription className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{review.service}</Badge>
                            <span className="flex items-center space-x-1 text-gray-500">
                              <Calendar className="h-3 w-3" />
                              <span className="text-xs">{review.date}</span>
                            </span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">"{review.comment}"</p>
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Полезно ({review.helpful})
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                  <CardDescription>
                    Поделитесь своим опытом обслуживания
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <Label htmlFor="reviewName">Ваше имя</Label>
                      <Input
                        id="reviewName"
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="reviewService">Услуга</Label>
                      <Input
                        id="reviewService"
                        value={newReview.service}
                        onChange={(e) => setNewReview({...newReview, service: e.target.value})}
                        placeholder="Какую услугу вы получили?"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label>Оценка</Label>
                      <div className="flex space-x-1 mt-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setNewReview({...newReview, rating})}
                            className="focus:outline-none"
                          >
                            <Star 
                              className={`h-6 w-6 ${
                                rating <= newReview.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="reviewComment">Комментарий</Label>
                      <Textarea
                        id="reviewComment"
                        value={newReview.comment}
                        onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                        placeholder="Расскажите о вашем опыте..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Отправить отзыв
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

export default Reviews;