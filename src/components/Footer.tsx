import { MessageCircle, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-semibold text-background">Aline Dumas</p>
            <p className="text-sm mt-1">Nutricionista | CRN 9-XXXX</p>
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
              href="https://instagram.com/alinedumas.nutri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <span className="flex items-center gap-1 text-sm">
              <MapPin className="w-4 h-4" />
              Maringá - PR
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 text-center text-xs">
          © {new Date().getFullYear()} Aline Dumas Nutricionista. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
