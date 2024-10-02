'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'

export function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => setIsVideoPlaying(true)}
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            ¡Nueva propiedad, nueva oportunidad!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-center"
          >
            Certificado Energético + Tour Virtual Matterport + Fotos Profesionales
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold"
          >
            100€ (+ tasas)
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoPlaying ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-12 h-12 text-white animate-bounce" />
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <p className="text-lg mb-8">
            Sé lo que significa recibir una nueva propiedad: esa alegría de una nueva oportunidad. Pero también sé que lo que viene después —certificados, fotos, tours virtuales— puede hacer que pierdas tiempo valioso.
          </p>
          <h2 className="text-3xl font-bold mb-8">Te propongo:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Certificado Energético"
              description={
                <>
                  <ul className="list-disc pl-6">
                    <li>Es mejor cumplir con la ley desde el primer día, te ahorras preocupaciones o sustos.</li>
                    <li>Muchas inmobiliarias lo regalan, pero seamos sinceros ahora ya podrás hacerlo tú sin que sea un gasto que aunque no muy grande puede resultar molesto.</li>
                  </ul>
                </>
              }
              icon="🏷️"
            />
            <FeatureCard
              title="Tour Virtual Matterport 3D"
              description={
                <>
                  <ul className="list-disc pl-6">
                    <li>Vas a quedar muy bien con el propietario.</li>
                    <li>Te vas a ahorrar un montón de visitas improductivas.</li>
                    <li>  {"El propietario estará contento porque ve que llevas a gente que como mínimo tiene cierto interés y no hace una de esas visitas que solo pasar por la puerta dicen '\"uyyy no\"'."}
                    </li>
                  </ul>
                </>
              }
              icon="🏠"
            />
            <FeatureCard
              title="Fotos Profesionales"
              description="Imágenes que atraen."
              icon="📸"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Lo mejor de todo:</h2>
          <p className="text-lg mb-8">
            Si lo prefieres, puedo facturar directamente al propietario por la cantidad que tú me digas, en concepto de certificado energético, así que el servicio puede salirte gratis o ganar dinero, lo que tú elijas.
          </p>
        </section>

        <section className="mb-16 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">No me conoces, pero eso tiene solución:</h2>
          <p className="text-lg mb-8">
            Si te interesa probar el servicio, pero tienes alguna duda, te ofrezco que hagas tu primer encargo de forma gratuita. Sin riesgo. Así verás por ti mismo cómo funciona y si hace tu trabajo más cómodo o no.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Oferta limitada</h2>
          <p className="text-xl text-center mb-8">
            Solo 10 plazas disponibles a estos precios.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center"
            >
              <Phone className="mr-2" /> Contáctame ya
            </motion.button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Notas importantes:</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>Se paga el día de la visita.</li>
            <li>Requiere que tengas una cuenta Matterport.</li>
            <li>Puedes agregar cédula de habitabilidad, video walkthrough o un plano de la vivienda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">¡Vota por los siguientes servicios que serán agregados!</h2>
          <p className="text-xl text-center">
            El precio de la propuesta se te mantendrá para siempre, solo subirá el valor del IPC de forma anual.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string, description: React.ReactNode, icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-sm">{description}</div>
    </motion.div>
  )
}