import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f1418]">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">

        <Image
          src="/assets/heroSectionBg.png"
          alt="RepairFect Hero Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />

        {/* Purple Glow */}
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-purple-900/25 blur-[140px] rounded-full pointer-events-none" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1418]/60 to-[#0f1418]" />

      </div>

      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-4">

        <div className="max-w-4xl mx-auto text-center space-y-6 pt-24 flex flex-col items-center">

          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-white leading-tight">
            Level Up Your Gear.
            <span className="block mt-1">
              Perfect Every Mod.
            </span>
          </h1>

          <p className="max-w-3xl text-gray-400 text-sm md:text-base leading-relaxed font-light opacity-90">
            Figma ipsum component variant main layer. Project pixel horizontal
            comment vector bullet. Export pen fill polygon resizing effect
            figma pixel hand. Opacity distribute underline object vertical
            thumbnail invite star union.
          </p>

          <div className="pt-4">
            <button className="bg-[#a252fa] hover:bg-[#8b3fd4] text-white px-10 py-3 rounded-md font-medium tracking-wide transition-all shadow-[0_0_25px_rgba(162,82,250,0.45)] active:scale-95">
              Shop Mods
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}