import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, Brain, Users, Target } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                Potencia tu rendimiento deportivo con psicología especializada
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                En Milón Psicología ofrecemos servicios profesionales de psicología deportiva para ayudarte a alcanzar
                tu máximo potencial, superar barreras mentales y optimizar tu rendimiento.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
                  <Link href="/servicios">Descubre nuestros servicios</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80"
                alt="Psicología deportiva en fútbol"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Milón Psicología</h2>
            <p className="text-lg text-gray-700">
              Somos un servicio especializado en psicología deportiva dirigido por Jon Ander Melchisidor, psicólogo
              deportivo con amplia experiencia en el trabajo con deportistas de diferentes disciplinas y clubes
              profesionales como Athletic Club, Club Deportivo Getxo y Club Deportivo Alavés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <Brain className="h-12 w-12 text-black mb-2" />
                <CardTitle>Experiencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Amplia experiencia trabajando con deportistas de élite y aficionados de diversas disciplinas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <Target className="h-12 w-12 text-black mb-2" />
                <CardTitle>Enfoque Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adaptamos nuestras intervenciones a las necesidades específicas de cada deportista y situación.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <Award className="h-12 w-12 text-black mb-2" />
                <CardTitle>Profesionalidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Colegiado en el Colegio de Psicología de Bizkaia (BI050903) con formación especializada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-black mb-2" />
                <CardTitle>Trabajo en Equipo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Colaboramos con entrenadores, clubes y otros profesionales para un enfoque integral.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Nuestros Servicios</h2>
            <p className="text-lg text-gray-700">
              Ofrecemos una amplia gama de servicios de psicología deportiva adaptados a las necesidades de deportistas
              individuales, entrenadores y organizaciones deportivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Psicología Deportiva Individual</CardTitle>
                <CardDescription>
                  Sesiones adaptadas a personas de todas las edades y modalidades deportivas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimización de rendimiento, trabajo en variables clave como motivación, atención, estrés, formación
                  en materia de psicología, trabajo con lesiones deportivas, establecimiento de objetivos y desarrollo
                  de técnicas específicas.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicios/individual" className="flex items-center justify-center">
                    Más información <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Asesoramiento a Entrenadores</CardTitle>
                <CardDescription>Integración de aspectos psicológicos en el entrenamiento deportivo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sesiones adaptadas a entrenadores de todas las modalidades deportivas. Integración de los aspectos
                  psicológicos en el entrenamiento, establecimiento y evaluación de objetivos, formación en psicología y
                  manejo en etapas críticas.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicios/entrenadores" className="flex items-center justify-center">
                    Más información <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-black text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
                ¿Listo para mejorar tu rendimiento deportivo?
              </h2>
              <p className="text-lg mb-8">
                Contacta con nosotros para una consulta inicial y descubre cómo la psicología deportiva puede ayudarte a
                alcanzar tus objetivos.
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
        </div>
      </section>
    </div>
  )
}
