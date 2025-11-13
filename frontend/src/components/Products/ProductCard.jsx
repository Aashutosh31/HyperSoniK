import React from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        p-5 rounded-2xl bg-gradient-to-br from-[#0f0f17] to-[#171727]
        border border-white/10 shadow-xl hover:shadow-purple-700/30
        transition-all cursor-pointer
      "
    >
      <div className="w-full h-48 rounded-xl overflow-hidden bg-black flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-full object-cover" />
      </div>

      <h2 className="mt-4 text-xl font-semibold text-white">{product.name}</h2>
      <p className="text-gray-400 text-sm">{product.brand}</p>

      <div className="mt-2 flex items-center gap-1">
        <AiFillStar className="text-yellow-400" />
        <span className="text-gray-300">{product.rating}</span>
      </div>

      <p className="mt-3 text-purple-400 font-semibold text-lg">₹{product.price}</p>

      <button
        className="
          mt-4 w-full py-2 rounded-xl
          bg-gradient-to-r from-purple-600 to-blue-600
          text-white font-semibold hover:opacity-90 transition
        "
      >
        Add to List
      </button>
    </motion.div>
  );
};

export default ProductCard;
