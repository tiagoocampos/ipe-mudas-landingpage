import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { FadeIn } from "@/components/fade-in";
import { whatsappLink, whatsappMensagemPadrao } from "@/lib/site-config";

export function Cta() {
  return (
    <section className="bg-earth-700 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold text-cream-50 sm:text-4xl">
            Vamos deixar seu espaço mais verde?
          </h2>
          <p className="mt-4 text-cream-100/85">
            Fale com a gente agora pelo WhatsApp e descubra a muda perfeita
            para o seu jardim, quintal ou pomar.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-leaf-600 px-8 text-base font-semibold text-white shadow-lg hover:bg-leaf-500"
            render={
              <a
                href={whatsappLink(whatsappMensagemPadrao)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <WhatsappIcon className="h-5 w-5" />
                Falar no WhatsApp agora
              </a>
            }
          />
        </FadeIn>
      </div>
    </section>
  );
}
