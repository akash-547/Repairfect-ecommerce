"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#000000] text-white py-16 lg:py-24 select-none overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* LEFT — Image, fills its grid column, made significantly larger */}
          <div className="w-full h-[540px] lg:h-[620px] rounded-[16px] overflow-hidden bg-zinc-900 relative">
            <Image
              src="/assets/aboutPro.png"
              alt="Mohannad Saddedin Portrait"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Purple glow overlay — matches screenshot */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(167,30,219,0.55) 0%, rgba(80,0,120,0.35) 100%)",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* RIGHT — Content */}
          <div className="w-full flex flex-col items-start text-left">
            <div className="mb-6">
              <SectionBadge text="About Owner" />
            </div>

            {/* Reasonable heading size, no overflow */}
            <h1 className="font-inter font-normal text-[36px] sm:text-[44px] lg:text-[48px] leading-[115%] tracking-tight text-white mb-8 max-w-[500px]">
              Biography of<br />Mohannad Saddedin
            </h1>

            <div className="flex flex-col gap-6 w-full max-w-[540px]">
              <p className="font-inter font-normal text-[16px] leading-[22px] tracking-[0%] text-zinc-400">
                Figma ipsum component variant main layer. Hand boolean edit
                share inspect main layout vertical boolean. Pen effect vertical
                rectangle distribute team. Invite export frame undo community
                undo arrow. Background background opacity ellipse rectangle
                style hand. Horizontal strikethrough asset undo arrow. Team
                opacity move select invite reesizing comment shadow. Figjam star
                duplicate share line fill overflow pixel main. Clip team
                strikethrough rectangle line comment horizontal list italic.
                Boolean variant component undo outline rotate ipsum mask figma.
                Select scrolling content image effect undo invite. Underline
                effect blur rectangle pen overflow polygon. Edit pen pencil
                underline.
              </p>

              <p className="font-inter font-normal text-[16px] leading-[22px] tracking-[0%] text-zinc-500">
                Vertical boolean align align mask style. Edit background hand
                draft figjam selection move draft select object. Library
                scrolling fill variant draft device arrange text plugin. Move
                mask pen list share object shadow. Line group move create bullet
                thumbnail move rotate. Inspect.
              </p>
            </div>
          </div>

        </div>
        
      </Container>
    </section>
  );
};

export default AboutSection;