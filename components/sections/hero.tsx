import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { whatsappLink, whatsappMensagemPadrao } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-leaf-900 via-leaf-800 to-leaf-600 pt-24 pb-16"
    >
      <div className="absolute inset-0">
        <Image
          src="/mudas/manaca-da-serra.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-900 via-leaf-900/70 to-leaf-800/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:px-6">
        <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-leaf-50 ring-1 ring-white/20">
          Ipê · RS
        </span>

        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          Traga a natureza para o seu quintal, jardim ou pomar
        </h1>

        <p className="max-w-xl text-lg text-leaf-50/90 sm:text-xl">
          Mudas <strong className="text-white">frutíferas</strong>,{" "}
          <strong className="text-white">nativas</strong>,{" "}
          <strong className="text-white">flores</strong> e uma seleção
          diversa de plantas para transformar seu espaço com qualidade e
          cuidado, direto de Ipê.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-white px-8 text-base font-semibold text-leaf-800 shadow-lg hover:bg-leaf-50"
            render={<a href="#catalogo">Ver Catálogo</a>}
          />
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/15 hover:text-white"
            render={
              <a
                href={whatsappLink(whatsappMensagemPadrao)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <WhatsappIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            }
          />
        </div>
      </div>

      <a
        href="#catalogo"
        aria-label="Rolar para o catálogo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/80"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
