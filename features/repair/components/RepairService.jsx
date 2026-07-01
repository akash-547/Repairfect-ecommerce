import React from "react";

export default function RepairService() {
  const services = [
    {
      title: "Repairing",
      items: [
        "Diagnostics & fault detection",
        "Engine & mechanical repairs",
        "Electrical system troubleshooting",
        "Suspension & brake servicing",
        "Routine maintenance & part replacement",
        "Quality-tested repairs using certified parts",
      ],
    },
    {
      title: "Modding",
      items: [
        "Performance upgrades & tuning",
        "Exterior customization (body kits, wraps, lighting)",
        "Interior enhancements & detailing",
        "Exhaust & sound system upgrades",
        "Wheel, tire & suspension mods",
        "Custom builds tailored to your style",
      ],
    },
  ];

  return (
    <section className=" text-white py-20     w-full max-w-[1440">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top Tag */}
        <span className="bg-[#a855f7]/10 text-[#c084fc] border border-[#a855f7]/20 text-xs tracking-wider px-4 py-1 rounded-full font-medium mb-6">
          Services
        </span>

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Types Of Services
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base max-w-5xl leading-relaxed mb-16">
          Figma ipsum component variant main layer. Hand boolean edit share
          inspect main layout vertical boolean. Pen effect vertical rectangle
          distribute team. Invite export frame undo community undo arrow.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950/40 border border-zinc-700/80 rounded-2xl p-8 md:p-10 transition-all duration-300"
            >
              {/* Header inside Card */}
              <div className="flex items-center space-x-4 mb-8">
                {/* Hexagonal/Abstract Purple Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-[#c084fc] to-[#a855f7] rounded-lg rotate-12 flex items-center justify-center shadow-lg shadow-purple-500/10">
                  <div className="w-4 h-4 bg-zinc-950 rounded-sm -rotate-12" />
                </div>
                <h3 className="text-3xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#A71EDB]">
                  {service.title}
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 text-gray-400 text-sm md:text-base">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="text-gray-500 mr-3 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
