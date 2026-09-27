import Image from "next/image";
import { Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { InstagramIcon } from "@/components/instagram-icon";
import {
  siteConfig,
  whatsappLink,
  whatsappMensagemPadrao,
} from "@/lib/site-config";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-leaf-900 py-14 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt="Ipê Mudas"
            width={160}
            height={93}
            className="h-14 w-auto rounded-lg bg-cream-50 p-1.5"
          />
          <p className="mt-4 max-w-xs text-sm text-cream-100/75">
            Mudas frutíferas, nativas, flores e plantas diversas em Ipê, RS.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">
            Navegação
          </h3>
          <nav className="mt-4 flex flex-col gap-2 text-sm text-cream-100/75">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">
            Contato
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-cream-100/75">
            <a
              href={whatsappLink(whatsappMensagemPadrao)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <WhatsappIcon className="h-4 w-4" />
              {siteConfig.whatsappExibicao}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-3 border-t border-white/10 px-4 pt-6 text-center text-xs text-cream-100/50 sm:px-6">
        <p>© {year} Ipê Mudas. Todos os direitos reservados.</p>
        <a
          href="https://nuvi-sistemas.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-cream-100/90 transition-colors hover:bg-white/15 hover:text-white"
        >
          <span>Desenvolvido por</span>
          <Image
            src="/nuvi-logo.png"
            alt="Nuvi Sistemas"
            width={22}
            height={22}
            className="h-5.5 w-5.5 rounded-md"
          />
          <span className="font-bold tracking-wide">Nuvi Sistemas</span>
        </a>
      </div>
    </footer>
  );
}
