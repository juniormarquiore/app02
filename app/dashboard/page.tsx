import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, Film, MessageSquare, Music } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">Última atualização: 31/03/2025, 13:32</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics">Análise</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Progresso do Projeto</CardTitle>
                <Film className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65%</div>
                <Progress value={65} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Etapa atual: Edição de vídeo</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Prazo de Entrega</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15/05/2025</div>
                <p className="text-xs text-muted-foreground mt-2">Faltam 45 dias</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Músicas Selecionadas</CardTitle>
                <Music className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3/5</div>
                <Progress value={60} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Faltam 2 músicas para selecionar</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mensagens Não Lidas</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-2">Última mensagem: 2 horas atrás</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Próximas Entregas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <Clock className="h-4 w-4 text-blue-700" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium leading-none">Prévia do Teaser</p>
                      <p className="text-sm text-muted-foreground">Entrega prevista em 5 dias</p>
                    </div>
                    <div className="ml-auto font-medium">10/04/2025</div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <Clock className="h-4 w-4 text-green-700" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium leading-none">Versão Final do Teaser</p>
                      <p className="text-sm text-muted-foreground">Entrega prevista em 15 dias</p>
                    </div>
                    <div className="ml-auto font-medium">20/04/2025</div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                      <Clock className="h-4 w-4 text-orange-700" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium leading-none">Primeira Versão do Vídeo Completo</p>
                      <p className="text-sm text-muted-foreground">Entrega prevista em 30 dias</p>
                    </div>
                    <div className="ml-auto font-medium">05/05/2025</div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <Clock className="h-4 w-4 text-purple-700" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium leading-none">Versão Final do Vídeo Completo</p>
                      <p className="text-sm text-muted-foreground">Entrega prevista em 45 dias</p>
                    </div>
                    <div className="ml-auto font-medium">15/05/2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Ações Pendentes</CardTitle>
                <CardDescription>Ações que precisam da sua atenção</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-3">
                  <h3 className="font-medium mb-1">Selecionar Músicas</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Você ainda precisa selecionar 2 músicas para o seu vídeo
                  </p>
                  <Link href="/dashboard/musicas">
                    <Button size="sm">Selecionar Músicas</Button>
                  </Link>
                </div>

                <div className="border rounded-lg p-3">
                  <h3 className="font-medium mb-1">Responder Mensagens</h3>
                  <p className="text-sm text-muted-foreground mb-2">Você tem 2 mensagens não lidas do editor</p>
                  <Link href="/dashboard/mensagens">
                    <Button size="sm">Ver Mensagens</Button>
                  </Link>
                </div>

                <div className="border rounded-lg p-3">
                  <h3 className="font-medium mb-1">Revisar Contrato</h3>
                  <p className="text-sm text-muted-foreground mb-2">Seu contrato está pendente de assinatura digital</p>
                  <Link href="/dashboard/contrato">
                    <Button size="sm">Revisar Contrato</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Cronograma do Projeto</CardTitle>
                <CardDescription>Visão detalhada do cronograma de produção</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Captação de Imagens</div>
                      <div className="text-sm text-muted-foreground">100%</div>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Seleção de Material</div>
                      <div className="text-sm text-muted-foreground">100%</div>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Edição de Teaser</div>
                      <div className="text-sm text-muted-foreground">80%</div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Edição de Vídeo Completo</div>
                      <div className="text-sm text-muted-foreground">45%</div>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Colorização</div>
                      <div className="text-sm text-muted-foreground">30%</div>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Finalização</div>
                      <div className="text-sm text-muted-foreground">0%</div>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informações do Projeto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Casal</p>
                    <p className="text-sm">João & Maria</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium">Data do Casamento</p>
                    <p className="text-sm">15/03/2025</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium">Local</p>
                    <p className="text-sm">Espaço Jardim das Flores</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium">Pacote</p>
                    <p className="text-sm">Premium</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium">Duração Estimada</p>
                    <p className="text-sm">25-30 minutos</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium">Editor Responsável</p>
                    <p className="text-sm">Carlos Oliveira</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

