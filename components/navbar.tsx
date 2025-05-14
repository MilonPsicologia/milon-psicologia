"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Menu, X, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"

const services = [
  {
    title: "Psicología Deportiva Individual",
    href: "/servicios/individual",
    description: "Sesiones adaptadas a personas de todas las edades y modalidades deportivas",
  },
  {
    title: "Asesoramiento a Entrenadores",
    href: "/servicios/entrenadores",
    description: "Integración de aspectos psicológicos en el entrenamiento deportivo",
  },
  {
    title: "Formaciones",
    href: "/servicios/formaciones",
    description: "Sesiones individuales y grupales de formación en psicología deportiva",
  },
  {
    title: "Servicios para Clubes",
    href: "/servicios/clubes",
    description: "Soluciones adaptadas a clubes, centros deportivos y otras entidades",
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200">
      <div className="bg-gray-100 py-1">
        <div className="container mx-auto px-4 flex justify-end items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>milonpsicologia@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>688682660</span>
            </div>
            <div className="flex items-center">
              <a
                href="https://instagram.com/milonpsicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-800 transition-colors"
              >
                <Instagram className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">@milonpsicologia</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Milón Psicología" width={120} height={120} className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        pathname === "/" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      )}
                    >
                      Inicio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(pathname.startsWith("/servicios") ? "bg-gray-100 text-gray-900" : "text-gray-700")}
                  >
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">{service.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/equipo" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        pathname === "/equipo" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      )}
                    >
                      Equipo
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/tarifas" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        pathname === "/tarifas" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      )}
                    >
                      Tarifas
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        pathname === "/blog" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      )}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contacto" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        pathname === "/contacto" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      )}
                    >
                      Contacto
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md",
                  pathname === "/" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>

              <div className="px-4 py-2">
                <div className="font-medium text-sm mb-2">Servicios</div>
                <div className="pl-4 flex flex-col space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="text-sm text-gray-700 hover:text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/equipo"
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md",
                  pathname === "/equipo" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Equipo
              </Link>

              <Link
                href="/tarifas"
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md",
                  pathname === "/tarifas" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifas
              </Link>

              <Link
                href="/blog"
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md",
                  pathname === "/blog" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contacto"
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md",
                  pathname === "/contacto" ? "bg-gray-100 text-gray-900" : "text-gray-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
