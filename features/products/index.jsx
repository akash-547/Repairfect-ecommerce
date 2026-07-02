"use client";
import React from "react";
import Container from "@/components/shared/Container";
import ProductHeader from "./components/ProductHeader";
import ProductSidebar from "./components/ProductSidebar";
import ProductGrid from "./components/ProductGrid";

const Products = () => {
  return (
    <section className="w-full bg-[#000000] text-white py-12 select-none min-h-screen">
      <Container>
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          
          {/* Top Search Controls row */}
          <ProductHeader />

          {/* Master Structural 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start w-full">
            
            {/* Sidebar Filters (Takes 1 Columns on large display) */}
            <div className="lg:col-span-1 w-full lg:sticky lg:top-28">
              <ProductSidebar />
            </div>

            {/* Product Mesh Cards Loop Grid (Takes 3 Columns) */}
            <div className="lg:col-span-3 w-full">
              <ProductGrid />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Products;