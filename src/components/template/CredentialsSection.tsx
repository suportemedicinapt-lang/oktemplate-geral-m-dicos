import { GraduationCap, Award, BookOpen, Building } from "lucide-react";

const CredentialsSection = () => {
  const education = [
    {
      year: "[Ano]",
      title: "[Graduação em Medicina]",
      institution: "[Nome da Universidade]",
      type: "graduation",
    },
    {
      year: "[Ano]",
      title: "[Residência em Cirurgia Geral]",
      institution: "[Nome do Hospital/Instituição]",
      type: "residency",
    },
    {
      year: "[Ano]",
      title: "[Especialização/Fellowship]",
      institution: "[Nome da Instituição]",
      type: "specialization",
    },
    {
      year: "[Ano]",
      title: "[Mestrado/Doutorado - se aplicável]",
      institution: "[Nome da Universidade]",
      type: "postgrad",
    },
  ];

  const certifications = [
    {
      title: "[Título de Especialista]",
      issuer: "[Sociedade/Conselho]",
      icon: Award,
    },
    {
      title: "[Certificação]",
      issuer: "[Instituição]",
      icon: BookOpen,
    },
    {
      title: "[Membro de Sociedade]",
      issuer: "[Nome da Sociedade]",
      icon: Building,
    },
  ];

  return (
    <section id="formacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Formação
          </span>
          <h2 className="section-title">
            Qualificações e <span className="text-accent">Experiência</span>
          </h2>
          <p className="section-subtitle mx-auto">
            [Escreva uma breve introdução sobre sua jornada acadêmica e profissional]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold text-foreground flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Formação Acadêmica
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                    
                    <div className="bg-card p-6 rounded-2xl shadow-card">
                      <span className="text-accent font-semibold text-sm">
                        {item.year}
                      </span>
                      <h4 className="font-display text-lg font-semibold text-foreground mt-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold text-foreground flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Certificações e Títulos
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Box */}
            <div className="p-8 bg-primary rounded-2xl text-primary-foreground">
              <h4 className="font-display text-xl font-semibold mb-4">
                [Destaque Especial]
              </h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                [Escreva algo especial sobre sua carreira: um prêmio importante, uma técnica que você domina, publicações científicas, ou qualquer diferencial relevante]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
