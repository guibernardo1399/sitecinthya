import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '5591998401830';
  const whatsappMessage = 'Olá! Preciso de orientação jurídica.';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-button"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BD5A] transition-all hover:scale-110 active:scale-95 whatsapp-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;