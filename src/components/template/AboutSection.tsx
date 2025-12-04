import { GraduationCap, Heart, Shield, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "[Descreva como você oferece um atendimento humanizado e acolhedor aos seus pacientes]",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "[Descreva seu compromisso com a segurança e as melhores práticas médicas]",
    },
    {
      icon: GraduationCap,
      title: "Atualização Constante",
      description: "[Descreva como você se mantém atualizado com as últimas técnicas e tecnologias]",
    },
    {
      icon: Users,
      title: "Relação Médico-Paciente",
      description: "[Descreva a importância que você dá à comunicação clara com seus pacientes]",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Sobre Mim
              </span>
              <h2 className="section-title">
                Conheça o Dr. <span className="text-accent">[Seu Nome]</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                [Escreva aqui o primeiro parágrafo sobre você. Conte sua história, como surgiu sua paixão pela medicina e pela cirurgia geral. Seja autêntico e mostre sua personalidade.]
              </p>
              <p>
                [No segundo parágrafo, fale sobre sua abordagem profissional, filosofia de trabalho e como você trata seus pacientes. Destaque o que te torna único.]
              </p>
              <p>
                [No terceiro parágrafo, mencione suas áreas de interesse, especializações adicionais ou procedimentos em que você tem mais expertise.]
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-secondary rounded-2xl">
                <p className="text-4xl font-display font-bold text-primary">[X]+</p>
                <p className="text-muted-foreground">Anos de Formação</p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl">
                <p className="text-4xl font-display font-bold text-primary">[X]+</p>
                <p className="text-muted-foreground">Cursos e Especializações</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
