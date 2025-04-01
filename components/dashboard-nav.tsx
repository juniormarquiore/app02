"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Film, Music, Calendar, FileText, MessageSquare, Settings, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Meu Projeto",
    icon: Film,
    href: "/dashboard/projeto",
    color: "text-violet-500",
    submenu: [
      {
        label: "Visão Geral",
        href: "/dashboard/projeto",
      },
      {
        label: "Prévias",
        href: "/dashboard/projeto/previas",
      },
      {
        label: "Andamento",
        href: "/dashboard/projeto/andamento",
      },
    ],
  },
  {
    label: "Escolha de Músicas",
    icon: Music,
    color: "text-pink-500",
    href: "/dashboard/musicas",
  },
  {
    label: "Prazos",
    icon: Calendar,
    color: "text-orange-500",
    href: "/dashboard/prazos",
  },
  {
    label: "Contrato",
    icon: FileText,
    color: "text-green-500",
    href: "/dashboard/contrato",
  },
  {
    label: "Mensagens",
    icon: MessageSquare,
    color: "text-blue-500",
    href: "/dashboard/mensagens",
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/dashboard/configuracoes",
  },
]

export function DashboardNav() {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(label)
    }
  }

  return (
    <nav className="p-4 space-y-2">
      {routes.map((route) => {
        const isActive = pathname === route.href
        const hasSubmenu = route.submenu && route.submenu.length > 0
        const isSubmenuOpen = openSubmenu === route.label

        return (
          <div key={route.href} className="space-y-1">
            {hasSubmenu ? (
              <Button
                variant="ghost"
                className={cn("w-full justify-start gap-2 font-normal", isActive && "bg-muted")}
                onClick={() => toggleSubmenu(route.label)}
              >
                <route.icon className={cn("h-5 w-5", route.color)} />
                {route.label}
                {isSubmenuOpen ? (
                  <ChevronUp className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-auto h-4 w-4" />
                )}
              </Button>
            ) : (
              <Link href={route.href}>
                <Button
                  variant="ghost"
                  className={cn("w-full justify-start gap-2 font-normal", isActive && "bg-muted")}
                >
                  <route.icon className={cn("h-5 w-5", route.color)} />
                  {route.label}
                </Button>
              </Link>
            )}

            {hasSubmenu && isSubmenuOpen && (
              <div className="pl-9 space-y-1">
                {route.submenu?.map((submenuItem) => {
                  const isSubmenuActive = pathname === submenuItem.href

                  return (
                    <Link href={submenuItem.href} key={submenuItem.href}>
                      <Button
                        variant="ghost"
                        className={cn("w-full justify-start text-sm font-normal", isSubmenuActive && "bg-muted")}
                      >
                        {submenuItem.label}
                      </Button>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

