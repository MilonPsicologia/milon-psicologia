import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AsesoramientoEntrenadoresPage() {
  const beneficios = [
    "Mejora de la comunicación con los deportistas",
    "Desarrollo de estrategias de liderazgo efectivas",
    "Gestión de situaciones de crisis y conflictos",
    "Optimización del clima motivacional del equipo",
    "Integración de aspectos psicológicos en los entrenamientos",
    "Establecimiento y evaluación de objetivos realistas",
    "Manejo de deportistas en diferentes etapas de desarrollo",
    "Estrategias para mantener la cohesión grupal",
    "Técnicas para gestionar la presión competitiva",
    "Herramientas para el desarrollo personal de los deportistas",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Asesoramiento a Entrenadores</h1>
            <p className="text-lg text-gray-700 mb-8">
              Potencia tus habilidades como entrenador integrando aspectos psicológicos en tu metodología
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">¿En qué consiste?</h2>
              <p className="text-gray-700 mb-4">
                El servicio de asesoramiento a entrenadores está diseñado para proporcionar herramientas y estrategias
                psicológicas que permitan mejorar la efectividad del entrenamiento y la gestión de deportistas y
                equipos.
              </p>
              <p className="text-gray-700 mb-4">
                Trabajamos de forma personalizada con entrenadores de todas las modalidades deportivas, adaptando
                nuestro enfoque a las necesidades específicas de cada deporte, nivel de competición y grupo de edad.
              </p>
              <p className="text-gray-700">
                El objetivo es integrar los aspectos psicológicos en la metodología de entrenamiento, mejorando tanto el
                rendimiento deportivo como el bienestar de los deportistas. Las sesiones presenciales se realizan en el
                Centro Bidelagun (Aita Patxi Plaza, 5, Deusto, 48015 Bilbao, Bizkaia).
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1829&q=80"
                alt="Asesoramiento a entrenadores"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">¿Qué incluye?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Evaluación de necesidades</h3>
                <p className="text-gray-700">
                  Analizamos tu metodología actual, identificando áreas de mejora y oportunidades para integrar aspectos
                  psicológicos en tu enfoque de entrenamiento.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Formación personalizada</h3>
                <p className="text-gray-700">
                  Proporcionamos formación específica en aspectos clave de la psicología deportiva aplicada al
                  entrenamiento y la gestión de deportistas.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Diseño de estrategias</h3>
                <p className="text-gray-700">
                  Desarrollamos estrategias prácticas para integrar variables psicológicas en los entrenamientos y
                  competiciones, adaptadas a tu deporte y contexto específico.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Seguimiento y apoyo continuo</h3>
                <p className="text-gray-700">
                  Ofrecemos asesoramiento continuo para resolver situaciones específicas, ajustar estrategias y evaluar
                  resultados a lo largo de la temporada.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Beneficios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 font-playfair text-center">¿Para quién está indicado?</h2>
            <p className="text-gray-700 mb-4 text-center">Nuestro servicio de asesoramiento está diseñado para:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Entrenadores profesionales</h3>
                <p className="text-gray-700">
                  Que buscan optimizar su metodología y mejorar el rendimiento de sus deportistas.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Entrenadores de formación</h3>
                <p className="text-gray-700">
                  Que desean integrar aspectos psicológicos en el desarrollo de jóvenes deportistas.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Entrenadores aficionados</h3>
                <p className="text-gray-700">
                  Que quieren mejorar su enfoque y habilidades para gestionar equipos de manera efectiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Potencia tu labor como entrenador</h2>
            <p className="text-lg mb-8">
              Contacta con nosotros para conocer cómo podemos ayudarte a integrar aspectos psicológicos en tu
              metodología de entrenamiento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              >
                <Link href="/contacto">Solicitar información</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                <Link href="/tarifas">Ver tarifas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
