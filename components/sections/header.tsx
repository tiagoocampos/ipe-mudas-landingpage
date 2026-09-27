"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { whatsappLink, whatsappMensagemPadrao } from "@/lib/site-config";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md shadow-md shadow-black/5"
          : "bg-cream-50/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logo2.png"
            alt="Ipê Mudas"
            width={160}
            height={93}
            priority
            className="h-12 w-auto sm:h-14"
            style={{
              filter:
                "drop-shadow(0 0 2px rgba(0,0,0,0.15)) drop-shadow(0 0 5px rgba(0,0,0,0.15)) drop-shadow(0 0 9px rgba(0,0,0,0.2))",
            }}
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeSection === item.href
                  ? "text-leaf-700"
                  : "text-foreground/70 hover:text-leaf-700"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            className="bg-leaf-600 text-white hover:bg-leaf-700 rounded-full px-5 shadow-md"
            render={
              <a
                href={whatsappLink(whatsappMensagemPadrao)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="h-4 w-4" />
                Fale no WhatsApp
              </a>
            }
          />
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex items-center justify-center rounded-full p-2 text-leaf-800 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border/60 bg-cream-50/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide ${
                  activeSection === item.href
                    ? "bg-leaf-100 text-leaf-800"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink(whatsappMensagemPadrao)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-leaf-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <WhatsappIcon className="h-4 w-4" />
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
