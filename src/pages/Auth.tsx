import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, LogIn, UserPlus } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      navigate("/blog");
    }
  }, [navigate]);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Erro",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (users.find((u) => u.email === email)) {
      toast({
        title: "Erro",
        description: "Este email já está registado.",
        variant: "destructive",
      });
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    toast({
      title: "Conta criada!",
      description: "Bem-vindo à Aquaforte!",
    });

    navigate("/blog");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Check for admin credentials
    if (email === "misaeljuniorrodriguesdossantos@gmail.com" && password === "aqua@forte") {
      const adminUser: User = {
        id: "admin",
        name: "Administrador",
        email: "misaeljuniorrodriguesdossantos@gmail.com",
        password: "aqua@forte",
        isAdmin: true
      };
      
      localStorage.setItem("currentUser", JSON.stringify(adminUser));
      
      toast({
        title: "Login bem-sucedido!",
        description: "Bem-vindo, Administrador!",
      });
      
      navigate("/blog");
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      toast({
        title: "Erro",
        description: "Email ou senha incorretos.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    toast({
      title: "Login bem-sucedido!",
      description: `Bem-vindo de volta, ${user.name}!`,
    });

    navigate("/blog");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 slide-up">
              {isLogin ? "Entrar na Conta" : "Criar Conta"}
            </h1>
            <p className="text-xl opacity-95 slide-up">
              {isLogin
                ? "Aceda à sua conta para deixar comentários"
                : "Junte-se à comunidade Aquaforte"}
            </p>
          </div>
        </div>
      </section>

      <section className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-2">
              <CardContent className="pt-6">
                <Tabs
                  value={isLogin ? "login" : "signup"}
                  onValueChange={(value) => setIsLogin(value === "login")}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login" className="gap-2">
                      <LogIn className="h-4 w-4" />
                      Entrar
                    </TabsTrigger>
                    <TabsTrigger value="signup" className="gap-2">
                      <UserPlus className="h-4 w-4" />
                      Registar
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="login-email" className="text-base font-semibold">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="login-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password" className="text-base font-semibold">
                          Senha
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="login-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" variant="cta" size="lg" className="w-full text-lg">
                        <LogIn className="mr-2 h-5 w-5" />
                        Entrar
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="signup">
                    <form onSubmit={handleSignup} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name" className="text-base font-semibold">
                          Nome
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="signup-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="João Silva"
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-base font-semibold">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="signup-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-base font-semibold">
                          Senha
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="signup-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mínimo 6 caracteres"
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" variant="cta" size="lg" className="w-full text-lg">
                        <UserPlus className="mr-2 h-5 w-5" />
                        Criar Conta
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
