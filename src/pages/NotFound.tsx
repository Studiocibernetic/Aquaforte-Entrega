import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 slide-up">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 slide-up">Página Não Encontrada</h2>
            <p className="text-xl mb-8 opacity-95 slide-up">
              Desculpe, a página que procura não existe ou foi movida.
            </p>
            <div className="slide-up">
              <Link to="/">
                <Button size="lg" variant="cta" className="text-lg px-8">
                  Voltar para o Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
