import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema({
  price: { type: Number, default: null },
  originalPrice: { type: Number, default: null },
  rating: { type: Number, default: null },
  reviews: { type: Number, default: null },
  url: { type: String, default: "" },
});

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  brand: { type: String, default: "Unknown", index: true },
  category: { type: String, index: true },
  images: { type: [String], default: [] },

  // Data from amazon
  amazon: { type: PriceSchema, default: {} },

  // keep flipkart optional for future re-enable
  flipkart: { type: mongoose.Schema.Types.Mixed, default: {} },

  bestPrice: { type: Number, default: null, index: true },
  bestSource: { type: String, default: "amazon" },

  lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);
