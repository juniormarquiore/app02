"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar..."
        className="pl-8 w-[200px] md:w-[300px]"
      />
    </div>
  );
} 