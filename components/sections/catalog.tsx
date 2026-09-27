"use client";

import { useMemo, useState } from "react";
import { MudaCard } from "@/components/muda-card";
import { FadeIn } from "@/components/fade-in";
import { mudas, categoriaLabel, type MudaCategoria } from "@/data/mudas";

const filtros: { label: string; value: MudaCategoria | "todas" }[] = [
  { label: "Ver todas", value: "todas" },
  { label: categoriaLabel.frutifera, value: "frutifera" },
  { label: categoriaLabel.nativa, value: "nativa" },
  { label: categoriaLabel.flor, value: "flor" },
  { label: categoriaLabel.diversa, value: "diversa" },
];

export function Catalog() {
  const [filtro, setFiltro] = useState<MudaCategoria | "todas">("todas");

  const mudasFiltradas = useMemo(() => {
    if (filtro === "todas") return mudas;
    return mudas.filter((muda) => muda.categoria === filtro);
  }, [filtro]);

  return (
    <section id="catalogo" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-leaf-600">
            Nosso Catálogo
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-leaf-900 sm:text-4xl">
            Mudas prontas para dar vida ao seu espaço
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção de frutíferas, nativas, flores e plantas diversas,
            cultivadas com cuidado aqui em Ipê.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2">
          {filtros.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFiltro(item.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filtro === item.value
                  ? "bg-leaf-600 text-white shadow-md"
                  : "bg-white text-leaf-800 ring-1 ring-leaf-600/20 hover:bg-leaf-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </FadeIn>

        <div className="mt-10 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mudasFiltradas.map((muda, i) => (
            <FadeIn key={muda.slug} delay={(i % 4) * 0.08}>
              <MudaCard muda={muda} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:hidden">
          {mudasFiltradas.map((muda) => (
            <div key={muda.slug} className="w-[62vw] shrink-0">
              <MudaCard muda={muda} />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Catálogo em constante renovação — consulte disponibilidade e outras
          variedades pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
