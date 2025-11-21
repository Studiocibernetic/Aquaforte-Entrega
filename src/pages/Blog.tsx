import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Star, Upload, User, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import winterPipes from "@/assets/blog-winter-pipes.jpg";
import cloggedDrain from "@/assets/blog-clogged-drain.jpg";
import luxuryBathroom from "@/assets/blog-luxury-bathroom.jpg";
import maintenance from "@/assets/blog-maintenance.jpg";
import waterSaving from "@/assets/blog-water-saving.jpg";
import emergencyCall from "@/assets/blog-emergency-call.jpg";

const blogPosts = [
  {
    title: "Proteja a Sua Casa: Como Evitar Canos Rebentados no Inverno",
    excerpt:
      "O inverno está a chegar e com ele o risco de danos caros. Saiba como os nossos especialistas podem proteger as suas canalizações antes que seja tarde demais. Não espere pelo desastre - agende já a sua inspeção preventiva!",
    date: "15 de Janeiro, 2025",
    readTime: "5 min",
    category: "Urgente",
    image: winterPipes,
  },
  {
    title: "Entupimentos: O Pesadelo Que Pode Custar-lhe Milhares",
    excerpt:
      "Um entupimento ignorado pode transformar-se numa catástrofe cara. Descubra os sinais de alerta e porque contratar a Aquaforte hoje pode poupar-lhe uma fortuna amanhã. Não deixe um pequeno problema tornar-se numa emergência!",
    date: "8 de Janeiro, 2025",
    readTime: "6 min",
    category: "Emergência",
    image: cloggedDrain,
  },
  {
    title: "Transforme a Sua Casa de Banho Num Oásis de Luxo",
    excerpt:
      "Imagine acordar todos os dias numa casa de banho de revista. A Aquaforte transforma sonhos em realidade com remodelações profissionais que valorizam o seu imóvel. Peça já o seu orçamento gratuito e veja a diferença!",
    date: "2 de Janeiro, 2025",
    readTime: "8 min",
    category: "Remodelação",
    image: luxuryBathroom,
  },
  {
    title: "Poupe Milhares com Manutenção Preventiva - Vale Cada Cêntimo",
    excerpt:
      "Uma inspeção anual pode evitar reparações de emergência que custam 10x mais. Os nossos clientes poupam em média €2.500 por ano. Não seja o próximo a aprender da maneira difícil - contacte-nos e proteja o seu investimento!",
    date: "20 de Dezembro, 2024",
    readTime: "7 min",
    category: "Economia",
    image: maintenance,
  },
  {
    title: "Reduza a Sua Conta de Água em 40% - Garantido!",
    excerpt:
      "Imagine pagar 40% menos todos os meses. Com as soluções inteligentes da Aquaforte, os nossos clientes veem retorno do investimento em menos de um ano. Descubra como pode começar a poupar hoje mesmo!",
    date: "12 de Dezembro, 2024",
    readTime: "6 min",
    category: "Poupança",
    image: waterSaving,
  },
  {
    title: "Emergência às 3 da Manhã? Nós Estamos Cá Para Si!",
    excerpt:
      "Quando um cano rebenta às 3 da manhã, cada minuto conta. Saiba porque milhares de famílias em Lisboa confiam na Aquaforte para emergências 24/7. Guarde já o nosso contacto - nunca se sabe quando vai precisar!",
    date: "5 de Dezembro, 2024",
    readTime: "5 min",
    category: "Disponibilidade",
    image: emergencyCall,
  },
];

