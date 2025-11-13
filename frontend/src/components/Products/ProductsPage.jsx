import React from "react";
import ProductCard from "./ProductCard";

const mockProducts = [
  {
    id: 1,
    name: "Sony WF-1000XM4",
    brand: "Sony",
    price: 16990,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/71x5xwF9F8L._SL1500_.jpg"
  },
  {
    id: 2,
    name: "Boat Airdopes 141",
    brand: "boAt",
    price: 1299,
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg"
  },
  {
    id: 3,
    name: "JBL Tune 720BT",
    brand: "JBL",
    price: 3999,
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/612Z7gwbc7L._SL1500_.jpg"
  }
];

const ProductsPage = () => {
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
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductsPage;
