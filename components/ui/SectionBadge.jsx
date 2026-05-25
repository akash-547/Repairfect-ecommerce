export default function SectionBadge({ text }) {
  return (
    <div className="h-[31px] rounded-[100px] bg-[#A71EDB26] flex items-center justify-center pt-[8px] pb-[8px] pl-[16px] pr-[16px] border border-purple-500/5 select-none w-fit">
      <span className="font-inter font-normal text-[12px] leading-[100%] tracking-[0%] text-[#A71EDB] whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}