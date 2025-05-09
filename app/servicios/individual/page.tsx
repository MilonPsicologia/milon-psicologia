import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function PsicologiaIndividualPage() {
  const beneficios = [
    "Mejora del rendimiento deportivo",
    "Aumento de la motivación y compromiso",
    "Gestión eficaz del estrés y la ansiedad competitiva",
    "Mejora de la concentración y atención",
    "Desarrollo de la confianza y autoeficacia",
    "Establecimiento efectivo de objetivos",
    "Recuperación psicológica de lesiones",
    "Mejora de la comunicación con entrenadores y compañeros",
    "Desarrollo de rutinas pre-competitivas efectivas",
    "Gestión de la presión competitiva",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Psicología Deportiva Individual</h1>
            <p className="text-lg text-gray-700 mb-8">
              Sesiones personalizadas para optimizar tu rendimiento deportivo y bienestar psicológico
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Sesión de psicología deportiva individual"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">¿En qué consiste?</h2>
              <p className="text-gray-700 mb-4">
                Las sesiones de psicología deportiva individual están diseñadas para ayudarte a alcanzar tu máximo
                potencial como deportista, abordando los aspectos mentales que influyen en tu rendimiento y bienestar.
              </p>
              <p className="text-gray-700 mb-4">
                Cada programa se adapta a tus necesidades específicas, edad, nivel de competición y modalidad deportiva,
                trabajando en aspectos clave como la motivación, concentración, gestión del estrés, establecimiento de
                objetivos y superación de barreras mentales.
              </p>
              <p className="text-gray-700">
                Las sesiones pueden realizarse tanto de forma presencial como online, adaptándose a tu disponibilidad y
                preferencias. Las sesiones presenciales se realizan en el Centro Bidelagun (Aita Patxi Plaza, 5, Deusto,
                48015 Bilbao, Bizkaia).
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">¿Qué incluye?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Evaluación inicial</h3>
                <p className="text-gray-700">
                  Realizamos una evaluación completa de tus necesidades, objetivos y situación actual para diseñar un
                  programa personalizado que se adapte a tus circunstancias específicas.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Entrenamiento en habilidades mentales</h3>
                <p className="text-gray-700">
                  Desarrollamos técnicas específicas para mejorar aspectos como la concentración, visualización, control
                  de la activación, establecimiento de objetivos y autodiálogo positivo.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Gestión emocional</h3>
                <p className="text-gray-700">
                  Trabajamos en el manejo efectivo de emociones como el estrés, la ansiedad, la frustración y la presión
                  competitiva para optimizar tu rendimiento en situaciones de alta exigencia.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Seguimiento y ajuste</h3>
                <p className="text-gray-700">
                  Realizamos un seguimiento continuo de tu progreso, ajustando las estrategias según sea necesario para
                  asegurar que alcances tus objetivos deportivos y personales.
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
            <p className="text-gray-700 mb-4 text-center">
              Nuestras sesiones de psicología deportiva individual están diseñadas para:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Deportistas de competición</h3>
                <p className="text-gray-700">
                  Que buscan optimizar su rendimiento y superar barreras mentales para alcanzar sus objetivos.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Deportistas aficionados</h3>
                <p className="text-gray-700">
                  Que desean mejorar su experiencia deportiva y disfrutar más de su práctica.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Deportistas en recuperación</h3>
                <p className="text-gray-700">
                  Que necesitan apoyo psicológico durante el proceso de recuperación de una lesión.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">¿Listo para mejorar tu rendimiento?</h2>
            <p className="text-lg mb-8">
              Contacta con nosotros para agendar una sesión inicial y comenzar a trabajar en la optimización de tu
              rendimiento deportivo.
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
