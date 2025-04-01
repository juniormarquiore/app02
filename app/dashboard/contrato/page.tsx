import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Download, FileText } from "lucide-react"

export default function ContratoPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Contrato</h2>
      </div>

      <Tabs defaultValue="contrato" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contrato">Contrato</TabsTrigger>
          <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
        </TabsList>

        <TabsContent value="contrato" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contrato de Prestação de Serviços</CardTitle>
              <CardDescription>Detalhes do contrato firmado entre você e a Marquiore Films</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-md bg-muted/50 h-96 overflow-y-auto text-sm">
                <h3 className="text-lg font-bold mb-4">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE FILMAGEM DE CASAMENTO</h3>

                <p className="mb-4">
                  Pelo presente instrumento particular, de um lado MARQUIORE FILMS, doravante denominada CONTRATADA, e
                  de outro lado JOÃO SILVA e MARIA OLIVEIRA, doravante denominados CONTRATANTES, têm entre si justo e
                  contratado o seguinte:
                </p>

                <h4 className="font-bold mt-6 mb-2">1. OBJETO DO CONTRATO</h4>
                <p>
                  1.1. O presente contrato tem como objeto a prestação de serviços de filmagem do evento de casamento
                  dos CONTRATANTES, a ser realizado no dia 15/03/2025, no Espaço Jardim das Flores, conforme
                  especificações do pacote Premium escolhido.
                </p>

                <h4 className="font-bold mt-6 mb-2">2. OBRIGAÇÕES DA CONTRATADA</h4>
                <p>2.1. Realizar a filmagem do evento conforme pacote contratado;</p>
                <p>2.2. Editar o material captado e entregar o produto final nos prazos estipulados;</p>
                <p>2.3. Disponibilizar prévias do material durante o processo de edição;</p>
                <p>2.4. Manter os CONTRATANTES informados sobre o andamento do trabalho.</p>

                <h4 className="font-bold mt-6 mb-2">3. OBRIGAÇÕES DOS CONTRATANTES</h4>
                <p>3.1. Fornecer todas as informações necessárias para a execução dos serviços;</p>
                <p>3.2. Efetuar os pagamentos conforme acordado;</p>
                <p>3.3. Colaborar com a CONTRATADA durante a execução dos serviços.</p>

                <h4 className="font-bold mt-6 mb-2">4. PRAZOS</h4>
                <p>4.1. O prazo para entrega do teaser é de até 30 dias após o evento;</p>
                <p>4.2. O prazo para entrega do vídeo completo é de até 90 dias após o evento.</p>

                <h4 className="font-bold mt-6 mb-2">5. VALOR E FORMA DE PAGAMENTO</h4>
                <p>5.1. O valor total dos serviços é de R$ 5.000,00 (cinco mil reais), referente ao pacote Premium;</p>
                <p>5.2. O pagamento será realizado da seguinte forma:</p>
                <p>a) Entrada de R$ 1.500,00 (mil e quinhentos reais) no ato da assinatura deste contrato;</p>
                <p>
                  b) 6 (seis) parcelas mensais de R$ 583,33 (quinhentos e oitenta e três reais e trinta e três
                  centavos).
                </p>

                <h4 className="font-bold mt-6 mb-2">6. DISPOSIÇÕES GERAIS</h4>
                <p>
                  6.1. A CONTRATADA poderá utilizar o material produzido para fins de divulgação de seu trabalho,
                  respeitando a privacidade dos CONTRATANTES;
                </p>
                <p>
                  6.2. Qualquer alteração neste contrato deverá ser feita por escrito e assinada por ambas as partes;
                </p>
                <p>
                  6.3. Os CONTRATANTES autorizam a captação, edição e divulgação de sua imagem para os fins previstos
                  neste contrato.
                </p>

                <h4 className="font-bold mt-6 mb-2">7. FORO</h4>
                <p>
                  7.1. As partes elegem o foro da comarca de São Paulo para dirimir quaisquer dúvidas oriundas do
                  presente contrato.
                </p>

                <p className="mt-8">
                  E, por estarem assim justos e contratados, assinam o presente instrumento em duas vias de igual teor e
                  forma.
                </p>

                <p className="mt-8">São Paulo, 10 de março de 2025.</p>

                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <p className="border-t border-black pt-2">CONTRATADA: Marquiore Films</p>
                  </div>
                  <div>
                    <p className="border-t border-black pt-2">CONTRATANTES: João Silva e Maria Oliveira</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Pendente de assinatura digital</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Baixar PDF
                  </Button>
                  <Button className="gap-2">
                    <FileText className="h-4 w-4" />
                    Assinar Digitalmente
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pagamentos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Pagamentos</CardTitle>
              <CardDescription>Acompanhe o status dos seus pagamentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <div className="grid grid-cols-12 gap-4 p-3 border-b font-medium text-sm">
                  <div className="col-span-1">#</div>
                  <div className="col-span-3">Descrição</div>
                  <div className="col-span-2">Valor</div>
                  <div className="col-span-2">Vencimento</div>
                  <div className="col-span-2">Pagamento</div>
                  <div className="col-span-2">Status</div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-3 border-b items-center text-sm">
                  <div className="col-span-1">1</div>
                  <div className="col-span-3">Entrada</div>
                  <div className="col-span-2">R$ 1.500,00</div>
                  <div className="col-span-2">10/03/2025</div>
                  <div className="col-span-2">10/03/2025</div>
                  <div className="col-span-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Pago</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-3 border-b items-center text-sm">
                  <div className="col-span-1">2</div>
                  <div className="col-span-3">Parcela 1/6</div>
                  <div className="col-span-2">R$ 583,33</div>
                  <div className="col-span-2">10/04/2025</div>
                  <div className="col-span-2">-</div>
                  <div className="col-span-2">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                      Pendente
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-3 border-b items-center text-sm">
                  <div className="col-span-1">3</div>
                  <div className="col-span-3">Parcela 2/6</div>
                  <div className="col-span-2">R$ 583,33</div>
                  <div className="col-span-2">10/05/2025</div>
                  <div className="col-span-2">-</div>
                  <div className="col-span-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      Futuro
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-3 border-b items-center text-sm">
                  <div className="col-span-1">4</div>
                  <div className="col-span-3">Parcela 3/6</div>
                  <div className="col-span-2">R$ 583,33</div>
                  <div className="col-span-2">10/06/2025</div>
                  <div className="col-span-2">-</div>
                  <div className="col-span-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      Futuro
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-3 border-b items-center text-sm">
                  <div className="col-span-1">5</div>
                  <div className="col-span-3">Parcela 4/6</div>
                  <div className="col-span-2">R$ 583,33</div>
                  <div className="col-span-2">10/07/2025</div>
                  <div className="col-span-2">-</div>
                  <div className="col-span-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      Futuro
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-3 border-b items-center text-sm">
                  <div className="col-span-1">6</div>
                  <div className="col-span-3">Parcela 5/6</div>
                  <div className="col-span-2">R$ 583,33</div>
                  <div className="col-span-2">10/08/2025</div>
                  <div className="col-span-2">-</div>
                  <div className="col-span-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      Futuro
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-3 items-center text-sm">
                  <div className="col-span-1">7</div>
                  <div className="col-span-3">Parcela 6/6</div>
                  <div className="col-span-2">R$ 583,33</div>
                  <div className="col-span-2">10/09/2025</div>
                  <div className="col-span-2">-</div>
                  <div className="col-span-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      Futuro
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 border rounded-md bg-muted/50">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Valor Total do Contrato:</span>
                  <span className="font-medium">R$ 5.000,00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Valor Pago:</span>
                  <span className="text-green-600 font-medium">R$ 1.500,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Valor Restante:</span>
                  <span className="font-medium">R$ 3.500,00</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Baixar Comprovantes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

