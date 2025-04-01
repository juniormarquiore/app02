"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function RegistrationForm() {
  const [activeTab, setActiveTab] = useState("informacoes-pessoais")
  const [date, setDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de cadastro - em produção, isso seria uma chamada de API real
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Cadastro realizado com sucesso",
        description: "Redirecionando para o dashboard...",
      })
      router.push("/dashboard")
    }, 1500)
  }

  const nextTab = () => {
    if (activeTab === "informacoes-pessoais") setActiveTab("informacoes-casamento")
    else if (activeTab === "informacoes-casamento") setActiveTab("pagamento-prazos")
  }

  const prevTab = () => {
    if (activeTab === "pagamento-prazos") setActiveTab("informacoes-casamento")
    else if (activeTab === "informacoes-casamento") setActiveTab("informacoes-pessoais")
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="informacoes-pessoais">Informações Pessoais</TabsTrigger>
              <TabsTrigger value="informacoes-casamento">Informações do Casamento</TabsTrigger>
              <TabsTrigger value="pagamento-prazos">Pagamento e Prazos</TabsTrigger>
            </TabsList>

            <TabsContent value="informacoes-pessoais" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" placeholder="Seu nome completo" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(00) 00000-0000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senha">Senha</Label>
                  <Input id="senha" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
                  <Input id="confirmar-senha" type="password" required />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button type="button" onClick={nextTab}>
                  Próximo
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="informacoes-casamento" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome-noiva">Nome da Noiva</Label>
                  <Input id="nome-noiva" placeholder="Nome completo da noiva" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nome-noivo">Nome do Noivo</Label>
                  <Input id="nome-noivo" placeholder="Nome completo do noivo" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data-casamento">Data do Casamento</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="horario-cerimonia">Horário da Cerimônia</Label>
                  <Input id="horario-cerimonia" type="time" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="local-cerimonia">Local da Cerimônia</Label>
                  <Input id="local-cerimonia" placeholder="Endereço completo" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="local-recepcao">Local da Recepção</Label>
                  <Input id="local-recepcao" placeholder="Endereço completo" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="observacoes">Observações Adicionais</Label>
                  <Textarea id="observacoes" placeholder="Informações adicionais sobre o evento" rows={4} />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={prevTab}>
                  Voltar
                </Button>
                <Button type="button" onClick={nextTab}>
                  Próximo
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="pagamento-prazos" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pacote">Pacote Escolhido</Label>
                  <select
                    id="pacote"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Selecione um pacote</option>
                    <option value="basico">Básico - R$ 3.000,00</option>
                    <option value="premium">Premium - R$ 5.000,00</option>
                    <option value="luxo">Luxo - R$ 8.000,00</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="forma-pagamento">Forma de Pagamento</Label>
                  <select
                    id="forma-pagamento"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Selecione uma forma de pagamento</option>
                    <option value="pix">PIX</option>
                    <option value="cartao">Cartão de Crédito</option>
                    <option value="boleto">Boleto Bancário</option>
                    <option value="transferencia">Transferência Bancária</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parcelas">Número de Parcelas</Label>
                  <select
                    id="parcelas"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="1">À vista</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                    <option value="6">6x</option>
                    <option value="12">12x</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor-entrada">Valor da Entrada (R$)</Label>
                  <Input id="valor-entrada" placeholder="0,00" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="termos-contrato">Termos do Contrato</Label>
                  <div className="p-4 border rounded-md bg-muted/50 h-40 overflow-y-auto text-sm">
                    <p>CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE FILMAGEM DE CASAMENTO</p>
                    <br />
                    <p>
                      Pelo presente instrumento particular, de um lado MARQUIORE FILMS, doravante denominada CONTRATADA,
                      e de outro lado o cliente identificado no cadastro, doravante denominado CONTRATANTE, têm entre si
                      justo e contratado o seguinte:
                    </p>
                    <br />
                    <p>1. OBJETO DO CONTRATO</p>
                    <p>
                      1.1. O presente contrato tem como objeto a prestação de serviços de filmagem do evento de
                      casamento do CONTRATANTE, conforme especificações do pacote escolhido.
                    </p>
                    <br />
                    <p>2. OBRIGAÇÕES DA CONTRATADA</p>
                    <p>2.1. Realizar a filmagem do evento conforme pacote contratado;</p>
                    <p>2.2. Editar o material captado e entregar o produto final nos prazos estipulados;</p>
                    <p>2.3. Disponibilizar prévias do material durante o processo de edição;</p>
                    <p>2.4. Manter o CONTRATANTE informado sobre o andamento do trabalho.</p>
                    <br />
                    <p>3. OBRIGAÇÕES DO CONTRATANTE</p>
                    <p>3.1. Fornecer todas as informações necessárias para a execução dos serviços;</p>
                    <p>3.2. Efetuar os pagamentos conforme acordado;</p>
                    <p>3.3. Colaborar com a CONTRATADA durante a execução dos serviços.</p>
                    <br />
                    <p>4. PRAZOS</p>
                    <p>4.1. O prazo para entrega do teaser é de até 15 dias após o evento;</p>
                    <p>4.2. O prazo para entrega do vídeo completo é de até 90 dias após o evento.</p>
                    <br />
                    <p>5. DISPOSIÇÕES GERAIS</p>
                    <p>
                      5.1. A CONTRATADA poderá utilizar o material produzido para fins de divulgação de seu trabalho,
                      respeitando a privacidade do CONTRATANTE;
                    </p>
                    <p>
                      5.2. Qualquer alteração neste contrato deverá ser feita por escrito e assinada por ambas as
                      partes.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 flex items-start gap-2">
                  <input type="checkbox" id="aceite-termos" className="mt-1" required />
                  <Label htmlFor="aceite-termos" className="text-sm">
                    Li e aceito os termos do contrato e autorizo o processamento dos meus dados pessoais para fins de
                    prestação dos serviços contratados.
                  </Label>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={prevTab}>
                  Voltar
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Processando..." : "Finalizar Cadastro"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  )
}

