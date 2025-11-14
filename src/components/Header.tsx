import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo-aquaforte.png";

const menuItems = [
  { title: "Início", path: "/" },
  { title: "Sobre Nós", path: "/sobre" },
  { title: "Serviços", path: "/servicos" },
  { title: "Blog", path: "/blog" },
  { title: "Contacte-nos", path: "/contacto" },
  { title: "Formulário", path: "/formulario" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsMenuOpen(false);
    toast({
      title: "Sessão terminada",
      description: "Até breve!",
    });
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Aquaforte Logo" className="h-12 md:h-16" />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <Button
                      variant={isActive(item.path) ? "default" : "ghost"}
                      className="font-medium"
                    >
                      {item.title}
                    </Button>
                  </Link>
                </li>
              ))}
              {currentUser ? (
                <li className="flex items-center gap-2 ml-2">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {currentUser.name}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="gap-1"
                  >
                    <LogOut className="h-4 w-4" />
                    Sair
                  </Button>
                </li>
              ) : (
                <li>
                  <Link to="/auth">
                    <Button variant="default" className="font-medium">
                      Entrar
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t mt-2 pt-4 fade-in">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant={isActive(item.path) ? "default" : "ghost"}
                      className="w-full justify-start font-medium"
                    >
                      {item.title}
                    </Button>
                  </Link>
                </li>
              ))}
              {currentUser ? (
                <>
                  <li className="px-4 py-2 text-sm text-muted-foreground flex items-center gap-2 border-t mt-2 pt-4">
                    <User className="h-4 w-4" />
                    {currentUser.name}
                  </li>
                  <li>
                    <Button
                      variant="outline"
                      onClick={handleLogout}
                      className="w-full justify-start font-medium gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </Button>
                  </li>
                </>
              ) : (
                <li className="border-t mt-2 pt-2">
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="default" className="w-full justify-start font-medium">
                      Entrar
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
