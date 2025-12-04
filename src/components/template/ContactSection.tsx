import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "[Seu Telefone]",
      action: "tel:[seu-telefone]",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "[Seu WhatsApp]",
      action: "https://wa.me/[seu-numero]",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "[seu@email.com]",
      action: "mailto:[seu@email.com]",
    },
  ];

  const workingHours = [
    { day: "Segunda a Sexta", hours: "[Horário de atendimento]" },
    { day: "Sábado", hours: "[Horário ou 'Fechado']" },
    { day: "Domingo", hours: "Fechado" },
  ];

  return (
    <section id="contato" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="section-title">
            Agende sua <span className="text-accent">Consulta</span>
          </h2>
          <p className="section-subtitle mx-auto">
            [Escreva uma mensagem convidativa para que os pacientes entrem em contato com você]
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {/* Contact Methods */}
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.action}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground text-lg">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Address */}
            <div className="sm:col-span-2 p-6 bg-card rounded-2xl shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="font-semibold text-foreground text-lg">
                    [Nome do Consultório/Clínica]
                  </p>
                  <p className="text-muted-foreground">
                    [Rua, Número - Bairro]
                  </p>
                  <p className="text-muted-foreground">
                    [Cidade - Estado, CEP]
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="sm:col-span-2 h-64 bg-muted rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-primary/5">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    [Incorpore aqui o mapa do Google Maps]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Substitua este bloco pelo iframe do seu endereço
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Working Hours */}
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Horários
                </h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="[seu-link-instagram]"
                  className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-accent" />
                </a>
                <a
                  href="[seu-link-facebook]"
                  className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-accent" />
                </a>
                <a
                  href="https://wa.me/[seu-numero]"
                  className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 text-accent" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
              <h3 className="font-display text-xl font-semibold mb-4">
                Agende Agora
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                [Escreva uma chamada para ação convincente]
              </p>
              <Button variant="hero" className="w-full" size="lg">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
