import { Button } from "@/components/ui/button"
import { LoginForm } from "@/components/login-form"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Marquiore Films Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">Marquiore Films</span>
          </div>
          <Link href="/cadastro">
            <Button variant="outline">Cadastrar</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gradient-to-br from-rose-100 to-pink-100 p-8 flex items-center justify-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo ao Portal do Cliente</h1>
            <p className="text-gray-700 mb-6">
              Acompanhe o andamento do seu projeto, visualize prévias, escolha músicas e muito mais. Tudo em um só lugar
              para tornar sua experiência ainda mais especial.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Acompanhamento</h3>
                <p className="text-sm text-gray-600">Acompanhe cada etapa da produção do seu vídeo</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Prévias</h3>
                <p className="text-sm text-gray-600">Visualize trechos do seu vídeo antes da entrega final</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Músicas</h3>
                <p className="text-sm text-gray-600">Escolha as músicas que farão parte da trilha sonora</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Prazos</h3>
                <p className="text-sm text-gray-600">Acompanhe os prazos de entrega de cada etapa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <LoginForm />
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Marquiore Films. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