interface Review {
  id: string;
  userId: string;
  name: string;
  rating: number;
  comment: string;
  photo?: string;
  date: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

const Blog = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userCommentCount, setUserCommentCount] = useState(0);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);
      
      const storedReviews: Review[] = JSON.parse(localStorage.getItem("reviews") || "[]");
      setReviews(storedReviews);
      
      const userReviews = storedReviews.filter((r) => r.userId === parsedUser.id);
      setUserCommentCount(userReviews.length);
    } else {
      const storedReviews: Review[] = JSON.parse(localStorage.getItem("reviews") || "[]");
      setReviews(storedReviews);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentUser) {
      toast({
        title: "Login necessário",
        description: "Por favor, faça login para deixar um comentário.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    if (userCommentCount >= 3) {
      toast({
        title: "Limite atingido",
        description: "Você já fez 3 comentários. Obrigado pela sua participação!",
        variant: "destructive",
      });
      return;
    }
    
    if (!comment.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, escreva um comentário.",
        variant: "destructive",
      });
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      userId: currentUser.id,
      name: currentUser.name,
      rating,
      comment: comment.trim(),
      photo: photo || undefined,
      date: new Date().toLocaleDateString("pt-PT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    
    setUserCommentCount(userCommentCount + 1);
    setRating(5);
    setComment("");
    setPhoto(null);

    toast({
      title: "Avaliação publicada!",
      description: "Obrigado pelo seu feedback.",
    });
  };

  const handleDeleteReview = (reviewId: string, reviewUserId: string) => {
    // Check if user is authorized to delete (admin or owner)
    if (!currentUser) return;
    
    const isOwner = currentUser.id === reviewUserId;
    const isAdmin = currentUser.isAdmin;
    
    if (!isOwner && !isAdmin) return;

    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Update user comment count if user deleted their own review
    if (isOwner && !isAdmin) {
      setUserCommentCount(userCommentCount - 1);
    }

    toast({
      title: "Avaliação removida!",
      description: "A avaliação foi eliminada com sucesso.",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 slide-up">Blog Aquaforte</h1>
            <p className="text-xl opacity-95 slide-up">
              Dicas, guias e informações úteis sobre canalização, manutenção e remodelação
              da sua casa.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="fade-in overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Avaliações dos Nossos Clientes
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Partilhe a sua experiência com a Aquaforte e ajude outros clientes
            </p>

            {/* Review Form */}
            <Card className="mb-12 shadow-lg border-2">
              <CardContent className="pt-6">
                {!currentUser ? (
                  <Alert className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      É necessário fazer login para deixar um comentário.{" "}
                      <Button
                        variant="link"
                        className="p-0 h-auto font-semibold"
                        onClick={() => navigate("/auth")}
                      >
                        Clique aqui para entrar
                      </Button>
                    </AlertDescription>
                  </Alert>
                ) : userCommentCount >= 3 ? (
                  <Alert className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Você já atingiu o limite de 3 comentários. Obrigado pela sua participação!
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="mb-4 bg-blue-50 border-blue-200">
                    <User className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-900">
                      Comentários restantes: {3 - userCommentCount}
                    </AlertDescription>
                  </Alert>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="space-y-2">
                    <Label className="text-base font-semibold">
                      Classificação *
                    </Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment" className="text-base font-semibold">
                      A Sua Avaliação *
                    </Label>
                    <Textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Conte-nos sobre a sua experiência com os nossos serviços..."
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photo" className="text-base font-semibold">
                      Adicionar Foto (Opcional)
                    </Label>
                    <div className="flex items-center gap-4">
                      <label
                        htmlFor="photo"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors"
                      >
                        <Upload className="h-5 w-5" />
                        <span>Escolher Foto</span>
                      </label>
                      <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      {photo && (
                        <img
                          src={photo}
                          alt="Preview"
                          className="h-16 w-16 object-cover rounded-lg"
                        />
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full text-lg"
                    disabled={!currentUser || userCommentCount >= 3}
                  >
                    Publicar Avaliação
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Reviews Display */}
            {reviews.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Últimas Avaliações ({reviews.length})
                </h3>
                <div className="grid gap-6">
                  {reviews.map((review) => (
                    <Card key={review.id} className="fade-in shadow-md">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-lg">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                  {review.date}
                                </span>
                                {(currentUser && (currentUser.id === review.userId || currentUser.isAdmin)) && (
                                  <button
                                    onClick={() => handleDeleteReview(review.id, review.userId)}
                                    className="text-red-500 hover:text-red-700 transition-colors"
                                    aria-label="Eliminar avaliação"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-1 mb-3">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-5 w-5 ${
                                    star <= review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {review.comment}
                            </p>
                            {review.photo && (
                              <img
                                src={review.photo}
                                alt="Foto da avaliação"
                                className="mt-4 max-w-xs rounded-lg shadow-md"
                              />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
