import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Laptop className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">LaptopService</span>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональный ремонт и обслуживание ноутбуков всех марок. 
              Быстро, качественно, с гарантией.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/screen-repair" className="text-gray-300 hover:text-white transition-colors">Ремонт экранов</Link></li>
              <li><Link to="/keyboard-repair" className="text-gray-300 hover:text-white transition-colors">Ремонт клавиатур</Link></li>
              <li><Link to="/battery-replacement" className="text-gray-300 hover:text-white transition-colors">Замена батарей</Link></li>
              <li><Link to="/data-recovery" className="text-gray-300 hover:text-white transition-colors">Восстановление данных</Link></li>
              <li><Link to="/virus-removal" className="text-gray-300 hover:text-white transition-colors">Удаление вирусов</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/warranty" className="text-gray-300 hover:text-white transition-colors">Гарантия</Link></li>
              <li><Link to="/prices" className="text-gray-300 hover:text-white transition-colors">Цены</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">Вопросы и ответы</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Отзывы</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@laptopservice.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Москва, ул. Тверская, 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Пн-Пт: 9:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 LaptopService. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;