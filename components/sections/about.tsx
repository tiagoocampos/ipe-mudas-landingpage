import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

export function About() {
  return (
    <section id="sobre" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-leaf-600">
            Sobre a Ipê Mudas
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-leaf-900 sm:text-4xl">
            Cada muda carrega um pedacinho da nossa Serra Gaúcha
          </h2>
          <p className="mt-5 text-muted-foreground">
            A Ipê Mudas nasceu do amor pela terra e pela vontade de aproximar
            as pessoas da natureza. Em Ipê, cultivamos e
            selecionamos mudas frutíferas, nativas, flores e plantas diversas
            com o mesmo cuidado de quem planta para a própria família.
          </p>
          <p className="mt-4 text-muted-foreground">
            Acreditamos que plantar é um gesto de cuidado — com o meio
            ambiente, com as próximas gerações e com o espaço em que vivemos.
            Por isso, cada muda que sai daqui carrega qualidade, sustentabilidade
            e a certeza de que vai florescer no seu novo lar.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 lg:max-w-none">
            <Image
              src="/mudas/mirtilo.jpeg"
              alt="Muda de mirtilo cultivada pela Ipê Mudas"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-2xl bg-earth-600 sm:block" />
        </FadeIn>
      </div>
    </section>
  );
}
