import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";
import teamOffice from "@/assets/team-office.jpg";

const values = [
  {
    icon: Award,
    title: "Qualidade Superior",
    description:
      "Utilizamos apenas materiais de primeira qualidade e as melhores práticas da indústria em todos os nossos serviços.",
  },
  {
    icon: Users,
    title: "Equipa Experiente",
    description:
      "A nossa equipa é composta por canalizadores certificados com anos de experiência e formação contínua.",
  },
  {
    icon: Clock,
    title: "Rapidez e Eficiência",
    description:
      "Compreendemos a urgência dos problemas de canalização e respondemos rapidamente a todas as chamadas.",
  },
  {
    icon: Target,
    title: "Transparência",
    description:
      "Preços justos e transparentes, sem custos ocultos. Orçamentos gratuitos antes de qualquer trabalho.",
  },
];

const milestones = [
  { year: "2010", title: "Fundação", description: "A Aquaforte é fundada em Lisboa" },
  {
    year: "2013",
    title: "Expansão",
    description: "Expandimos a equipa para atender toda a região metropolitana",
  },
  {
    year: "2018",
    title: "Certificação",
    description: "Obtemos certificações de qualidade e sustentabilidade",
  },
  {
    year: "2025",
    title: "Hoje",
    description: "Mais de 5000 clientes satisfeitos e crescendo",
  },
];

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
              Sobre a Aquaforte
            </h1>
            <p className="text-xl opacity-95 slide-up">
              Há mais de 15 anos a servir Lisboa com excelência, confiança e profissionalismo
              em todos os serviços de canalização.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Nossa História</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A Aquaforte nasceu em 2010 com uma missão clara: fornecer serviços de
                  canalização de excelência a preços justos para todos os residentes e
                  empresas de Lisboa. Começámos como uma pequena equipa de dois canalizadores
                  apaixonados pelo seu trabalho.
                </p>
                <p>
                  Ao longo dos anos, crescemos graças à confiança dos nossos clientes e ao
                  compromisso inabalável com a qualidade. Hoje, somos uma das empresas de
                  canalização mais respeitadas de Lisboa, com uma equipa de profissionais
                  altamente qualificados.
                </p>
                <p>
                  O nosso foco continua o mesmo: resolver os problemas de canalização dos
                  nossos clientes de forma rápida, eficiente e com total transparência. Cada
                  cliente é único e merece um serviço personalizado e atencioso.
                </p>
                <p>
                  Investimos continuamente na formação da nossa equipa e nas tecnologias mais
                  avançadas para deteção e reparação de problemas de canalização, garantindo
                  sempre os melhores resultados.
                </p>
              </div>
            </div>

            <div>
              <img
                src={teamOffice}
                alt="Equipa Aquaforte no escritório"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Os Nossos Valores
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estes são os pilares que guiam o nosso trabalho diário e as nossas relações com
            os clientes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="fade-in hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-2 hover:border-primary/50">
                <CardContent className="pt-6 text-center">
                  <div className="bg-gradient-to-br from-primary to-primary/70 rounded-2xl w-20 h-20 flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <value.icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            A Nossa Jornada
          </h2>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 fade-in">
                <div className="flex-shrink-0 w-24">
                  <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Nossa Missão</h2>
            <p className="text-xl opacity-95 mb-8">
              Fornecer soluções de canalização de excelência que protejam as casas e
              empresas dos nossos clientes, garantindo água limpa, sistemas seguros e total
              paz de espírito. Comprometemo-nos a ser sempre honestos, profissionais e a
              estar disponíveis quando os nossos clientes mais precisam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-lg opacity-90">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Disponibilidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
