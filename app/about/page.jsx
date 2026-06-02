// app/about/page.jsx
import AboutSection from '@/features/about'; // 👈 MAKE SURE THIS USES THE ABOUT FEATURE

export default function AboutPage() {
  return (
    <main className="w-full bg-[#000000] min-h-screen block">
      <AboutSection />
    </main>
  );
}