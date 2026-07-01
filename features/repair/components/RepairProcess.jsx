import React from 'react';

export default function RepairProcess() {
  const steps = [
    {
      id: 1,
      tag: "STEP 1",
      title: "Figma ipsum component variant main layer. Bullet.",
      description: "Figma ipsum component variant main layer. Hand boolean edit share inspect main layout vertical boolean. Pen effect vertical rectangle distribute team."
    },
    {
      id: 2,
      tag: "STEP 2",
      title: "Figma ipsum component variant main layer. Bullet.",
      description: "Figma ipsum component variant main layer. Hand boolean edit share inspect main layout vertical boolean. Pen effect vertical rectangle distribute team."
    },
    {
      id: 3,
      tag: "STEP 3",
      title: "Figma ipsum component variant main layer. Bullet.",
      description: "Figma ipsum component variant main layer. Hand boolean edit share inspect main layout vertical boolean. Pen effect vertical rectangle distribute team."
    }
  ];

  return (
    <section className=" text-white py-20     w-full max-w-[1440px] mx-auto ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
        
        {/* Left Column: Static Header & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-6">
          <span className="bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 text-xs uppercase tracking-wider px-4 py-1.5 rounded-full font-medium">
            Repair Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Figma ipsum component variant main layer. Bullet.
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
            Figma ipsum component variant main layer. Hand boolean edit share inspect main layout vertical boolean. Pen effect vertical rectangle distribute team. Invite export frame undo community undo arrow.
          </p>
          <button className="bg-[#A71EDB] hover:bg-[#9333ea] text-white font-medium px-8 py-3.5 rounded-md transition-all duration-200 shadow-lg shadow-purple-500/20 active:scale-[0.98]">
            Book Your Appointment
          </button>
        </div>

     
        <div className="hidden lg:flex lg:col-span-1 justify-center relative">
          <div className="w-4 bg-gradient-to-b from-[#1e1b4b] via-[#7e22ce] to-[#c084fc] rounded-full h-full min-h-[500px] flex flex-col justify-between items-center py-6">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="w-7 h-7 bg-white text-black text-xs font-bold rounded-full flex items-center justify-center shadow-md z-10"
              >
                {step.id}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Steps List */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-12 relative">
          {steps.map((step) => (
            <div key={step.id} className="relative pl-6 lg:pl-0 flex flex-col space-y-2 group">
              {/* Mobile Timeline Dot (Only shows up on mobile/tablet) */}
              <div className="absolute left-0 top-1.5 w-2 h-2 bg-[#a855f7] rounded-full lg:hidden" />
              
              <span className="text-[#a855f7] text-xs font-semibold tracking-widest uppercase">
                {step.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}