import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Профессиональный
              <span className="text-blue-600 block">ремонт ноутбуков</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Быстрый и качественный ремонт ноутбуков всех марок. 
              Диагностика за 30 минут, гарантия до 12 месяцев.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/order">Заказать ремонт</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/diagnostics">Бесплатная диагностика</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Быстрый ремонт</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-500" />
                <span className="text-gray-700">Официальные запчасти</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">Опытные мастера</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ремонт ноутбука" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">лет опыта</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-green-600">5000+</div>
              <div className="text-sm text-gray-600">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;