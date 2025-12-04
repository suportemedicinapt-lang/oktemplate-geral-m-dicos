import { Button } from "@/components/ui/button";
import { Phone, Calendar, Award } from "lucide-react";
import doctorImage from "@/assets/doctor-placeholder.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Award className="w-4 h-4 text-accent" />
              <span>[Seus Anos de Experiência] anos de experiência</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Dr. <span className="text-accent">[Seu Nome Completo]</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/80 font-display">
              [Sua Especialidade Médica]
            </p>

            <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
              [Escreva aqui uma breve descrição sobre você, sua missão e como você pode ajudar seus pacientes. Destaque o que te diferencia dos outros profissionais.]
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
              <Button variant="hero-outline" size="xl">
                <Phone className="w-5 h-5" />
                [Seu Telefone]
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-accent">[X]+</p>
                <p className="text-sm text-primary-foreground/70">Cirurgias Realizadas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-accent">[X]+</p>
                <p className="text-sm text-primary-foreground/70">Pacientes Atendidos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-accent">[X]+</p>
                <p className="text-sm text-primary-foreground/70">Anos de Experiência</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-foreground/10 rounded-3xl transform -rotate-3" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={doctorImage}
                  alt="Dr. [Seu Nome] - Cirurgião Geral"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-elevated animate-scale-in animation-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">CRM [Seu Número]</p>
                    <p className="text-sm text-muted-foreground">[Seu Estado]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
