import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServiciosPage() {
  const servicios = [
    {
      id: "individual",
      title: "Psicología Deportiva Individual",
      description: "Sesiones adaptadas a personas de todas las edades y modalidades deportivas",
      content:
        "Optimización de rendimiento, trabajo en variables clave como motivación, atención, estrés, formación en materia de psicología, trabajo con lesiones deportivas, establecimiento de objetivos y desarrollo de técnicas específicas.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: "entrenadores",
      title: "Asesoramiento a Entrenadores",
      description: "Integración de aspectos psicológicos en el entrenamiento deportivo",
      content:
        "Sesiones adaptadas a entrenadores de todas las modalidades deportivas. Integración de los aspectos psicológicos en el entrenamiento, establecimiento y evaluación de objetivos, formación en psicología y manejo en etapas críticas.",
      image:
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1829&q=80",
    },
    {
      id: "formaciones",
      title: "Formaciones",
      description: "Sesiones individuales y grupales de formación en psicología deportiva",
      content:
        "Sesiones individuales y grupales orientadas a la formación en materia de psicología en el ámbito deportivo. Adaptable a todas las edades y niveles de experiencia.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: "clubes",
      title: "Servicios para Clubes",
      description: "Soluciones adaptadas a clubes, centros deportivos y otras entidades",
      content:
        "Servicios personalizados para clubes deportivos, centros de entrenamiento y otras organizaciones. Programas adaptados a las necesidades específicas de cada entidad.",
      image:
        "https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Nuestros Servicios</h1>
            <p className="text-lg text-gray-700 mb-8">
              En Milón Psicología ofrecemos servicios especializados de psicología deportiva adaptados a las necesidades
              de deportistas, entrenadores y organizaciones deportivas.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {servicios.map((servicio, index) => (
              <div
                key={servicio.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={servicio.image || "/placeholder.svg"}
                    alt={servicio.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 font-playfair">{servicio.title}</h2>
                  <p className="text-lg font-medium text-gray-700 mb-4">{servicio.description}</p>
                  <p className="text-gray-600 mb-6">{servicio.content}</p>
                  <Button asChild className="bg-black hover:bg-gray-800 text-white">
                    <Link href={`/servicios/${servicio.id}`} className="flex items-center">
                      Más información <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">¿Necesitas más información?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contacta con nosotros para resolver cualquier duda sobre nuestros servicios o para solicitar una consulta
              inicial sin compromiso.
            </p>
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/contacto">Contactar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
