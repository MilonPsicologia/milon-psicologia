import { Card } from "@/components/ui/card"
import { Mail, Phone, Instagram } from "lucide-react"

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

\
