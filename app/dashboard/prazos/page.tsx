"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CalendarIcon, CheckCircle2, Clock } from "lucide-react"

export default function PrazosPage() {
  // Armazenar a data atual para comparação
  const [currentDate] = useState(new Date())

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Prazos</h2>
      </div>

      <Tabs defaultValue="calendario" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendario">Calendário</TabsTrigger>
          <TabsTrigger value="lista">Lista de Prazos</TabsTrigger>
        </TabsList>

        <TabsContent value="calendario" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calendário de Entregas</CardTitle>
                <CardDescription>Visualize as datas importantes do seu projeto</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Usando uma data fixa para comparação em vez de uma função inline */}
                <Calendar mode="single" className="rounded-md border" fromDate={currentDate} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eventos do Mês</CardTitle>
                <CardDescription>Entregas e marcos importantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-md">
                  <div className="mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Captação de Imagens</p>
                    <p className="text-sm text-muted-foreground">15/03/2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-md">
                  <div className="mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Backup e Organização</p>
                    <p className="text-sm text-muted-foreground">17/03/2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-md">
                  <div className="mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Seleção de Material</p>
                    <p className="text-sm text-muted-foreground">22/03/2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-md">
                  <div className="mt-0.5">
                    <Clock className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-medium">Prévia do Teaser</p>
                    <p className="text-sm text-muted-foreground">10/04/2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-md">
                  <div className="mt-0.5">
                    <Clock className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-medium">Versão Final do Teaser</p>
                    <p className="text-sm text-muted-foreground">20/04/2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="lista" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Prazos</CardTitle>
              <CardDescription>Todos os prazos do seu projeto em ordem cronológica</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-border" />

                <div className="space-y-8">
                  <div className="relative pl-10">
                    <div className="absolute left-0 rounded-full bg-green-500 text-white w-10 h-10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Captação de Imagens</h3>
                        <div className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          Concluído
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Filmagem realizada no dia do evento, incluindo cerimônia e recepção.
                      </p>
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>15/03/2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 rounded-full bg-green-500 text-white w-10 h-10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Backup e Organização</h3>
                        <div className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          Concluído
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Backup de segurança de todo o material bruto e organização dos arquivos.
                      </p>
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>17/03/2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 rounded-full bg-green-500 text-white w-10 h-10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Seleção de Material</h3>
                        <div className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          Concluído
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Seleção das melhores cenas e momentos para compor o vídeo final.
                      </p>
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>22/03/2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 rounded-full bg-amber-500 text-white w-10 h-10 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Prévia do Teaser</h3>
                        <div className="px-2 py-0.5 rounded text-xs bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                          Em andamento
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Primeira versão do teaser para aprovação.</p>
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>10/04/2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 w-10 h-10 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Versão Final do Teaser</h3>
                        <div className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          Pendente
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Versão final do teaser após ajustes.</p>
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>20/04/2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 w-10 h-10 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Primeira Versão do Vídeo Completo</h3>
                        <div className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          Pendente
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Primeira versão do vídeo completo para aprovação.</p>
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>05/05/2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 w-10 h-10 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Versão Final do Vídeo Completo</h3>
                        <div className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          Pendente
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Entrega final do vídeo completo após ajustes.</p>
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>15/05/2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 p-4 bg-muted/50 rounded-md">
                <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-1">Observação sobre os prazos</p>
                  <p>
                    Os prazos podem sofrer alterações dependendo da complexidade do projeto e do tempo necessário para
                    aprovações e ajustes. Você será notificado sobre qualquer alteração no cronograma.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

