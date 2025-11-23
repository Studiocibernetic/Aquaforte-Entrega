import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-aquaforte.png";

const menuItems = [
  { title: "Início", path: "/" },
  { title: "Sobre Nós", path: "/sobre" },
  { title: "Serviços", path: "/servicos" },
  { title: "Blog", path: "/blog" },
  { title: "Contacto", path: "/contacto" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="Aquaforte" className="h-16 brightness-0 invert" />
            <p className="text-sm opacity-90">
              O canalizador de confiança de Lisboa. Serviços rápidos e profissionais há mais de 15 anos.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contactos</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                </div>
                <span className="pt-1 text-sm">Tv. Salão 3, 1685-360 Caneças, Portugal</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Phone className="h-5 w-5 text-accent" strokeWidth={2.5} />
                </div>
                <a href="tel:+351966931357" className="hover:text-accent transition-colors text-sm pt-1">
                  +351 966 931 357
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Mail className="h-5 w-5 text-accent" strokeWidth={2.5} />
                </div>
                <a
                  href="mailto:comercialaquaforte1@gmail.com"
                  className="hover:text-accent transition-colors text-sm pt-1"
                >
                  comercialaquaforte1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/aqua.fortept?igsh=bnBpenNjZXVkc3Br"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white" strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/share/1A6XeQZo5a/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-white" strokeWidth={2} />
              </a>
              <a
                href="https://wa.me/351966931357"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6 text-white" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2025 Aquaforte - Todos os direitos reservados</p>
          <div className="flex gap-4">
            <Link to="/privacidade" className="hover:underline">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:underline">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};