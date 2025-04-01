import { RegistrationForm } from "@/components/registration-form"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CadastroPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Marquiore Films Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">Marquiore Films</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">Voltar</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Cadastro de Novo Cliente</h1>
          <RegistrationForm />
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

