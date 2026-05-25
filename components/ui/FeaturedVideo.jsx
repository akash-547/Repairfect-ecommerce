import Image from "next/image";

export default function FeaturedVideo() {
  return (
    // Max width ko 1440px kiya aur side padding (px-4) hata di taaki full width ho
    <div className="w-full max-w-[1440px] mx-auto px-0 relative">
      {/* Main Wrapper Container - Height is defined automatically by the image inside */}
      <div className="w-full overflow-hidden relative border-y border-purple-500/10 group cursor-pointer shadow-[0_20px_50px_rgba(90,18,130,0.15)] flex items-center justify-center bg-black">
        
        {/* FIXED RESPONSIVE IMAGE: 
          Yahan full canvas support ke liye width={1440} aur height={415} secure kiya hai
        */}
        <Image
          src="/assets/video.png" 
          alt="Featured Gear Video Thumbnail"
          width={1440}
          height={415}
          priority
          className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-101 pointer-events-none select-none"
        />

        {/* Ambient Bottom Neon Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#A71EDB]/20 via-transparent to-transparent pointer-events-none opacity-80" />

        {/* Dynamic Glowing Play Button */}
        <div className="absolute z-10 w-12 h-12 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white active:scale-95">
          {/* Play Triangle Icon */}
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 text-black ml-1 transition-transform" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Pulse Ring Effect Animation on Hover */}
        <div className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full border border-white/20 scale-75 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 pointer-events-none" />
      </div>
    </div>
  );
}