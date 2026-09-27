import { whatsappLink, whatsappMensagemPadrao } from "@/lib/site-config";
import { WhatsappIcon } from "@/components/whatsapp-icon";

export function WhatsappFloatButton() {
  return (
    <a
      href={whatsappLink(whatsappMensagemPadrao)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 animate-pulse-whatsapp sm:bottom-6 sm:right-6"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
