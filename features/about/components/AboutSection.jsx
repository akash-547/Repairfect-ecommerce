"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#000000] text-white py-16 lg:py-24 select-none overflow-hidden block">
      <Container>
        {/* ─── PURE TABLE/GRID LAYOUT FOR STATIC DIRECTION ─── */}
        <div className="px-4 grid grid-cols-1 lg:grid-cols-2  items-center w-full">
          {/* ─── LEFT COLUMN: IMAGE BLOCK (LOCK HEIGHT & WIDTH) ─── */}
          <div className="w-full">
            <Image
              src="/assets/aboutPro.png"
              alt="Mohannad Saddedin Portrait"
              // fill
              priority
              // sizes="(max-width: 1024px) 100vw, 520px"
              width={500}
              height={500}
              className="object-cover object-center z-10"
            />
          </div>

          {/* ─── RIGHT COLUMN: CONTENT TEXT BLOCK ─── */}
          <div className="w-full flex flex-col items-start text-left">
            <div className="mb-6 block">
              <SectionBadge text="About Owner" />
            </div>

            {/* 🛠️ HEADING UPDATED: */}
            <h1 className="font-inter font-normal text-[100px] sm:text-[56px] lg:text-[64px] tracking-normal text-white mb-8 max-w-[700px] flex flex-col gap-2 sm:gap-3">
              <span>Biography of</span>
              <span>Mohannad Saddedin</span>
            </h1>

            <div className="flex flex-col gap-6 w-full max-w-[540px]">
              <p
                className="font-inter font-normal text-[16px] leading-[22px] tracking-[0%] text-zinc-400 block"
                style={{ fontStyle: "normal" }}
              >
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

              <p
                className="font-inter font-normal text-[16px] leading-[22px] tracking-[0%] text-zinc-500 block"
                style={{ fontStyle: "normal" }}
              >
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
