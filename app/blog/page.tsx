import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram } from "lucide-react"

export default function BlogPage() {
  // Posts de Instagram
  const posts = [
    {
      id: 1,
      title: "La retirada deportiva",
      description:
        "Un análisis sobre el proceso de retirada deportiva y cómo afrontar esta transición de manera saludable.",
      date: "15 de abril, 2024",
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      instagram_url: "https://www.instagram.com/milonpsicologia/",
    },
    {
      id: 2,
      title: "¿Qué variables influyen en mi rendimiento?",
      description: "Explorando los factores psicológicos que determinan el rendimiento deportivo.",
      date: "3 de marzo, 2024",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      instagram_url: "https://www.instagram.com/milonpsicologia/",
    },
    {
      id: 3,
      title: "¿Cómo establecer objetivos que funcionen?",
      description: "Guía práctica para establecer objetivos efectivos que mejoren tu rendimiento deportivo.",
      date: "22 de enero, 2024",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
      instagram_url: "https://www.instagram.com/milonpsicologia/",
    },
    {
      id: 4,
      title: "La zona y el estado de flow",
      description: "Qué es el estado de flow y cómo alcanzarlo para optimizar tu rendimiento deportivo.",
      date: "10 de diciembre, 2023",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      instagram_url: "https://www.instagram.com/milonpsicologia/",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Blog</h1>
            <p className="text-lg text-gray-700 mb-8">Artículos, recursos y consejos sobre psicología deportiva</p>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold font-playfair">Publicaciones de Instagram</h2>
            </div>
            <p className="text-gray-700">
              Descubre nuestro contenido sobre psicología deportiva en Instagram. Haz clic en cualquier publicación para
              verla en Instagram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="border border-gray-200 overflow-hidden">
                <a href={post.instagram_url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute bottom-0 right-0 p-2 bg-black bg-opacity-70 rounded-tl-md">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </a>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={post.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Ver en Instagram
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <a
                href="https://www.instagram.com/milonpsicologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Seguir en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">Mantente informado</h2>
            <p className="text-lg text-gray-700 mb-8">
              Suscríbete a nuestra newsletter para recibir artículos, consejos y novedades sobre psicología deportiva
              directamente en tu correo electrónico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button className="bg-black hover:bg-gray-800 text-white">Suscribirse</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
