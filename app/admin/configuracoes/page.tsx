"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const configFormSchema = z.object({
  siteName: z.string().min(2, {
    message: "O nome do site deve ter pelo menos 2 caracteres.",
  }),
  siteDescription: z.string().min(10, {
    message: "A descrição deve ter pelo menos 10 caracteres.",
  }),
  contactEmail: z.string().email({
    message: "Por favor insira um email válido.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Por favor insira um número de telefone válido.",
  }),
  address: z.string().min(10, {
    message: "Por favor insira um endereço válido.",
  }),
  socialMedia: z.object({
    facebook: z.string().url({ message: "Por favor insira uma URL válida." }).optional(),
    instagram: z.string().url({ message: "Por favor insira uma URL válida." }).optional(),
    youtube: z.string().url({ message: "Por favor insira uma URL válida." }).optional(),
  }),
});

type ConfigFormValues = z.infer<typeof configFormSchema>;

const defaultValues: Partial<ConfigFormValues> = {
  siteName: "Marquiore Films",
  siteDescription: "Produtora de vídeos especializada em eventos e documentários.",
  contactEmail: "contato@marquiorefilms.com",
  phoneNumber: "(11) 99999-9999",
  address: "Rua Exemplo, 123 - São Paulo, SP",
  socialMedia: {
    facebook: "https://facebook.com/marquiorefilms",
    instagram: "https://instagram.com/marquiorefilms",
    youtube: "https://youtube.com/marquiorefilms",
  },
};

export default function ConfiguracoesPage() {
  const form = useForm<ConfigFormValues>({
    resolver: zodResolver(configFormSchema),
    defaultValues,
  });

  function onSubmit(data: ConfigFormValues) {
    toast.success("Configurações salvas com sucesso!");
    console.log(data);
  }

  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Configurações do Site</h2>
        <p className="text-muted-foreground">
          Gerencie as configurações gerais do seu site
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="siteName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Site</FormLabel>
                <FormControl>
                  <Input placeholder="Marquiore Films" {...field} />
                </FormControl>
                <FormDescription>
                  Este é o nome que aparecerá no cabeçalho do site.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="siteDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição do Site</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva seu site em poucas palavras..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Esta descrição será usada para SEO e meta tags.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email de Contato</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="contato@exemplo.com" {...field} />
                </FormControl>
                <FormDescription>
                  Email principal para contato com clientes.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormDescription>
                  Número de telefone principal para contato.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite o endereço completo..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Endereço físico da empresa.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Redes Sociais</h3>
            <FormField
              control={form.control}
              name="socialMedia.facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input placeholder="https://facebook.com/sua-pagina" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialMedia.instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input placeholder="https://instagram.com/seu-perfil" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialMedia.youtube"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YouTube</FormLabel>
                  <FormControl>
                    <Input placeholder="https://youtube.com/seu-canal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Salvar Alterações</Button>
        </form>
      </Form>
    </div>
  );
} 