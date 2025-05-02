import React from 'react';
import { Code, Database, Layout, Lightbulb, Users, ArrowRight, CheckCircle, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Innovación Digital para tu Empresa</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Somos un equipo de expertos con más de 10 años de experiencia en la industria del software, especializados en el desarrollo de soluciones complejas que resuelven desafíos empresariales y aceleran el crecimiento de tu negocio.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-500 text-white hover:bg-blue-600 transition-colors px-8 py-3 rounded-md font-medium text-lg inline-flex items-center">
                Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="bg-white/10 text-white hover:bg-white/20 transition-colors px-8 py-3 rounded-md font-medium text-lg">
                Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestra Experiencia</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Nos especializamos en entregar soluciones de software completas con un enfoque en calidad, rendimiento y experiencia del usuario.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Database className="h-10 w-10 text-blue-500" />}
              title="Desarrollo Backend"
              description="Sistemas backend robustos y escalables construidos con tecnologías modernas para manejar tu lógica de negocio y datos."
            />
            <ServiceCard 
              icon={<Code className="h-10 w-10 text-blue-500" />}
              title="Diseño de Arquitectura"
              description="Arquitectura de sistemas pensada para garantizar escalabilidad, mantenibilidad y rendimiento óptimo."
            />
            <ServiceCard 
              icon={<Layout className="h-10 w-10 text-blue-500" />}
              title="Desarrollo Frontend"
              description="Interfaces de usuario responsivas e interactivas que proporcionan experiencias fluidas en todos los dispositivos."
            />
            <ServiceCard 
              icon={<Lightbulb className="h-10 w-10 text-blue-500" />}
              title="Diseño UX"
              description="Diseño centrado en el usuario que mejora la usabilidad, accesibilidad y satisfacción general."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Seguimos una metodología probada para asegurar que tu proyecto se entregue a tiempo, dentro del presupuesto y supere las expectativas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="01"
              title="Descubrimiento"
              description="Comenzamos entendiendo tus objetivos de negocio, desafíos y requerimientos para definir el alcance del proyecto."
            />
            <ProcessStep 
              number="02"
              title="Planificación"
              description="Nuestro equipo crea una hoja de ruta detallada con hitos, entregables y asignación de recursos."
            />
            <ProcessStep 
              number="03"
              title="Desarrollo"
              description="Construimos tu solución usando metodologías ágiles, con actualizaciones regulares y ciclos de retroalimentación."
            />
            <ProcessStep 
              number="04"
              title="Entrega y Soporte"
              description="Después de pruebas exhaustivas, implementamos tu solución y proporcionamos mantenimiento y soporte continuo."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">La satisfacción de nuestros clientes es nuestro mejor testimonio.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Su equipo entregó un sistema complejo que superó nuestras expectativas. La arquitectura que diseñaron ha escalado perfectamente a medida que nuestra base de usuarios creció."
              author="Carlos Rodríguez"
              company="TechStart Inc."
            />
            <Testimonial 
              quote="El proceso de diseño UX fue minucioso y revelador. Nuestros usuarios adoran la nueva interfaz, y hemos visto un aumento significativo en el engagement."
              author="María González"
              company="InnovateCo"
            />
            <Testimonial 
              quote="Trabajar con este equipo fue un placer de principio a fin. Entendieron nuestras necesidades comerciales y entregaron una solución que ha transformado nuestras operaciones."
              author="Roberto Sánchez"
              company="GlobalTech Solutions"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">¿Listo para discutir tu proyecto? Ponte en contacto con nosotros y comencemos a construir algo increíble juntos.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail className="h-6 w-6 text-blue-500" />}
                  title="Email"
                  detail="hola@lebit.com"
                />
                <ContactInfo 
                  icon={<Phone className="h-6 w-6 text-blue-500" />}
                  title="Teléfono"
                  detail="+54 11 1234-5678"
                />
                <ContactInfo 
                  icon={<MapPin className="h-6 w-6 text-blue-500" />}
                  title="Oficina"
                  detail="Av. del Libertador 6250, Buenos Aires, Argentina"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors">
                  <Github className="h-6 w-6 text-slate-700" />
                </a>
                <a href="#" className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors">
                  <Linkedin className="h-6 w-6 text-slate-700" />
                </a>
                <a href="#" className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors">
                  <Twitter className="h-6 w-6 text-slate-700" />
                </a>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Component for service cards
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

// Component for process steps
function ProcessStep({ number, title, description }) {
  return (
    <div className="relative">
      <div className="text-5xl font-bold text-slate-200 mb-4">{number}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

// Component for team members
function TeamMember({ image, name, role, bio }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-blue-500 font-medium mb-3">{role}</p>
        <p className="text-slate-600">{bio}</p>
      </div>
    </div>
  );
}

// Component for testimonials
function Testimonial({ quote, author, company }) {
  return (
    <div className="bg-slate-800 p-8 rounded-lg">
      <p className="text-lg mb-6">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-slate-300">{company}</p>
      </div>
    </div>
  );
}

// Component for contact information
function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex items-start">
      <div className="mr-4">{icon}</div>
      <div>
        <h4 className="font-medium text-slate-900">{title}</h4>
        <p className="text-slate-600">{detail}</p>
      </div>
    </div>
  );
}

export default App;