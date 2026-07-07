"use client";
import React, { useState, useMemo } from "react";
import Container from "@/components/shared/Container";
import ProductBanner from "./components/ProductBanner";
import ProductHeader from "./components/ProductHeader";
import ProductSidebar from "./components/ProductSidebar";
import ProductGrid from "./components/ProductGrid";

const Products = () => {
  // Centralized Mock Data Source with Category Specs
  const mockProducts = useMemo(() => {
    return Array.from({ length: 40 }, (_, index) => {
      const id = index + 1;
      
      // Dynamic category matrix distributions
      let type = "Component";
      if (id % 3 === 0) type = "Lorem";
      else if (id % 2 === 0) type = "Ipsum";

      let color = "Black";
      if (id % 4 === 0) color = "Lorem";
      else if (id % 3 === 0) color = "Ipsum";
      else if (id % 2 === 0) color = "Component";

      let interest = "Component";
      if (id % 5 === 0 || id % 3 === 0) interest = "Lorem";

      return {
        id: id,
        title: id % 3 === 0 ? "PS5 Controller Grip" : id % 2 === 0 ? "Nintendo Switch Shell" : "XBOX Controller Cover",
        price: id % 2 === 0 ? "$140" : "$120",
        imageSrc: "/assets/cardimage.png", 
        description: "Figma ipsum component variant main layer. Shadow opacity.",
        dateAdded: id,
        // Sidebar filtering variables linked directly here:
        productType: type,
        color: color,
        interest: interest
      };
    });
  }, []);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommendation");
  
  // Sidebar Checkbox Selection States
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  // Pipeline Filter Processing Matrix
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      // 1. Text Search Box Match
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      // 2. Sidebar Filter Group Multi-Select Validations
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.productType);
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
      const matchesInterest = selectedInterests.length === 0 || selectedInterests.includes(product.interest);

      return matchesSearch && matchesType && matchesColor && matchesInterest;
    });
  }, [mockProducts, searchQuery, selectedTypes, selectedColors, selectedInterests]);

  // Final Multi-Criteria Sorting Engine
  const processedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === "price-low") {
      return sorted.sort((a, b) => parseInt(a.price.replace("$", "")) - parseInt(b.price.replace("$", "")));
    }
    if (sortBy === "price-high") {
      return sorted.sort((a, b) => parseInt(b.price.replace("$", "")) - parseInt(a.price.replace("$", "")));
    }
    if (sortBy === "newest") {
      return sorted.sort((a, b) => b.dateAdded - a.dateAdded);
    }
    return sorted; // Recommendation / Default flow
  }, [filteredProducts, sortBy]);

  return (
    <section className="w-full bg-[#000000] text-white select-none min-h-screen flex flex-col relative">
      <ProductBanner />

      <div className="pt-[100px] sm:pt-[120px] md:pt-[140px] pb-12 w-full">
        <Container>
          <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col gap-10">
            
            {/* Header automatically syncs the total count of filtered visible cards */}
            <ProductHeader 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
              totalCount={processedProducts.length}
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start w-full">
              
              {/* Dynamic Functional Sidebar */}
              <div className="lg:col-span-1 w-full lg:sticky lg:top-28">
                <ProductSidebar 
                  productsList={mockProducts}
                  selectedTypes={selectedTypes}
                  setSelectedTypes={setSelectedTypes}
                  selectedColors={selectedColors}
                  setSelectedColors={setSelectedColors}
                  selectedInterests={selectedInterests}
                  setSelectedInterests={setSelectedInterests}
                />
              </div>

              {/* Render Grid Cards Row */}
              <div className="lg:col-span-3 w-full">
                <ProductGrid products={processedProducts} />
              </div>

            </div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default Products;