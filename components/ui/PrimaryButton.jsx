import Link from "next/link";

export default function PrimaryButton({ children, onClick, href, className = "" }) {
  
  const baseStyles = `text-white bg-[#A71EDB] rounded-[4px] font-poppins font-normal antialiased subpixel-antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] hover:bg-[#8b16b8] transition-all duration-200 active:scale-95 cursor-pointer text-center flex items-center justify-center min-w-[180px] h-[44px] px-6 text-[16px] leading-[132%] tracking-normal whitespace-nowrap shadow-none ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}