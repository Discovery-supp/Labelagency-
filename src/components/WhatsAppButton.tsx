import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '243998187951';
  const message = encodeURIComponent('Bonjour Label Agency, je souhaite en savoir plus sur vos solutions IA.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50 flex items-center gap-2 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden group-hover:inline-block text-sm font-medium whitespace-nowrap pr-1">
        Parlons sur WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
