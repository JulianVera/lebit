import React from 'react';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">LeBit</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Somos un equipo de expertos dedicados a entregar soluciones de software excepcionales que impulsan el crecimiento empresarial y la innovación.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Proceso</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Equipo</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">hola@lebit.com</li>
              <li className="text-slate-400">+54 11 1234-5678</li>
              <li className="text-slate-400">Av. del Libertador 6250, Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} LeBit. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;