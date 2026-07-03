"use client";
import React, { useState } from "react";
import Container from "@/components/shared/Container";
import ProductBanner from "./components/ProductBanner"; // Import the new banner component
import ProductHeader from "./components/ProductHeader";
import ProductSidebar from "./components/ProductSidebar";
import ProductGrid from "./components/ProductGrid";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommendation");

  return (
    <section className="w-full bg-[#000000] text-white select-none min-h-screen flex flex-col">
      
      {/* FULL WIDTH BANNER SECTION (Directly beneath your Navbar layout structure) */}
      <ProductBanner />

      {/* MAIN CONTENT AREA */}
      <div className="py-12 w-full">
        <Container>
          <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col gap-10">
            
            {/* Top Search Controls row */}
            <ProductHeader 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            {/* Master Structural 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start w-full">
              
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 w-full lg:sticky lg:top-28">
                <ProductSidebar />
              </div>

              {/* Product Mesh Cards Loop Grid */}
              <div className="lg:col-span-3 w-full">
                <ProductGrid 
                  searchQuery={searchQuery}
                  sortBy={sortBy}
                />
              </div>

            </div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default Products;