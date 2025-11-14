import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const Form = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    urgency: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Pedido enviado!",
      description:
        "Recebemos o seu pedido. Entraremos em contacto consigo brevemente com um orçamento.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      urgency: "",
      description: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
              Pedido de Orçamento
            </h1>
            <p className="text-xl opacity-95 slide-up">
              Preencha o formulário abaixo e receba um orçamento gratuito e sem compromisso
              em até 2 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Informações do Serviço</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Dados Pessoais</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="João Silva"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Telemóvel *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+351 966 931 401"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="joao@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-2">
                        Morada Completa
                      </label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Rua, número, andar, código postal, cidade"
                      />
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-bold text-lg">Detalhes do Serviço</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Tipo de Serviço *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fuga">Deteção de Fugas</SelectItem>
                            <SelectItem value="desentupimento">Desentupimento</SelectItem>
                            <SelectItem value="remodelacao">
                              Remodelação de Casa de Banho
                            </SelectItem>
                            <SelectItem value="reparacao">Reparação de Canalizações</SelectItem>
                            <SelectItem value="ralos">Ralos Entupidos</SelectItem>
                            <SelectItem value="torneiras">Canalização de Torneiras</SelectItem>
                            <SelectItem value="canos">Canos Rebentados</SelectItem>
                            <SelectItem value="esgotos">Instalação de Esgotos</SelectItem>
                            <SelectItem value="fossas">Instalação de Fossas</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium mb-2">
                          Grau de Urgência
                        </label>
                        <Select
                          value={formData.urgency}
                          onValueChange={(value) =>
                            setFormData({ ...formData, urgency: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a urgência" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergencia">
                              Emergência (imediato)
                            </SelectItem>
                            <SelectItem value="urgente">Urgente (24-48h)</SelectItem>
                            <SelectItem value="normal">Normal (3-7 dias)</SelectItem>
                            <SelectItem value="flexivel">
                              Flexível (quando possível)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">
                        Descrição do Problema
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descreva detalhadamente o problema ou serviço que necessita..."
                        rows={6}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Fotografias (opcional)
                      </label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Arraste ficheiros ou clique para enviar
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG até 10MB (máximo 5 fotos)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="border-t pt-6">
                    <Button type="submit" size="lg" className="w-full" variant="cta">
                      Enviar Pedido de Orçamento
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Responderemos em até 2 horas com um orçamento gratuito e sem compromisso
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="text-center fade-in">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Gratuito e Sem Compromisso</p>
                </CardContent>
              </Card>
              <Card className="text-center fade-in">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">2h</div>
                  <p className="text-sm text-muted-foreground">Tempo Médio de Resposta</p>
                </CardContent>
              </Card>
              <Card className="text-center fade-in">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Disponibilidade Total</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
