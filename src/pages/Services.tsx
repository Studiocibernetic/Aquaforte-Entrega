import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplets,
  Wrench,
  Sparkles,
  Settings,
  AlertCircle,
  Hammer,
  Container,
  Waves,
  Drill,
  ShowerHead,
  Coffee,
  Home,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Deteção e Reparação de Fugas",
    description:
      "Encontramos e reparamos fugas de água antes que causem danos graves à sua propriedade. Utilizamos equipamento de deteção avançado para localizar fugas ocultas em paredes, pisos e tectos, poupando-lhe tempo e dinheiro em reparações futuras.",
    benefits: [
      "Deteção sem destruição",
      "Equipamento de última geração",
      "Reparação rápida e eficaz",
    ],
  },
  {
    icon: Wrench,
    title: "Desentupimento Rápido",
    description:
      "Soluções rápidas e eficazes para ralos e canos entupidos, sem sujidade extra. Utilizamos técnicas profissionais e equipamento especializado para desentupir qualquer tipo de canalização, desde pias de cozinha a esgotos principais.",
    benefits: [
      "Serviço rápido 24/7",
      "Sem produtos químicos agressivos",
      "Limpeza completa do local",
    ],
  },
  {
    icon: Sparkles,
    title: "Remodelação de Casas de Banho",
    description:
      "Transforme a sua casa de banho com instalações de canalização especializadas e modernas. Da substituição de torneiras à instalação completa de sistemas de água quente, criamos casas de banho funcionais e elegantes que valorizam a sua casa.",
    benefits: [
      "Design personalizado",
      "Materiais de qualidade premium",
      "Trabalho certificado",
    ],
  },
  {
    icon: Settings,
    title: "Reparação de Canalizações",
    description:
      "Reparações gerais em sistemas de água e esgotos. Lidamos com qualquer problema de canalização, desde pequenas fugas até substituições completas de tubagens antigas, sempre com garantia de qualidade.",
    benefits: [
      "Diagnóstico gratuito",
      "Reparações duradouras",
      "Garantia em todos os trabalhos",
    ],
  },
  {
    icon: AlertCircle,
    title: "Ralos Entupidos",
    description:
      "Limpeza profissional de ralos em cozinhas e casas de banho. Removemos gorduras, cabelos e outros resíduos que causam entupimentos recorrentes, prevenindo problemas futuros.",
    benefits: [
      "Limpeza profunda",
      "Prevenção de mau cheiro",
      "Serviço preventivo disponível",
    ],
  },
  {
    icon: Hammer,
    title: "Canalização de Torneiras",
    description:
      "Instalação e reparação de torneiras e misturadoras. Desde torneiras com gotejamento até instalações completas de torneiras modernas com economizadores de água.",
    benefits: [
      "Vasta seleção de modelos",
      "Instalação profissional",
      "Aconselhamento gratuito",
    ],
  },
  {
    icon: Waves,
    title: "Canos Rebentados",
    description:
      "Reparação urgente de canos danificados para evitar inundações. Intervenção imediata em emergências 24 horas por dia, 7 dias por semana, para minimizar danos à sua propriedade.",
    benefits: [
      "Resposta imediata",
      "Disponível 24/7",
      "Controlo de danos",
    ],
  },
  {
    icon: Drill,
    title: "Serviços de Instalação de Esgotos",
    description:
      "Sistemas de esgotos novos ou atualizados. Instalamos e modernizamos sistemas de esgotos completos, cumprindo todas as normas e regulamentos locais.",
    benefits: [
      "Conformidade legal",
      "Sistemas modernos",
      "Inspeção incluída",
    ],
  },
  {
    icon: Container,
    title: "Instalação de Fossas",
    description:
      "Soluções para fossas sépticas em propriedades rurais ou urbanas. Instalação, manutenção e reparação de fossas sépticas, garantindo o tratamento adequado de águas residuais.",
    benefits: [
      "Instalação certificada",
      "Manutenção preventiva",
      "Sistemas ecológicos",
    ],
  },
  {
    icon: ShowerHead,
    title: "Instalação de Chuveiros",
    description:
      "Instalação e reparação de chuveiros, incluindo sistemas de duche modernos com controlos termostáticos e economizadores de água.",
    benefits: [
      "Sistemas economizadores",
      "Pressão de água otimizada",
      "Instalação segura",
    ],
  },
  {
    icon: Coffee,
    title: "Canalização de Cozinha",
    description:
      "Serviços especializados para cozinhas, incluindo instalação de máquinas de lavar louça, torneiras de água filtrada e sistemas de esgotos para pias duplas.",
    benefits: [
      "Especialização em cozinhas",
      "Instalação de eletrodomésticos",
      "Sistemas de água filtrada",
    ],
  },
  {
    icon: Home,
    title: "Manutenção Preventiva",
    description:
      "Programas de manutenção regular para prevenir problemas de canalização. Inspeções periódicas e manutenção preventiva que poupam dinheiro a longo prazo.",
    benefits: [
      "Planos personalizados",
      "Preços vantajosos",
      "Tranquilidade garantida",
    ],
  },
];

const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
              Os Nossos Serviços
            </h1>
            <p className="text-xl opacity-95 slide-up">
              Soluções completas de canalização para todas as suas necessidades, disponíveis
              24 horas por dia, 7 dias por semana.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="fade-in hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/formulario">
                    <Button variant="cta" className="w-full">
                      Solicitar Orçamento
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não Encontrou o Serviço que Procura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Oferecemos uma vasta gama de serviços de canalização. Contacte-nos para
              discutir as suas necessidades específicas e receber um orçamento personalizado
              e gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg">Contacte-nos</Button>
              </Link>
              <a href="tel:+351966931401">
                <Button size="lg" variant="outline">
                  Ligue Agora: +351 966 931 401
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
