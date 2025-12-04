import { 
  Stethoscope, 
  Activity, 
  Scissors, 
  Heart,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import surgeryRoom from "@/assets/surgery-room.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "[Nome do Procedimento 1]",
      description: "[Breve descrição do procedimento, indicações e benefícios para o paciente]",
    },
    {
      icon: Activity,
      title: "[Nome do Procedimento 2]",
      description: "[Breve descrição do procedimento, indicações e benefícios para o paciente]",
    },
    {
      icon: Stethoscope,
      title: "[Nome do Procedimento 3]",
      description: "[Breve descrição do procedimento, indicações e benefícios para o paciente]",
    },
    {
      icon: Heart,
      title: "[Nome do Procedimento 4]",
      description: "[Breve descrição do procedimento, indicações e benefícios para o paciente]",
    },
    {
      icon: Shield,
      title: "[Nome do Procedimento 5]",
      description: "[Breve descrição do procedimento, indicações e benefícios para o paciente]",
    },
    {
      icon: Clock,
      title: "[Nome do Procedimento 6]",
      description: "[Breve descrição do procedimento, indicações e benefícios para o paciente]",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="section-title">
            Procedimentos e <span className="text-accent">Especialidades</span>
          </h2>
          <p className="section-subtitle mx-auto">
            [Escreva uma introdução sobre os serviços que você oferece e sua abordagem para cada tipo de procedimento]
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={surgeryRoom}
            alt="Centro cirúrgico moderno"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-xl space-y-6">
                <h3 className="font-display text-3xl font-bold text-primary-foreground">
                  [Sua Frase de Impacto Aqui]
                </h3>
                <p className="text-primary-foreground/80">
                  [Escreva uma mensagem convincente sobre por que o paciente deve escolher você. Destaque diferenciais como tecnologia, técnicas minimamente invasivas, etc.]
                </p>
                <Button variant="hero" size="lg">
                  Agende sua Avaliação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
