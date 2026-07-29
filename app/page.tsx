import { About } from "@/components/sections/about";
import { CapacitiesStrip } from "@/components/sections/capacities-strip";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <CapacitiesStrip />
      <Projects />
      <Services />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
