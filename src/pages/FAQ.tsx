import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: "Общие вопросы",
      questions: [
        {
          question: "Сколько времени занимает ремонт?",
          answer: "Время ремонта зависит от сложности неисправности. Простые ремонты (замена клавиш, чистка) выполняются в течение дня. Сложные ремонты (замена экрана, ремонт материнской платы) могут занять от 1 до 5 дней. Точные сроки сообщаются после диагностики."
        },
        {
          question: "Предоставляете ли вы гарантию?",
          answer: "Да, мы предоставляем гарантию на все виды работ от 3 до 12 месяцев, в зависимости от типа ремонта. На запчасти действует гарантия производителя от 6 до 24 месяцев."
        },
        {
          question: "Можно ли отремонтировать очень старый ноутбук?",
          answer: "Мы ремонтируем ноутбуки любого возраста. Однако для устройств старше 7-10 лет может быть сложно найти оригинальные запчасти. В таких случаях мы предлагаем совместимые аналоги или восстановленные компоненты."
        },
        {
          question: "Сколько стоит диагностика?",
          answer: "Базовая диагностика проводится бесплатно в течение 30 минут. Расширенная диагностика с использованием специального оборудования стоит 1000 рублей, но эта сумма засчитывается при заказе ремонта."
        }
      ]
    },
    {
      category: "Ремонт и запчасти",
      questions: [
        {
          question: "Используете ли вы оригинальные запчасти?",
          answer: "Мы стараемся использовать оригинальные запчасти от производителя. Если оригинальные компоненты недоступны, мы предлагаем качественные совместимые аналоги с соответствующей гарантией."
        },
        {
          question: "Можно ли отремонтировать ноутбук, если он не включается?",
          answer: "Да, мы специализируемся на ремонте ноутбуков с любыми неисправностями, включая полный отказ включения. Проводим диагностику материнской платы, цепей питания и других компонентов."
        },
        {
          question: "Что делать, если пролил жидкость на ноутбук?",
          answer: "Немедленно выключите ноутбук, отключите зарядное устройство, извлеките батарею (если возможно) и переверните устройство. Не пытайтесь включать! Как можно скорее обратитесь к нам для экстренной чистки."
        },
        {
          question: "Можете ли вы увеличить объем памяти или заменить процессор?",
          answer: "Мы можем увеличить объем оперативной памяти и заменить накопитель на более быстрый или объемный. Замена процессора технически возможна, но экономически нецелесообразна из-за высокой стоимости."
        }
      ]
    },
    {
      category: "Стоимость и оплата",
      questions: [
        {
          question: "Можно ли узнать точную стоимость ремонта заранее?",
          answer: "Точную стоимость можно определить только после диагностики. Мы предоставляем примерные ценовые диапазоны на сайте, но финальная цена зависит от конкретной модели ноутбука и характера неисправности."
        },
        {
          question: "Какие способы оплаты вы принимаете?",
          answer: "Мы принимаем наличные, банковские карты, безналичный расчет для юридических лиц. Также доступна рассрочка до 12 месяцев для дорогостоящих ремонтов."
        },
        {
          question: "Есть ли скидки?",
          answer: "Да, мы предоставляем скидки студентам и пенсионерам (10%), при ремонте нескольких устройств (15%), постоянным клиентам (20%). Также действует программа лояльности с накоплением бонусов."
        },
        {
          question: "Что если ремонт окажется дороже озвученной суммы?",
          answer: "Мы всегда согласовываем стоимость с клиентом до начала работ. Если в процессе ремонта обнаруживаются дополнительные неисправности, мы обязательно связываемся с вами для согласования."
        }
      ]
    },
    {
      category: "Сервис и поддержка",
      questions: [
        {
          question: "Работаете ли вы с юридическими лицами?",
          answer: "Да, мы работаем с организациями. Предоставляем все необходимые документы, работаем по договорам, принимаем безналичную оплату. Для корпоративных клиентов действуют специальные условия."
        },
        {
          question: "Можете ли вы приехать к нам в офис?",
          answer: "Да, мы предоставляем услугу выездного ремонта для организаций и частных клиентов. Стоимость выезда в пределах МКАД — 1000 рублей, за МКАД — по договоренности."
        },
        {
          question: "Что делать, если проблема повторилась после ремонта?",
          answer: "Если неисправность повторилась в течение гарантийного срока, мы бесплатно устраним проблему. Обратитесь к нам с гарантийным талоном, и мы проведем повторную диагностику и ремонт."
        },
        {
          question: "Можно ли получить консультацию по телефону?",
          answer: "Да, наши специалисты предоставляют бесплатные консультации по телефону в рабочее время. Мы поможем с первичной диагностикой и дадим рекомендации по дальнейшим действиям."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full">
                <HelpCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на самые популярные вопросы о наших услугах, 
              ценах, гарантиях и процедурах ремонта.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Свяжитесь с нами любым удобным способом, и мы обязательно поможем
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-6 w-6 text-green-600" />
                    <span>Позвонить</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    +7 (495) 123-45-67
                  </div>
                  <p className="text-gray-600 mb-4">Консультации с 9:00 до 20:00</p>
                  <Button className="w-full" variant="outline">
                    Позвонить сейчас
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                    <span>Написать</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-blue-600 mb-2">
                    Онлайн-консультация
                  </div>
                  <p className="text-gray-600 mb-4">Ответим в течение 15 минут</p>
                  <Button asChild className="w-full">
                    <Link to="/contacts">Задать вопрос</Link>
                  </Button>
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

export default FAQ;