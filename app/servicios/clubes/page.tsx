import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function ServiciosClubesPage() {
  const servicios = [
    "Evaluación y asesoramiento psicológico para deportistas",
    "Formación para entrenadores y staff técnico",
    "Programas de desarrollo de habilidades mentales",
    "Intervención en crisis y gestión de conflictos",
    "Apoyo en procesos de selección de talentos",
    "Asesoramiento a directivos y coordinadores",
    "Diseño de protocolos de actuación psicológica",
    "Programas de formación para padres y familias",
    "Intervención en lesiones deportivas",
    "Evaluación del clima motivacional y cohesión",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Servicios para Clubes</h1>
            <p className="text-lg text-gray-700 mb-8">
              Soluciones integrales de psicología deportiva para clubes, centros deportivos y organizaciones
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">¿En qué consisten?</h2>
              <p className="text-gray-700 mb-4">
                Nuestros servicios para clubes y organizaciones deportivas están diseñados para integrar la psicología
                deportiva de manera sistemática en la estructura del club, contribuyendo al desarrollo integral de los
                deportistas y a la optimización del rendimiento individual y colectivo.
              </p>
              <p className="text-gray-700 mb-4">
                Desarrollamos programas personalizados que se adaptan a las necesidades específicas, filosofía y
                objetivos de cada entidad, trabajando en estrecha colaboración con directivos, coordinadores,
                entrenadores y deportistas.
              </p>
              <p className="text-gray-700">
                Nuestro enfoque integral abarca desde la formación y el asesoramiento hasta la intervención directa,
                siempre con el objetivo de crear una cultura que valore y potencie los aspectos psicológicos del
                rendimiento deportivo.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Servicios para clubes deportivos"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">¿Qué ofrecemos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Servicio de psicología integrado</h3>
                <p className="text-gray-700">
                  Implementación de un servicio de psicología deportiva dentro de la estructura del club, con presencia
                  regular y trabajo continuado con deportistas y staff técnico.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Programas de formación</h3>
                <p className="text-gray-700">
                  Desarrollo de programas formativos adaptados a las diferentes áreas del club: deportistas,
                  entrenadores, coordinadores, padres y directivos.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Asesoramiento técnico</h3>
                <p className="text-gray-700">
                  Consultoría especializada para la implementación de protocolos y metodologías que integren los
                  aspectos psicológicos en el funcionamiento diario del club.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Intervenciones específicas</h3>
                <p className="text-gray-700">
                  Actuaciones puntuales para abordar situaciones concretas como crisis de resultados, conflictos
                  internos, preparación para competiciones importantes o procesos de cambio.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Servicios disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicios.map((servicio, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{servicio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 font-playfair text-center">¿Para quién está indicado?</h2>
            <p className="text-gray-700 mb-4 text-center">
              Nuestros servicios para organizaciones están diseñados para:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Clubes deportivos</h3>
                <p className="text-gray-700">
                  De cualquier tamaño y nivel competitivo que busquen mejorar el rendimiento y bienestar de sus
                  deportistas.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Centros de entrenamiento</h3>
                <p className="text-gray-700">
                  Que deseen ofrecer un servicio integral que incluya la preparación psicológica.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Federaciones y asociaciones</h3>
                <p className="text-gray-700">
                  Que quieran implementar programas de desarrollo psicológico para sus deportistas y técnicos.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Potencia tu organización deportiva</h2>
            <p className="text-lg mb-8">
              Contacta con nosotros para analizar las necesidades específicas de tu club y diseñar un programa
              personalizado que se adapte a vuestros objetivos.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              <Link href="/contacto">Solicitar información</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
