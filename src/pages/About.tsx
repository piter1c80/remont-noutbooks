import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Target, 
  Heart,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: "15+", label: "лет опыта", color: "text-blue-600" },
    { icon: Users, value: "5000+", label: "довольных клиентов", color: "text-green-600" },
    { icon: Award, value: "50+", label: "сертификатов", color: "text-purple-600" },
    { icon: Shield, value: "99%", label: "успешных ремонтов", color: "text-red-600" }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Главный инженер",
      experience: "12 лет",
      specialization: "Ремонт материнских плат, микропайка",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Мария Иванова",
      position: "Специалист по диагностике",
      experience: "8 лет",
      specialization: "Диагностика, восстановление данных",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Мастер по ремонту",
      experience: "10 лет",
      specialization: "Замена экранов, ремонт корпусов",
      image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Елена Козлова",
      position: "Менеджер по работе с клиентами",
      experience: "6 лет",
      specialization: "Консультации, техническая поддержка",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Профессионализм",
      description: "Высокий уровень квалификации и постоянное обучение наших специалистов"
    },
    {
      icon: Heart,
      title: "Забота о клиентах",
      description: "Индивидуальный подход к каждому клиенту и его потребностям"
    },
    {
      icon: Shield,
      title: "Качество",
      description: "Используем только оригинальные запчасти и даем гарантию на все работы"
    },
    {
      icon: Clock,
      title: "Скорость",
      description: "Стремимся выполнить ремонт в максимально короткие сроки"
    }
  ];

  const achievements = [
    "Авторизованный сервисный центр Apple",
    "Партнер ASUS, Dell, HP, Lenovo",
    "Сертификация по ремонту игровых ноутбуков",
    "Специализация на восстановлении данных",
    "Более 50 положительных отзывов в месяц",
    "Средняя оценка клиентов: 4.9/5"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              О компании LaptopService
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — команда профессионалов с 15-летним опытом в сфере ремонта и обслуживания 
              компьютерной техники. Наша миссия — вернуть к жизни ваши устройства.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наша команда
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-3">
                    Опыт: {member.experience}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    {member.specialization}
                  </p>
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
                Наши ценности
              </h2>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Наши достижения
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <span>Отзывы клиентов</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">4.9/5</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">Средняя оценка на основе 500+ отзывов</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/reviews">Читать отзывы</Link>
                    </Button>
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

export default About;