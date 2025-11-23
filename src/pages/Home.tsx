import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplets,
  Wrench,
  Clock,
  Shield,
  ThumbsUp,
  Star,
  Phone,
} from "lucide-react";
import heroImage from "@/assets/hero-plumber-system.jpg";
import plumberWork from "@/assets/plumber-work.jpg";
import bathroomReno from "@/assets/bathroom-renovation.jpg";

const services = [
  {
    icon: Droplets,
    title: "Deteção de Fugas",
    description: "Encontramos e reparamos fugas antes que causem danos graves",
  },
  {
    icon: Wrench,
    title: "Desentupimentos",
    description: "Soluções rápidas para ralos e canos entupidos",
  },
  {
    icon: Shield,
    title: "Reparações",
    description: "Reparações gerais em sistemas de água e esgotos",
  },
];

const features = [
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Emergências podem acontecer a qualquer hora",
  },
  {
    icon: Shield,
    title: "Garantia de Qualidade",
    description: "Todos os serviços com garantia de satisfação",
  },
  {
    icon: ThumbsUp,
    title: "Profissionais Certificados",
    description: "Equipa experiente e qualificada",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "Serviço excelente! Resolveram a minha fuga de água em minutos. Muito profissionais.",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Recomendo vivamente. Preços justos e trabalho de qualidade superior.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    text: "Remodelaram a minha casa de banho de forma impecável. Adorei o resultado!",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 slide-up">
            O Canalizador de Confiança de Lisboa
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 slide-up">
            Soluções rápidas e profissionais para todos os seus problemas de canalização
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Link to="/contacto">
              <Button size="lg" variant="cta" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Contacte-nos Agora
              </Button>
            </Link>
            <Link to="/servicos">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Ver Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Os Nossos Serviços Principais
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Oferecemos uma vasta gama de serviços de canalização para residências e empresas em Lisboa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in group border-2 hover:border-primary/50"
              >
                <CardContent className="pt-6 text-center">
                  <div className="bg-gradient-to-br from-primary to-primary/70 rounded-2xl w-20 h-20 flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/servicos">
              <Button size="lg">Ver Todos os Serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Porquê Escolher a Aquaforte?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Com mais de 15 anos de experiência em Lisboa, somos a escolha de confiança
                para milhares de clientes satisfeitos. A nossa missão é fornecer serviços
                de canalização de excelência com transparência e profissionalismo.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="bg-gradient-to-br from-primary to-primary/70 rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={plumberWork}
                alt="Canalizador profissional a trabalhar"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src={bathroomReno}
                alt="Remodelação de casa de banho"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A satisfação dos nossos clientes é a nossa maior recompensa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="fade-in">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de um Canalizador Urgente?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contacte-nos agora e receba uma resposta rápida da nossa equipa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+351966931357">
              <Button size="lg" variant="cta" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                +351 966 931 357
              </Button>
            </a>
            <Link to="/formulario">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Pedir Orçamento Grátis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
