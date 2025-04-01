import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, ThumbsDown, ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function PreviasPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Prévias</h2>
      </div>

      <Tabs defaultValue="teaser" className="space-y-4">
        <TabsList>
          <TabsTrigger value="teaser">Teaser</TabsTrigger>
          <TabsTrigger value="completo">Vídeo Completo</TabsTrigger>
        </TabsList>

        <TabsContent value="teaser" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Prévia do Teaser</CardTitle>
              <CardDescription>Versão preliminar do teaser do seu casamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" size="lg" className="gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Reproduzir Vídeo
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Prévia do Teaser"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-2">Teaser - Versão 1</h3>
                  <p className="text-sm text-muted-foreground mb-4">Enviado em: 25/03/2025 • Duração: 1:30 min</p>
                  <p className="text-sm mb-4">
                    Esta é a primeira versão do teaser do seu casamento. Por favor, avalie e deixe seus comentários para
                    possíveis ajustes.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      Aprovar
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ThumbsDown className="h-4 w-4" />
                      Solicitar Ajustes
                    </Button>
                  </div>
                  <Button variant="secondary" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Baixar Prévia
                  </Button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Deixe seu feedback</h4>
                <textarea
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Escreva aqui seus comentários sobre esta prévia..."
                ></textarea>
                <div className="flex justify-end mt-2">
                  <Button>Enviar Feedback</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Prévia do Vídeo Completo</CardTitle>
              <CardDescription>Ainda não há prévias disponíveis do vídeo completo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-6 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Em Produção</h3>
                <p className="text-sm text-muted-foreground max-w-md mb-6">
                  O vídeo completo do seu casamento está em processo de edição. A primeira prévia está prevista para ser
                  disponibilizada em 05/05/2025.
                </p>
                <p className="text-sm text-muted-foreground">
                  Você receberá uma notificação assim que a prévia estiver disponível.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

