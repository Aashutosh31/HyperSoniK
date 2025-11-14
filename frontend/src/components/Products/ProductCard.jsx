import React from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import {Link} from 'react-router-dom';

// A default image in case a product has none
import defaultHeadphone from "../../../public/headphones.png";

const ProductCard = ({ product }) => {
  
  // FIX: Get the first image, or use a fallback if the images array is empty
  const imageUrl = product.images && product.images.length > 0 
    ? product.images[0] 
    : defaultHeadphone;
  
  // FIX: Use 'title' from the schema, not 'name'
  const productName = product.title || "No product name";
  
  // FIX: Use 'amazon.rating', not 'rating'
  const productRating = product.amazon?.rating || 0;
  
  // FIX: Use 'bestPrice', not 'price'
  const productPrice = product.bestPrice || 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        p-5 rounded-2xl bg-gradient-to-br from-[#0f0f17] to-[#171727]
        border border-white/10 shadow-xl hover:shadow-purple-700/30
        transition-all cursor-pointer flex flex-col
      "
    >
      <div className="w-full h-48 rounded-xl overflow-hidden bg-black flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={productName} 
          className="h-full w-full object-contain" // Use object-contain
        />
      </div>

      <div className="mt-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-white line-clamp-2" title={productName}>
          {productName}
        </h2>
        <p className="text-gray-400 text-sm">{product.brand}</p>

        <div className="mt-2 flex items-center gap-1">
          <AiFillStar className="text-yellow-400" />
          <span className="text-gray-300">{productRating}</span>
          <span className="text-gray-500 text-sm">
            ({product.amazon?.reviews || 0} reviews)
          </span>
        </div>
      </div>

      <div className="mt-auto pt-3">
        <p className="mt-3 text-purple-400 font-semibold text-2xl">
          ₹{productPrice.toLocaleString("en-IN")}
        </p>
        <Link to={`/products/${product._id}`}>
        <button
          target="_blank" 
          rel="noopener noreferrer"
          className="
            block text-center mt-4 w-full py-2 rounded-xl
            bg-gradient-to-r from-purple-600 to-blue-600
            text-white font-semibold hover:opacity-90 transition
          ">
          Add to List
        </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;