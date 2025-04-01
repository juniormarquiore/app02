import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Clock, Film, Hourglass } from "lucide-react"

export default function AndamentoPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Andamento do Projeto</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progresso Geral</CardTitle>
          <CardDescription>Acompanhe o progresso geral do seu projeto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Progresso Total</div>
              <div className="text-sm font-medium">65%</div>
            </div>
            <Progress value={65} className="h-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="border rounded-md p-4 text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">3</div>
              <div className="text-sm text-muted-foreground">Etapas Concluídas</div>
            </div>
            <div className="border rounded-md p-4 text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">2</div>
              <div className="text-sm text-muted-foreground">Etapas em Andamento</div>
            </div>
            <div className="border rounded-md p-4 text-center">
              <div className="text-4xl font-bold text-slate-400 mb-2">3</div>
              <div className="text-sm text-muted-foreground">Etapas Pendentes</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Etapas do Projeto</CardTitle>
          <CardDescription>Detalhamento de cada etapa do processo de produção</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Captação de Imagens</h3>
                  <span className="text-sm text-green-500 font-medium">Concluído</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Filmagem realizada no dia do evento, incluindo cerimônia e recepção.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Concluído em:</span> 15/03/2025
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Backup e Organização</h3>
                  <span className="text-sm text-green-500 font-medium">Concluído</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Backup de segurança de todo o material bruto e organização dos arquivos.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Concluído em:</span> 17/03/2025
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Seleção de Material</h3>
                  <span className="text-sm text-green-500 font-medium">Concluído</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Seleção das melhores cenas e momentos para compor o vídeo final.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Concluído em:</span> 22/03/2025
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Film className="h-5 w-5 text-amber-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Edição de Teaser</h3>
                  <span className="text-sm text-amber-500 font-medium">Em andamento</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Montagem e edição do teaser com os melhores momentos do evento.
                </p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progresso</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <div className="text-sm">
                    <span className="font-medium">Previsão de conclusão:</span> 10/04/2025
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Film className="h-5 w-5 text-amber-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Edição de Vídeo Completo</h3>
                  <span className="text-sm text-amber-500 font-medium">Em andamento</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Montagem e edição do vídeo completo do casamento.</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progresso</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <div className="text-sm">
                    <span className="font-medium">Previsão de conclusão:</span> 05/05/2025
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Hourglass className="h-5 w-5 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Colorização</h3>
                  <span className="text-sm text-slate-400 font-medium">Pendente</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Correção e ajuste de cores para garantir a qualidade visual do vídeo.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Previsão de início:</span> 25/04/2025
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Hourglass className="h-5 w-5 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Sonorização</h3>
                  <span className="text-sm text-slate-400 font-medium">Pendente</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Inclusão das músicas selecionadas e ajustes de áudio.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Previsão de início:</span> 01/05/2025
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Hourglass className="h-5 w-5 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Finalização</h3>
                  <span className="text-sm text-slate-400 font-medium">Pendente</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Ajustes finais, inclusão de créditos e exportação do vídeo final.
                </p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Previsão de início:</span> 10/05/2025
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-md flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              As datas previstas podem sofrer alterações. Você será notificado sobre qualquer mudança no cronograma.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

