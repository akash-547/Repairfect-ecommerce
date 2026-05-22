import Image from "next/image";
import Container from "../../../components/shared/Container";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#07090c]">

      {/* Layer 1: Background Asset & Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/heroSectionBg.png"
          alt="RepairFect Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none brightness-[0.80]"
        />

        {/* Ambient Left Neon Purple Radial Backdrop Glow */}
        <div className="absolute top-1/4 -left-36 w-[550px] h-[550px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />

        {/* Immersive Dark Shadow Overlays */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#07090c] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090c]/50 via-transparent to-[#07090c]/50 pointer-events-none" />
      </div>

      {/* Layer 2: Main Layout Content */}
      <div className="relative z-10 w-full pt-[100px] pb-12">
        <Container>
          <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">

            {/* Core Typography Heading - 42px on Desktop with 134% line-height */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-white text-center leading-[1.34] tracking-normal">
              Level Up Your Gear. Perfect
              <span className="block font-bold  text-white">Every Mod.</span>
            </h1>

            {/* Content Subtext Description - Font-light (300 weight), 16px size, 0.6 Opacity, max-width 997px */}
            <p className="mt-6 text-white text-center font-light text-[16px] leading-[1.32] tracking-normal opacity-60 max-w-[997px] min-h-[75px] mx-auto">
              Figma ipsum component variant main layer. Project pixel horizontal
              comment vector bullet. Export pen fill polygon resizing effect
              figma pixel hand. Opacity distribute underline object vertical
              thumbnail invite star union. Follower comment fill shadow pixel stroke.
            </p>

            {/* Call To Action Button Layout - Exact Dimensions with no shadows */}
            <div className="mt-[42px]">
              <button className="text-white bg-[#A71EDB] rounded-[4px] font-normal transition-all duration-200 active:scale-95 cursor-pointer text-center flex items-center justify-center w-[153px] h-[37px] gap-2 pt-2 pb-2 pl-8 pr-8 text-[16px] leading-[1.32] tracking-normal shadow-none">
                Shop Mods
              </button>
            </div>

          </div>
        </Container>
      </div>

    </section>
  );
}