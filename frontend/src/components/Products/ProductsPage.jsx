import React from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../api/products";
import { useQuery } from "@tanstack/react-query";

const ProductsPage = () => {
  // FIX: Destructure isError and error to handle query failures
  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="pt-32 min-h-screen bg-black text-center text-white">
        Loading products...
      </div>
    );
  }

  // FIX: Add error handling for when the query fails
  if (isError) {
    return (
      <div className="pt-32 min-h-screen bg-black text-center text-red-400">
        Error loading products: {error.message}
      </div>
    );
  }

  // FIX: Add check for empty or undefined products before mapping
  const noProductsFound = !products || products.length === 0;

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
      {noProductsFound ? (
        <div className="text-center text-gray-400 text-xl">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id || product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;