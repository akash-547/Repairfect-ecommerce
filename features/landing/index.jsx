// features/landing/index.jsx
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import BlogsSection from './components/BlogsSection';
import RepairSection from './components/RepairSection';
import FeaturesSection from './components/FeaturesSection';


export default function LandingPage() {
  return (
    <>
    <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProductsSection />
      <BlogsSection />
      <RepairSection />
    </>
  );
}