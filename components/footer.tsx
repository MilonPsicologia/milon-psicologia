import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Milón Psicología"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mt-2">
              Servicios profesionales de psicología deportiva para optimizar el rendimiento y bienestar de deportistas
              de todas las edades y modalidades.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/equipo" className="text-gray-400 hover:text-white transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/tarifas" className="text-gray-400 hover:text-white transition-colors">
                  Tarifas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span>688682660</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span>milonpsicologia@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Instagram className="h-5 w-5 mr-2 text-gray-400" />
                <a href="https://instagram.com/milonpsicologia" className="hover:text-white transition-colors">
                  @milonpsicologia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Milón Psicología. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
