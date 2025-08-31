import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Laptop, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Laptop className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">LaptopService</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Услуги
            </Link>
            <Link to="/repair" className="text-gray-700 hover:text-blue-600 transition-colors">
              Ремонт
            </Link>
            <Link to="/diagnostics" className="text-gray-700 hover:text-blue-600 transition-colors">
              Диагностика
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              О нас
            </Link>
            <Link to="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button asChild>
              <Link to="/order">Заказать ремонт</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Главная
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Услуги
              </Link>
              <Link to="/repair" className="text-gray-700 hover:text-blue-600 transition-colors">
                Ремонт
              </Link>
              <Link to="/diagnostics" className="text-gray-700 hover:text-blue-600 transition-colors">
                Диагностика
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                О нас
              </Link>
              <Link to="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">
                Контакты
              </Link>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <Button asChild className="w-full">
                  <Link to="/order">Заказать ремонт</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;