import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram, Clock, Send, MapPin } from "lucide-react"

export default function ContactoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Contacto</h1>
            <p className="text-lg text-gray-700 mb-8">
              Ponte en contacto con nosotros para solicitar información o agendar una cita
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Información de contacto</h2>

              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  En Milón Psicología atendemos exclusivamente con cita previa. Si necesitas más información, tienes
                  alguna pregunta o quieres agendar una cita, puedes ponerte en contacto con nosotros a través de
                  cualquiera de las siguientes vías:
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-4 border-none shadow-md">
                  <div className="flex items-center">
                    <Phone className="h-10 w-10 text-black p-2 bg-gray-100 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Teléfono</h3>
                      <p className="text-gray-700">688682660</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-none shadow-md">
                  <div className="flex items-center">
                    <Mail className="h-10 w-10 text-black p-2 bg-gray-100 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Correo electrónico</h3>
                      <p className="text-gray-700">milonpsicologia@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-none shadow-md">
                  <div className="flex items-center">
                    <Instagram className="h-10 w-10 text-black p-2 bg-gray-100 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Redes sociales</h3>
                      <div className="flex flex-col space-y-1">
                        <a
                          href="https://instagram.com/milonpsicologia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-black transition-colors"
                        >
                          Instagram: @milonpsicologia
                        </a>
                        <a
                          href="https://tiktok.com/@milonpsicologia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-black transition-colors"
                        >
                          TikTok: @milonpsicologia
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-none shadow-md">
                  <div className="flex items-center">
                    <Clock className="h-10 w-10 text-black p-2 bg-gray-100 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Horario de atención</h3>
                      <p className="text-gray-700">Lunes a viernes: 9:00 - 20:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-none shadow-md">
                  <div className="flex items-center">
                    <MapPin className="h-10 w-10 text-black p-2 bg-gray-100 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Sesiones presenciales</h3>
                      <p className="text-gray-700">Las sesiones presenciales se realizan en:</p>
                      <p className="text-gray-700">Centro Bidelagun</p>
                      <p className="text-gray-700">Aita Patxi Plaza, 5, Deusto</p>
                      <p className="text-gray-700">48015 Bilbao, Bizkaia</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Formulario de contacto</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="nombre" placeholder="Tu nombre" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="apellidos" className="text-sm font-medium">
                      Apellidos
                    </label>
                    <Input id="apellidos" placeholder="Tus apellidos" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input id="email" type="email" placeholder="Tu correo electrónico" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input id="telefono" placeholder="Tu número de teléfono" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <Input id="asunto" placeholder="Asunto de tu mensaje" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">¿Listo para dar el primer paso?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contacta con nosotros hoy mismo y descubre cómo la psicología deportiva puede ayudarte a alcanzar tu
              máximo potencial.
            </p>
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <a href="tel:688682660">Llamar ahora</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
