import { PRODUCTS_DATA } from "@/constants";
import ProductGallery from "@/components/products/ProductGallery";
import ProductDetails from "@/components/products/ProductDetails";
import FeaturedProducts from "@/components/products/FeaturedProducts";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  // Matching product find karna
  const product =
    PRODUCTS_DATA.find((item) => String(item.id) === String(id)) ||
    PRODUCTS_DATA[0];

  return (
    <main className="min-h-screen bg-[#05010B] text-white py-12 px-4 md:px-8 relative overflow-hidden">
      {/* 🌟 Screen ke bottom se spread hone wala Purple Glow */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[600px] pointer-events-none z-0" 
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(90, 18, 130, 0.45) 0%, rgba(5, 1, 11, 0) 80%)"
        }}
      />

      <div className="max-w-[1200px] mx-auto space-y-16 relative z-10">
        {/* Top Section: Gallery & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ProductGallery images={product?.images || [product?.imageSrc]} />
          </div>

          <div className="lg:col-span-5">
            <ProductDetails product={product} />
          </div>
        </div>

        {/* Bottom Section: Featured Products (4 Cards) */}
        <div className="pt-12 border-t border-purple-900/20">
          <h2 className="text-3xl font-inter font-normal text-white mb-8">
            Featured Products
          </h2>
          <FeaturedProducts currentId={product.id} />
        </div>
      </div>
    </main>
  );
}