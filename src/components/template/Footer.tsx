import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">
                  [I]
                </span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold">
                  Dr. [Seu Nome]
                </span>
                <p className="text-sm text-primary-foreground/70">[Sua Especialidade]</p>
              </div>
            </div>
          </div>

          {/* CRM Info */}
          <div className="text-center">
            <p className="text-primary-foreground/80">
              CRM [Seu Número] - [Seu Estado]
            </p>
            <p className="text-sm text-primary-foreground/60">
              [RQE se aplicável]
            </p>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Dr. [Seu Nome]
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center justify-end gap-1">
              Feito com <Heart className="w-4 h-4 text-accent" /> para seus pacientes
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/50 max-w-3xl mx-auto">
            [Adicione aqui qualquer aviso legal necessário, como: "As informações contidas neste site têm caráter informativo e não substituem uma consulta médica. Agende uma consulta para avaliação personalizada."]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
