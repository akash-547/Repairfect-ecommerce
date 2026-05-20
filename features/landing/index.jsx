// features/landing/index.jsx
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import BlogsSection from './components/BlogsSection';
import RepairSection from './components/RepairSection';


export default function LandingPage() {
  return (
    <>
    <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BlogsSection />
      <RepairSection />
    </>
  );
}