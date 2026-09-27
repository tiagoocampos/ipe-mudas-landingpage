"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import type { Muda } from "@/data/mudas";
import { categoriaLabel } from "@/data/mudas";
import { whatsappLink, whatsappMensagemMuda } from "@/lib/site-config";

export function MudaCard({ muda }: { muda: Muda }) {
  const [open, setOpen] = useState(false);
  const link = whatsappLink(whatsappMensagemMuda(muda.nome));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-cream-50 text-left shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={muda.imagem}
            alt={`Muda de ${muda.nome}`}
            fill
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 75vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 transition-opacity group-hover:opacity-95" />
          <span className="absolute right-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-leaf-800">
            {categoriaLabel[muda.categoria]}
          </span>
          <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-leaf-800 opacity-0 transition-opacity group-hover:opacity-100">
            <Expand className="h-4 w-4" />
          </span>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="font-heading text-lg font-semibold text-white drop-shadow-sm">
              {muda.nome}
            </h3>
          </div>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md overflow-hidden p-0 sm:max-w-lg">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={muda.imagem}
              alt={`Muda de ${muda.nome}`}
              fill
              sizes="(min-width: 640px) 32rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-3 p-5">
            <DialogHeader className="space-y-1 text-left">
              <DialogTitle className="font-heading text-2xl text-leaf-900">
                {muda.nome}
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Consulte disponibilidade, tamanho e preço da muda de{" "}
              {muda.nome} diretamente com a gente pelo WhatsApp.
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-leaf-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-leaf-700"
            >
              <WhatsappIcon className="h-4 w-4" />
              Perguntar sobre esta muda
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
