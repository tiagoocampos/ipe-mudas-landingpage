import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Catalog } from "@/components/sections/catalog";
import { WhyUs } from "@/components/sections/why-us";
import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsappFloatButton } from "@/components/whatsapp-float-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <WhyUs />
        <About />
        <Cta />
      </main>
      <Footer />
      <WhatsappFloatButton />
    </>
  );
}
