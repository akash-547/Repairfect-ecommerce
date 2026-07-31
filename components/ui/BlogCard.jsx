import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog, isActive, onCardClick }) {
  // Agar onCardClick pass hua hai toh wo chalaye, warna standard Link follow ho
  const blogSlugOrId = blog.slug || blog.id || "1";

  return (
    <Link
      href={`/blogs/${blogSlugOrId}`}
      onClick={onCardClick}
      className={`w-full max-w-[620px] h-auto sm:h-[138px] p-4 bg-[#050505] rounded-[14px] border border-zinc-900/80 hover:border-zinc-800 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center cursor-pointer select-none block`}
    >
      {/* Blog Left Image Container */}
      <div className="relative w-full sm:w-[150px] h-[106px] rounded-[10px] overflow-hidden flex-shrink-0 bg-zinc-900">
        <Image
          src={blog.image || "/assets/blog-placeholder.png"}
          alt={blog.title || "Blog Image"}
          fill
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Blog Right Content Box */}
      <div className="flex flex-col justify-between h-full w-full text-left py-1">
        <div>
          <h3 className="font-inter font-normal text-[16px] sm:text-[18px] leading-[130%] text-white tracking-wide mb-1 line-clamp-1">
            {blog.title}
          </h3>
          <p className="font-inter font-light text-[12px] sm:text-[13px] leading-[140%] text-zinc-400 opacity-70 line-clamp-2">
            {blog.description}
          </p>
        </div>

        {/* Small Date Badge */}
        <div className="mt-3 sm:mt-0 w-fit h-[24px] px-3 rounded-[100px] bg-[#1A1A1A] flex items-center justify-center">
          <span className="font-inter font-normal text-[11px] text-zinc-500">
            {blog.date}
          </span>
        </div>
      </div>
    </Link>
  );
}