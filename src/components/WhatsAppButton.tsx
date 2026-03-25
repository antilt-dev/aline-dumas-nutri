import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5544991475583"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg animate-pulse-whatsapp hover:scale-110 transition-transform duration-200"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-background" />
    </a>
  );
};

export default WhatsAppButton;
