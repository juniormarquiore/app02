"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">João Silva</p>
          <p className="text-sm text-muted-foreground">
            Casamento na Praia
          </p>
        </div>
        <div className="ml-auto font-medium">R$4.500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Maria Aparecida</p>
          <p className="text-sm text-muted-foreground">
            Aniversário 15 Anos
          </p>
        </div>
        <div className="ml-auto font-medium">R$3.200</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Carlos Pereira</p>
          <p className="text-sm text-muted-foreground">
            Formatura Medicina
          </p>
        </div>
        <div className="ml-auto font-medium">R$5.800</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ana Maria</p>
          <p className="text-sm text-muted-foreground">
            Bodas de Ouro
          </p>
        </div>
        <div className="ml-auto font-medium">R$4.200</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Roberto Barros</p>
          <p className="text-sm text-muted-foreground">
            Evento Corporativo
          </p>
        </div>
        <div className="ml-auto font-medium">R$6.500</div>
      </div>
    </div>
  );
} 