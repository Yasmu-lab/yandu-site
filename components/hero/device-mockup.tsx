import Image from "next/image";

type MockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Abstracted laptop silhouette -- screen + base, no literal brand shape. */
export function LaptopMockup({ src, alt, className, priority }: MockupProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-[10px] border-[6px] border-[#0e1a12] bg-[#0e1a12] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 520px, 80vw"
            className="object-cover"
            priority={priority}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/20" />
        </div>
      </div>
      <div className="relative mx-auto h-[10px] w-[108%] max-w-none -translate-x-[4%] rounded-b-xl bg-gradient-to-b from-[#1a2b1f] to-[#0e1a12] shadow-[0_18px_30px_rgba(0,0,0,0.35)]">
        <div className="absolute left-1/2 top-0 h-[3px] w-14 -translate-x-1/2 rounded-b bg-black/30" />
      </div>
    </div>
  );
}

/** Abstracted phone silhouette -- rounded bezel + speaker line, no literal brand shape. */
export function PhoneMockup({ src, alt, className, priority }: MockupProps) {
  return (
    <div
      className={className}
      style={{ aspectRatio: "9 / 19" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[34px] border-[6px] border-[#0e1a12] bg-[#0e1a12] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute left-1/2 top-2 z-10 h-[5px] w-10 -translate-x-1/2 rounded-full bg-black/40" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="220px"
          className="object-cover"
          style={{ objectPosition: "12% 50%" }}
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/25" />
      </div>
    </div>
  );
}
