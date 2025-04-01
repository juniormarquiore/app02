"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Music, Play, Plus, Search, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const musicLibrary = [
  { id: 1, title: "Perfect", artist: "Ed Sheeran", duration: "4:23", genre: "Pop" },
  { id: 2, title: "Can't Help Falling in Love", artist: "Elvis Presley", duration: "3:02", genre: "Clássico" },
  { id: 3, title: "All of Me", artist: "John Legend", duration: "4:29", genre: "R&B" },
  { id: 4, title: "Thinking Out Loud", artist: "Ed Sheeran", duration: "4:41", genre: "Pop" },
  { id: 5, title: "At Last", artist: "Etta James", duration: "2:59", genre: "Jazz" },
  { id: 6, title: "A Thousand Years", artist: "Christina Perri", duration: "4:45", genre: "Pop" },
  { id: 7, title: "Make You Feel My Love", artist: "Adele", duration: "3:32", genre: "Pop" },
  { id: 8, title: "Marry You", artist: "Bruno Mars", duration: "3:50", genre: "Pop" },
  { id: 9, title: "Endless Love", artist: "Lionel Richie & Diana Ross", duration: "4:26", genre: "R&B" },
  { id: 10, title: "From This Moment On", artist: "Shania Twain", duration: "4:43", genre: "Country" },
  { id: 11, title: "You Are the Reason", artist: "Calum Scott", duration: "3:24", genre: "Pop" },
  { id: 12, title: "Amazed", artist: "Lonestar", duration: "4:00", genre: "Country" },
]

export default function MusicasPage() {
  const [selectedMusic, setSelectedMusic] = useState<number[]>([1, 3, 6])
  const [searchTerm, setSearchTerm] = useState("")
  const { toast } = useToast()

  const filteredMusic = musicLibrary.filter(
    (music) =>
      music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      music.artist.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleToggleSelect = (id: number) => {
    if (selectedMusic.includes(id)) {
      setSelectedMusic(selectedMusic.filter((musicId) => musicId !== id))
    } else {
      if (selectedMusic.length < 5) {
        setSelectedMusic([...selectedMusic, id])
      } else {
        toast({
          title: "Limite atingido",
          description: "Você pode selecionar no máximo 5 músicas",
          variant: "destructive",
        })
      }
    }
  }

  const handleSaveSelections = () => {
    toast({
      title: "Seleção salva",
      description: `Você selecionou ${selectedMusic.length} músicas para o seu vídeo`,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Escolha de Músicas</h2>
      </div>

      <Tabs defaultValue="biblioteca" className="space-y-4">
        <TabsList>
          <TabsTrigger value="biblioteca">Biblioteca de Músicas</TabsTrigger>
          <TabsTrigger value="selecionadas">Músicas Selecionadas</TabsTrigger>
          <TabsTrigger value="sugerir">Sugerir Música</TabsTrigger>
        </TabsList>

        <TabsContent value="biblioteca" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biblioteca de Músicas</CardTitle>
              <CardDescription>Selecione até 5 músicas para o seu vídeo de casamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar por título ou artista..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline">Filtrar</Button>
              </div>

              <div className="border rounded-md">
                <div className="grid grid-cols-12 gap-4 p-3 border-b font-medium text-sm">
                  <div className="col-span-5">Título</div>
                  <div className="col-span-3">Artista</div>
                  <div className="col-span-2">Duração</div>
                  <div className="col-span-2 text-right">Ações</div>
                </div>

                {filteredMusic.map((music) => (
                  <div
                    key={music.id}
                    className="grid grid-cols-12 gap-4 p-3 border-b last:border-0 items-center text-sm"
                  >
                    <div className="col-span-5 flex items-center gap-2">
                      <Music className="h-4 w-4 text-muted-foreground" />
                      {music.title}
                    </div>
                    <div className="col-span-3">{music.artist}</div>
                    <div className="col-span-2">{music.duration}</div>
                    <div className="col-span-2 flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={selectedMusic.includes(music.id) ? "default" : "outline"}
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleToggleSelect(music.id)}
                      >
                        {selectedMusic.includes(music.id) ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">{selectedMusic.length} de 5 músicas selecionadas</div>
                <Button onClick={handleSaveSelections}>Salvar Seleção</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="selecionadas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Músicas Selecionadas</CardTitle>
              <CardDescription>Estas são as músicas que você selecionou para o seu vídeo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedMusic.length === 0 ? (
                <div className="text-center py-8">
                  <Music className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Nenhuma música selecionada</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Você ainda não selecionou nenhuma música para o seu vídeo.
                  </p>
                  <Button variant="outline">Ir para Biblioteca</Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {selectedMusic.map((id) => {
                    const music = musicLibrary.find((m) => m.id === id)
                    if (!music) return null

                    return (
                      <div key={music.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                            <Music className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{music.title}</p>
                            <p className="text-sm text-muted-foreground">{music.artist}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleToggleSelect(music.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              <div className="flex justify-end">
                <Button onClick={handleSaveSelections}>Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sugerir" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sugerir Música</CardTitle>
              <CardDescription>Não encontrou a música que deseja? Sugira uma música para o seu vídeo</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="titulo">Título da Música</Label>
                    <Input id="titulo" placeholder="Digite o título da música" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="artista">Artista</Label>
                    <Input id="artista" placeholder="Digite o nome do artista" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link">Link (opcional)</Label>
                  <Input id="link" placeholder="Cole aqui um link do YouTube, Spotify, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações</Label>
                  <textarea
                    id="observacoes"
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    placeholder="Adicione informações sobre a música ou momentos específicos em que gostaria que ela fosse utilizada..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <Button>Enviar Sugestão</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

