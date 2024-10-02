'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Camera, Home, Phone, Menu, X, ArrowRight, Shield } from 'lucide-react'
import ReactPlayer from 'react-player'
import Link from 'next/link'
import ResponsiveLogo from './design/logo'

export function LandingPageVsl() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'garantia', 'oferta', 'contacto']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Garantía', href: '#garantia' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <ResponsiveLogo />
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${
                  activeSection === item.href.slice(1) ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
              Sign Up
            </Button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-64 bg-gray-800 z-50 p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="inicio" className="pt-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 z-10 text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Es provable que lo que tengo que proponerte aporte un granito de arena en alegrarte el dia,  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">descubre por què?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Transformando la Manera de Presentar Propiedades
            </motion.p>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 mb-12">
            <div className="rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full max-w-4xl mx-auto px-4">
            <div className="rounded-lg aspect-w-16 aspect-h-9  overflow-hidden shadow-2xl">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=HPL0rvE-vkA"
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                light={false}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />
            </div>
          </div>
            
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg px-8 py-4 rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              ¡Comienza Ahora!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        <section id="servicios" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Certificado Energético",
                  description: "Cumple con la ley desde el primer día y ahórrate preocupaciones.",
                  icon: <Camera className="h-12 w-12 text-blue-400 mb-4" />
                },
                {
                  title: "Tour Virtual Matterport 3D",
                  description: "Impresiona a los propietarios y ahorra visitas improductivas.",
                  icon: <Camera className="h-12 w-12 text-teal-400 mb-4" />
                },
                {
                  title: "Fotos Profesionales",
                  description: "Imágenes que atraen y destacan tu propiedad.",
                  icon: <Camera className="h-12 w-12 text-blue-400 mb-4" />
                },
                {
                  title: "Plano comercial",
                  description: "Planos que los compradores entienden y son visualmente atractivos.",
                  icon: <Camera className="h-12 w-12 text-blue-400 mb-4" />
                },
                {
                  title: "Video visita",
                  description: "Un video mostrando la casa de forma continua, como si estuvieramos vistando la propiedad juntos.",
                  icon: <Camera className="h-12 w-12 text-blue-400 mb-4" />
                },
                {
                  title: "Cédula de habitabilidad",
                  description: "Un documento que demuestra que la vivienda cumple con los estándares de habitabilidad mínimos exigidos por la ley.",
                  icon: <Camera className="h-12 w-12 text-blue-400 mb-4" />
                },
                {
                  title: "Subida a tu CRM",
                  description: "Subimos todos los documentos a tu CRM para que puedas tener todo en un solo lugar.",
                  icon: <Camera className="h-12 w-12 text-blue-400 mb-4" />
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="garantia" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Nuestra Garantía</h2>
            <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
              <div className="flex items-center justify-center mb-8">
                <Shield className="h-16 w-16 text-teal-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">Satisfacción 100% Garantizada</h3>
              <p className="text-gray-300 text-center mb-6">
                Estamos tan seguros de la calidad de nuestros servicios que ofrecemos una garantía de satisfacción completa. Si no estás completamente satisfecho con nuestro trabajo, lo corregiremos sin costo adicional o te devolveremos tu dinero.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">30 días de garantía en todos nuestros servicios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Correcciones ilimitadas hasta tu satisfacción</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Devolución del dinero si no cumplimos tus expectativas</span>
                </li>
              </ul>
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg px-8 py-4 rounded-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Comienza con confianza
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="py-20 bg-gradient-to-r from-blue-900 to-teal-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Oferta Especial</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-8 text-gray-300">
                Sé lo que significa recibir una nueva propiedad: esa alegría de una nueva oportunidad. Pero también sé que lo que viene después —certificados, fotos, tours virtuales— puede hacer que pierdas tiempo valioso.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Facturación directa al propietario disponible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Servicio gratuito para tu primer encargo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Solo 10 plazas disponibles a estos precios</span>
                </li>
              </ul>
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  ¡Contáctanos ya!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Contáctanos</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                  <Input id="name" type="text" placeholder="Tu nombre" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                  <Textarea id="message" placeholder="Tu mensaje" rows={4} className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div className="text-center">
                  <Button type="submit" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-full">Enviar Mensaje</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">InmoServices</h3>
              <p className="text-gray-400">
                Ofreciendo servicios de calidad para agentes inmobiliarios desde 2024.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Contacto</h3>
              <p className="text-gray-400 flex items-center"><Phone className="h-5 w-5 mr-2" /> +34 123 456 789</p>
              <p className="text-gray-400 flex items-center"><Home className="h-5 w-5 mr-2" /> Calle Principal 123, 28001 Madrid</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 InmoServices. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">Solicitar Información</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                <Input id="modal-name" type="text" placeholder="Tu nombre" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <Input id="modal-email" type="email" placeholder="tu@email.com" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-400 mb-1">Teléfono</label>
                <Input id="modal-phone" type="tel" placeholder="Tu número de teléfono" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className="text-gray-400 border-gray-600 hover:bg-gray-800">Cancelar</Button>
                <Button type="submit" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}