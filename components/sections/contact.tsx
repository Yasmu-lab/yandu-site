import { Mail, MessageCircle } from "lucide-react";

import { MagneticButton } from "@/components/motion/magnetic-button";
import { OrganicBlob } from "@/components/motion/organic-blob";
import { Reveal } from "@/components/motion/reveal";
import { CONTACT, SITE } from "@/content/site";
import { fadeUp, maskReveal, scaleIn } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-forest px-6 py-24 text-center text-cream md:py-32"
    >
      <OrganicBlob
        className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        color="var(--color-cream)"
        speed={30}
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal variants={fadeUp}>
          <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#9CBDA3]">
            {CONTACT.eyebrow}
          </p>
        </Reveal>
        <Reveal variants={maskReveal}>
          <h2 className="text-[clamp(28px,4.5vw,42px)] font-bold font-heading">{CONTACT.title}</h2>
        </Reveal>
        <Reveal variants={fadeUp} delay={0.1}>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[#D9E5DB]">{CONTACT.lead}</p>
        </Reveal>

        <Reveal variants={scaleIn} delay={0.2}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[220px] items-center justify-center gap-3 rounded-[10px] bg-marigold px-6.5 py-4 font-bold text-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)]"
              >
                <MessageCircle aria-hidden size={22} />
                Chamar no WhatsApp
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={`mailto:${SITE.email}`}
                className="flex min-w-[220px] items-center justify-center gap-3 rounded-[10px] border-[1.5px] border-moss px-6.5 py-4 font-bold text-cream transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:border-cream hover:bg-white/10"
              >
                <Mail aria-hidden size={22} />
                Mandar e-mail
              </a>
            </MagneticButton>
          </div>
        </Reveal>

        <p className="mt-5.5 font-mono text-[11px] text-[#9CBDA3]">{CONTACT.note}</p>
      </div>
    </section>
  );
}
