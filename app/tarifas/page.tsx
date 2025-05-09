import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function TarifasPage() {
  const servicios = [
    {
      title: "Sesión Individual",
      price: "50€",
      description: "Una sesión individual de psicología deportiva",
      features: [
        "Duración aproximada de 60 minutos",
        "Evaluación de necesidades específicas",
        "Desarrollo de estrategias personalizadas",
        "Seguimiento del progreso",
        "Disponible en formato presencial u online",
      ],
      recommended: false,
      cta: "Reservar sesión",
    },
    {
      title: "Bono 5 Sesiones",
      price: "235€",
      description: "Programa recomendado para un trabajo de 1-2 meses",
      features: [
        "5 sesiones individuales de 60 minutos",
        "Evaluación inicial completa",
        "Plan de intervención personalizado",
        "Seguimiento continuo entre sesiones",
        "Material complementario",
        "Disponible en formato presencial u online",
      ],
      recommended: false,
      cta: "Elegir este plan",
    },
    {
      title: "Bono 10 Sesiones",
      price: "450€",
      description: "Programa recomendado para un trabajo de 2-3 meses",
      features: [
        "10 sesiones individuales de 60 minutos",
        "Evaluación inicial exhaustiva",
        "Plan de intervención personalizado",
        "Seguimiento continuo entre sesiones",
        "Material complementario extenso",
        "Acceso prioritario para consultas",
        "Disponible en formato presencial u online",
      ],
      recommended: false,
      cta: "Elegir este plan",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Tarifas</h1>
            <p className="text-lg text-gray-700 mb-8">
              Conoce nuestros planes y elige el que mejor se adapte a tus necesidades
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <Card
                key={index}
                className={`border ${servicio.recommended ? "border-black shadow-lg" : "border-gray-200"} relative`}
              >
                {servicio.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recomendado
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">{servicio.title}</CardTitle>
                  <CardDescription>{servicio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-4xl font-bold">{servicio.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {servicio.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className={`w-full ${
                      servicio.recommended
                        ? "bg-black hover:bg-gray-800 text-white"
                        : "bg-white text-black border border-black hover:bg-gray-100"
                    }`}
                  >
                    <Link href="/contacto">{servicio.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 font-playfair">Información adicional</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Todos los servicios incluyen una pequeña reunión previa de 5-10 minutos para conocernos y preparar
                    el camino a seguir, adaptado a cada caso.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Los bonos de sesiones deben abonarse en la primera sesión.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    No hay un límite establecido para utilizar las sesiones de los bonos, aunque se recomienda mantener
                    una continuidad para optimizar los resultados.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Las sesiones presenciales se realizan en el Centro Bidelagun (Aita Patxi Plaza, 5, Deusto, 48015
                    Bilbao, Bizkaia).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Para servicios a clubes, formaciones y asesoramiento a entrenadores, se realizará un presupuesto
                    personalizado según las necesidades específicas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Preguntas frecuentes</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">¿Cómo puedo contactarte para programar una sesión?</h3>
                <p className="text-gray-700">
                  Si estás interesado/a en programas una sesión, no dudes en contactar por teléfono, mensaje directo,
                  whatsapp o email. ¡Sin compromiso!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  En caso de que la sesión sea online ¿a través de que plataforma se realizan las sesiones?
                </h3>
                <p className="text-gray-700">
                  Las sesiones se desarrollan en las siguientes plataformas de videollamada, en función de las
                  necesidades: Google meet, zoom, Microsoft Teams o Whatsapp.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  ¿Cuánto duran las sesiones y con qué frecuencia debo asistir?
                </h3>
                <p className="text-gray-700">
                  Las sesiones duran aproximadamente una hora. La frecuencia de las mismas se adaptará a tus
                  necesidades, respetando siempre tu perspectva.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">¿Pueden participar menores de edad en las sesiones?</h3>
                <p className="text-gray-700">
                  Sí, siempre que se tenga permiso previo de su padre, madre o tutor legal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">¿Listo para comenzar?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contacta con nosotros para resolver cualquier duda adicional o para agendar tu primera sesión.
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
