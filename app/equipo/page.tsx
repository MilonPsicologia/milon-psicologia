import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Award, BookOpen, Briefcase } from "lucide-react"

export default function EquipoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Nuestro Equipo</h1>
            <p className="text-lg text-gray-700 mb-8">Conoce al profesional detrás de Milón Psicología</p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <div className="relative w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/jon-ander.png" alt="Jon Ander Melchisidor" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 font-playfair">Jon Ander Melchisidor</h2>
              <p className="text-xl text-gray-700 mb-6">Psicólogo Deportivo</p>

              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-black mr-2" />
                <p className="text-gray-700">Colegiado nº BI050903 - Colegio de Psicología de Bizkaia</p>
              </div>

              <div className="flex items-center mb-6">
                <Linkedin className="h-6 w-6 text-black mr-2" />
                <a
                  href="https://www.linkedin.com/in/jon-ander-melchisidor-2b53a9233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Perfil de LinkedIn
                </a>
              </div>

              <p className="text-gray-700 mb-4">
                Psicólogo deportivo especializado en el trabajo con deportistas de diferentes disciplinas y niveles
                competitivos. Mi enfoque se centra en potenciar el rendimiento deportivo a través del desarrollo de
                habilidades mentales y el bienestar psicológico.
              </p>

              <p className="text-gray-700 mb-6">
                Cuento con experiencia trabajando en clubes profesionales como Athletic Club, Club Deportivo Getxo y
                Club Deportivo Alavés, donde he desarrollado programas de intervención psicológica adaptados a las
                necesidades específicas de cada contexto deportivo.
              </p>

              <Button asChild className="bg-black hover:bg-gray-800 text-white">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-black mr-2" />
                <h3 className="text-xl font-bold">Formación</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Grado en Psicología</li>
                <li>• Máster en Psicología del Deporte</li>
                <li>• Especialización en Psicología del Rendimiento Deportivo</li>
                <li>• Formación continua en técnicas de intervención psicológica aplicadas al deporte</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-black mr-2" />
                <h3 className="text-xl font-bold">Experiencia</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Psicólogo deportivo en Athletic Club</li>
                <li>• Psicólogo deportivo en Club Deportivo Getxo</li>
                <li>• Psicólogo deportivo en Club Deportivo Alavés</li>
                <li>• Asesoramiento a entrenadores y equipos técnicos</li>
                <li>• Intervención con deportistas de diferentes disciplinas</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-black mr-2" />
                <h3 className="text-xl font-bold">Especialidades</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Optimización del rendimiento deportivo</li>
                <li>• Gestión del estrés y la ansiedad competitiva</li>
                <li>• Establecimiento de objetivos y planificación</li>
                <li>• Recuperación psicológica de lesiones</li>
                <li>• Entrenamiento en habilidades mentales</li>
                <li>• Asesoramiento a entrenadores</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 font-playfair text-center">Filosofía de trabajo</h2>
            <p className="text-gray-700 mb-4 text-center">Mi enfoque se basa en tres pilares fundamentales:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Personalización</h3>
                <p className="text-gray-700">
                  Cada deportista es único, por lo que adapto mis intervenciones a las necesidades, características y
                  objetivos específicos de cada persona.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Integración</h3>
                <p className="text-gray-700">
                  Trabajo en estrecha colaboración con entrenadores y otros profesionales para integrar los aspectos
                  psicológicos en el entrenamiento diario.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Desarrollo integral</h3>
                <p className="text-gray-700">
                  Busco no solo mejorar el rendimiento deportivo, sino también contribuir al bienestar y desarrollo
                  personal del deportista.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">¿Quieres trabajar conmigo?</h2>
            <p className="text-lg mb-8">
              Contacta para concertar una primera sesión y descubre cómo puedo ayudarte a mejorar tu rendimiento
              deportivo y bienestar psicológico.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              >
                <Link href="/contacto">Contactar</Link>
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
