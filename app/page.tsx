import { AboutIntro } from "@/components/sections/about-intro";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Packages } from "@/components/sections/packages";
import { Process } from "@/components/sections/process";
import { Statement } from "@/components/sections/statement";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutIntro />
      <Work />
      <Marquee />
      <Packages />
      <Capabilities />
      <Process />
      <Statement />
      <Faq />
      <Contact />
    </main>
  );
}
