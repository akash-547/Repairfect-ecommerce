// HistorySection Component

"use client";

import React from "react";
import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import AboutCard from "@/components/ui/AboutCard";

const HistorySection = () => {
  return (
    <section className="w-full bg-[#000000] text-white py-15 lg:py-20 select-none overflow-hidden">
      <Container>
        {/* ─── MAIN WRAPPER MATCHING SCREENSHOT_132_4.PNG ─── */}
        {/* Yeh wrapper ensures ke upar aur nechy ka max-width layout bilkul aik line me rahe */}
        <div className="w-full flex flex-col items-center text-center px-4 max-w-[1200px] mx-auto">
          
          {/* ─── TOP SECTION BADGE ─── */}
          <div className="mb-8">
            <SectionBadge text="History" />
          </div>

          {/* ─── MAIN HEADING (Centered) ─── */}
          <h1 className="font-inter font-light text-[40px] sm:text-[52px] lg:text-[64px] leading-[115%] tracking-tight text-white mb-10 max-w-4xl mx-auto">
            How Repairfect was Born
          </h1>

          {/* ─── MAIN DESCRIPTION PARAGRAPH (Perfectly Aligned Edges) ─── */}
          {/* max-w-full use kia hai taake text layout ke edges se bahar ya andar na dhasay balkay barabar rahay */}
          <div className="w-full mx-auto mb-20 text-center items-center max-w-full">
            <p className="font-inter font-light text-[15px] sm:text-[16px] leading-[26px] tracking-wide text-zinc-300">
              Figma ipsum component variant main layer. Hand boolean edit share inspect main layout vertical boolean. Pen effect vertical rectangle distribute team. Invite export frame undo community undo arrow. Background background opacity ellipse rectangle style hand. Horizontal strikethrough asset undo arrow. Team opacity move select invite reesizing comment shadow. Figjam star duplicate share line fill overflow pixel main. Clip team strikethrough rectangle line comment horizontal list italic. Boolean variant component undo outline rotate ipsum mask figma. Select scrolling content image effect undo invite. Underline effect blur rectangle pen overflow polygon. Edit pen pencil underline. Vertical boolean align align mask style. Edit background hand draft figjam selection move draft select object. Library scrolling fill variant draft device arrange text plugin. Move mask pen list share object shadow. Line group move create bullet thumbnail move rotate. Inspect.
            </p>
          </div>

          {/* ─── COMPACT REUSABLE CARDS ROW ─── */}
          <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center md:items-start mt-4">
            {/* Mission Card */}
            <AboutCard
              title="Mission"
              imageSrc="/assets/aboutHist.png"
              description="Figma ipsum component variant main layer. Subtract layout overflow vertical reesizing polygon flows move. Object background blur fill background editor subtract link. Image rectangle distribute draft arrange text selection strikethrough pixel distribute. Style vector italic line font italic. Move text opacity vector device create arrow."
            />

            {/* Values Card */}
            <AboutCard
              title="Values"
              imageSrc="/assets/aboutHist.png"
              description="Figma ipsum component variant main layer. Subtract layout overflow vertical reesizing polygon flows move. Object background blur fill background editor subtract link. Image rectangle distribute draft arrange text selection strikethrough pixel distribute. Style vector italic line font italic. Move text opacity vector device create arrow."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HistorySection;