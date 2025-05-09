import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function FormacionesPage() {
  const tematicas = [
    "Fundamentos de psicología deportiva",
    "Técnicas de motivación y establecimiento de objetivos",
    "Gestión del estrés y la ansiedad competitiva",
    "Entrenamiento en concentración y atención",
    "Desarrollo de la confianza y autoeficacia",
    "Comunicación efectiva en el deporte",
    "Cohesión de equipo y liderazgo",
    "Recuperación psicológica de lesiones",
    "Preparación mental para la competición",
    "Psicología del rendimiento óptimo",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Formaciones</h1>
            <p className="text-lg text-gray-700 mb-8">
              Sesiones formativas en psicología deportiva para deportistas, entrenadores y organizaciones
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
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Formaciones en psicología deportiva"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">¿En qué consisten?</h2>
              <p className="text-gray-700 mb-4">
                Nuestras formaciones en psicología deportiva están diseñadas para proporcionar conocimientos teóricos y
                prácticos sobre los aspectos psicológicos que influyen en el rendimiento deportivo y el bienestar de los
                deportistas.
              </p>
              <p className="text-gray-700 mb-4">
                Ofrecemos sesiones formativas tanto individuales como grupales, adaptadas a las necesidades específicas
                de cada colectivo: deportistas, entrenadores, padres, directivos o equipos completos.
              </p>
              <p className="text-gray-700">
                Todas nuestras formaciones combinan contenido teórico con ejercicios prácticos y casos reales,
                facilitando la aplicación inmediata de los conocimientos adquiridos. Las formaciones presenciales se
                realizan en el Centro Bidelagun (Aita Patxi Plaza, 5, Deusto, 48015 Bilbao, Bizkaia).
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Modalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Charlas puntuales</h3>
                <p className="text-gray-700">
                  Sesiones de 1-2 horas sobre temas específicos de psicología deportiva, ideales para una primera
                  aproximación o para abordar aspectos concretos.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Talleres prácticos</h3>
                <p className="text-gray-700">
                  Sesiones de 3-4 horas con un enfoque práctico, donde se trabajan habilidades específicas a través de
                  ejercicios y dinámicas participativas.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Programas formativos</h3>
                <p className="text-gray-700">
                  Formaciones estructuradas en varias sesiones, que permiten profundizar en diferentes aspectos de la
                  psicología deportiva de manera progresiva.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Temáticas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tematicas.map((tematica, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{tematica}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 font-playfair text-center">¿Para quién están indicadas?</h2>
            <p className="text-gray-700 mb-4 text-center">
              Nuestras formaciones están adaptadas para diferentes colectivos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Deportistas</h3>
                <p className="text-gray-700">
                  De todas las edades y niveles que quieran mejorar sus habilidades mentales.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Entrenadores</h3>
                <p className="text-gray-700">Que deseen integrar aspectos psicológicos en su metodología.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Equipos</h3>
                <p className="text-gray-700">Que busquen mejorar su cohesión y rendimiento colectivo.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Organizaciones</h3>
                <p className="text-gray-700">Clubes y entidades deportivas que quieran formar a sus miembros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">¿Interesado en nuestras formaciones?</h2>
            <p className="text-lg mb-8">
              Contacta con nosotros para obtener más información sobre nuestras formaciones o para solicitar una
              propuesta adaptada a tus necesidades específicas.
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
