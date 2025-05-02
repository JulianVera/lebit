import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-slate-900">LeBit</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-900 hover:text-blue-500 font-medium">Inicio</a>
            <a href="#services" className="text-slate-900 hover:text-blue-500 font-medium">Servicios</a>
            <a href="#" className="text-slate-900 hover:text-blue-500 font-medium">Proceso</a>
            <a href="#" className="text-slate-900 hover:text-blue-500 font-medium">Equipo</a>
            <a href="#contact" className="bg-blue-500 text-white hover:bg-blue-600 px-5 py-2 rounded-md font-medium transition-colors">
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-slate-900 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-slate-900 hover:text-blue-500 font-medium">Inicio</a>
              <a href="#services" className="text-slate-900 hover:text-blue-500 font-medium">Servicios</a>
              <a href="#" className="text-slate-900 hover:text-blue-500 font-medium">Proceso</a>
              <a href="#" className="text-slate-900 hover:text-blue-500 font-medium">Equipo</a>
              <a href="#contact" className="bg-blue-500 text-white hover:bg-blue-600 px-5 py-2 rounded-md font-medium transition-colors inline-block text-center">
                Contáctanos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;