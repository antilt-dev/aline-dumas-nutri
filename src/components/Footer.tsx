import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      {/* Location + Map */}
      <div className="px-4 py-12 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-xl font-semibold text-background">
                Atendimento presencial
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p>Av. Carneiro Leão, 563 - Zona 01, Maringá - PR, 87014-010</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p>Seg a Sex, 08h às 18h</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 lg:h-64">
              <iframe
                title="Localização do consultório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5!2d-51.9386!3d-23.4205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0b4b5a7c1d1%3A0x1!2sAv.%20Carneiro%20Le%C3%A3o%2C%20563%20-%20Zona%2001%2C%20Maring%C3%A1%20-%20PR%2C%2087014-010!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 px-4 py-8">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-semibold text-background">Aline Dumas</p>
            <p className="text-sm mt-1">Nutricionista</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5544991475583"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/alinedumasnutri/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl mt-6 text-center text-xs">
          © {new Date().getFullYear()} Aline Dumas Nutricionista. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;