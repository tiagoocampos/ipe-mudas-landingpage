import { Leaf, HandHeart, MapPinned, Truck } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const diferenciais = [
  {
    icon: Leaf,
    titulo: "Mudas de qualidade",
    descricao:
      "Selecionamos e cultivamos cada muda com cuidado para garantir plantas saudáveis e vigorosas.",
  },
  {
    icon: HandHeart,
    titulo: "Atendimento personalizado",
    descricao:
      "Te ajudamos a escolher a muda certa para o seu espaço, direto pelo WhatsApp.",
  },
  {
    icon: MapPinned,
    titulo: "Adaptadas à região",
    descricao:
      "Espécies que se desenvolvem bem no clima de Ipê e Serra Gaúcha.",
  },
  {
    icon: Truck,
    titulo: "Retirada e entrega facilitada",
    descricao:
      "Combine a melhor forma de receber sua muda, com praticidade do início ao fim.",
  },
];

export function WhyUs() {
  return (
    <section id="diferenciais" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-leaf-600">
            Diferenciais
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-leaf-900 sm:text-4xl">
            Por que escolher a Ipê Mudas
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item, i) => (
            <FadeIn key={item.titulo} delay={i * 0.1}>
              <div className="group h-full rounded-2xl bg-cream-100 p-6 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-600 text-white transition-colors group-hover:bg-leaf-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-leaf-900">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
