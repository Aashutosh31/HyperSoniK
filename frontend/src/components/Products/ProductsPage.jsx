import React from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../api/products";
import { useQuery } from "@tanstack/react-query";


const ProductsPage = () => {

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
    if (isLoading) {
    return (
      <div className="text-white pt-32 text-center">
        Loading products...
      </div>
    );
  }

  return (
    <section className="pt-32 px-6 min-h-screen bg-black text-white">

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 
        bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Explore the Best Sound Gear
      </h1>

      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        HyperSoniK recommends the finest audio gear across India — carefully curated by quality, value, and user reviews.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id || product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
