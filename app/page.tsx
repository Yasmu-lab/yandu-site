import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Process } from "@/components/sections/process";
import { Solutions } from "@/components/sections/solutions";
import { Ticker } from "@/components/sections/ticker";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Ticker />
      <Intro />
      <Work />
      <Capabilities />
      <Solutions />
      <Process />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
