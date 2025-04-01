import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import Image from "next/image"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Marquiore Films Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-semibold">Marquiore Films</span>
          </Link>
          <UserNav />
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row">
        <aside className="w-full md:w-64 border-r md:h-[calc(100vh-4rem)] md:sticky md:top-16">
          <DashboardNav />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

