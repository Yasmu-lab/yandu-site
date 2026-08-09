import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Ticker } from "@/components/sections/ticker";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Manifesto />
      <Ticker />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
