import Link from "next/link";
import Container from "../../../components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#000000] text-white pt-12 pb-20 select-none overflow-hidden font-sans">
      <Container>
        <div className="max-w-[1200px] mx-auto px-4 relative">
          
          {/* 1. About Us Pill Badge - Reusable Component */}
          <div className="mb-6 flex justify-start">
            <SectionBadge text="About Us" />
          </div>

          {/* 2. Main Grid Layout - Responsive columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col items-start text-left">
              <h2 className="max-w-[436px] font-inter font-normal text-3xl sm:text-4xl lg:text-[44px] leading-[110%] lg:leading-[100%] tracking-[0%] text-white mb-8 lg:mb-11">
                Empowering Gamers With{" "}
                <span className="text-[#A71EDB]">High-Quality</span> Modded Tech
              </h2> 

              {/* 🛠️ FIX: Error free implementation. Link wrapper with block behavior */}
              <Link href="#about" className="inline-block w-full sm:w-auto">
                <PrimaryButton className="w-full sm:w-auto min-w-[227px]">
                  Know More About Us
                </PrimaryButton>
              </Link>
            </div>

            {/* Right Column */}
            <div className="lg:pl-[48px] mt-4 lg:mt-0">
              <p className="max-w-[620px] font-inter font-light text-[15px] sm:text-[16px] leading-[24px] lg:leading-[22px] tracking-[0%] text-zinc-400 opacity-70 text-justify">
                Figma ipsum component variant main layer. Prototype link follower comment
                arrow. Pixel plugin shadow ipsum connection pixel vector. Image scrolling
                object edit community create scrolling clip bold text. Device slice arrange
                pencil undo Main union boolean editor prototype. Strikethrough flatten ellipse
                shadow frame figjam editor project auto. Opacity underline line scale opacity
                bold font bullet pencil. Community rectangle stroke boolean star layout
                scrolling rectangle star. Underline background variant image move font
                overflow list. Component style ellipse clip rotate auto. Style pen subtract
                horizontal auto fill union. Subtract cretext font link blur. ate pencil
                thumbnail flows. Move bold strikethrough mask project line vertical.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}