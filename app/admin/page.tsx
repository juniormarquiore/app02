"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserNav } from "@/components/user-nav";
import { DashboardNav } from "@/components/dashboard-nav";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Search } from "@/components/search";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Painel Administrativo</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="usuarios">Usuários</TabsTrigger>
            <TabsTrigger value="projetos">Projetos</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold">Projetos Ativos</h3>
                <p className="text-3xl font-bold">12</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold">Clientes</h3>
                <p className="text-3xl font-bold">48</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold">Receita Mensal</h3>
                <p className="text-3xl font-bold">R$ 24.500</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold">Projetos Concluídos</h3>
                <p className="text-3xl font-bold">156</p>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Visão Geral</h3>
                  <Overview />
                </div>
              </Card>
              <Card className="col-span-3">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Projetos Recentes</h3>
                  <RecentSales />
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="usuarios" className="space-y-4">
            {/* Conteúdo da aba de usuários será adicionado depois */}
          </TabsContent>
          <TabsContent value="projetos" className="space-y-4">
            {/* Conteúdo da aba de projetos será adicionado depois */}
          </TabsContent>
          <TabsContent value="configuracoes" className="space-y-4">
            {/* Conteúdo da aba de configurações será adicionado depois */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 