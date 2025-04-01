"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

// Dados simulados de mensagens
const initialMessages = [
  {
    id: 1,
    sender: "editor",
    name: "Carlos Oliveira",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Olá João e Maria! Espero que estejam bem. Estou trabalhando na edição do teaser do casamento de vocês e gostaria de saber se vocês têm alguma preferência específica de momentos que gostariam de ver destacados.",
    timestamp: "2025-03-30T14:30:00",
    read: false,
  },
  {
    id: 2,
    sender: "editor",
    name: "Carlos Oliveira",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Também gostaria de confirmar se vocês já escolheram as músicas para o vídeo. Isso nos ajudará a avançar com a edição.",
    timestamp: "2025-03-30T14:32:00",
    read: false,
  },
  {
    id: 3,
    sender: "client",
    name: "João e Maria",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Olá Carlos! Estamos bem, obrigado. Gostaríamos que os votos e o primeiro beijo como casal tivessem destaque no teaser.",
    timestamp: "2025-03-30T15:45:00",
    read: true,
  },
]

export default function MensagensPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const { toast } = useToast()

  // Marcar mensagens como lidas
  const markAsRead = () => {
    setMessages(messages.map((msg) => ({ ...msg, read: true })))
  }

  // Enviar nova mensagem
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (newMessage.trim() === "") return

    const newMsg = {
      id: messages.length + 1,
      sender: "client",
      name: "João e Maria",
      avatar: "/placeholder.svg?height=40&width=40",
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: true,
    }

    setMessages([...messages, newMsg])
    setNewMessage("")

    toast({
      title: "Mensagem enviada",
      description: "Sua mensagem foi enviada com sucesso",
    })
  }

  // Formatar data usando date-fns
  const formatMessageDate = (dateString: string) => {
    return format(new Date(dateString), "dd/MM/yyyy HH:mm", { locale: ptBR })
  }

  // Contar mensagens não lidas
  const unreadCount = messages.filter((msg) => !msg.read).length

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Mensagens</h2>
        {unreadCount > 0 && (
          <Button variant="outline" onClick={markAsRead}>
            Marcar todas como lidas
          </Button>
        )}
      </div>

      <Card className="flex flex-col h-[calc(100vh-12rem)]">
        <CardHeader>
          <CardTitle>Conversa com a Equipe</CardTitle>
          <CardDescription>Converse diretamente com a equipe responsável pelo seu projeto</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.sender === "client" ? "justify-end" : ""}`}>
                {message.sender !== "client" && (
                  <Avatar>
                    <AvatarImage src={message.avatar} alt={message.name} />
                    <AvatarFallback>CO</AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "client" ? "bg-primary text-primary-foreground" : "bg-muted"
                  } ${!message.read && message.sender !== "client" ? "border-l-4 border-primary" : ""}`}
                >
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <span className="font-medium text-sm">{message.name}</span>
                    <span className="text-xs opacity-70">{formatMessageDate(message.timestamp)}</span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>

                {message.sender === "client" && (
                  <Avatar>
                    <AvatarImage src={message.avatar} alt={message.name} />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="flex gap-2">
            <Input
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

