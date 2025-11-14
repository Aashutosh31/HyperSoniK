import Product from "../models/Product.js";
import { fetchAmazon } from "../services/fetcher.js";

/**
 * Manually trigger refresh
 * GET /api/refresh-products?secret=YOUR_SECRET
 */
export const manualRefreshController = async (req, res) => {
  try {
    const secret = req.query.secret;

    if (!process.env.ADMIN_SECRET) {
      return res.status(500).json({
        success: false,
        message: "ADMIN_SECRET is not set in backend .env file"
      });
    }

    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized: Invalid secret"
      });
    }

    console.log("⚡ Manual product refresh triggered (secure).");

    await updateAllProducts(); // call the updated function below

    return res.json({
      success: true,
      message: "Products updated successfully"
    });

  } catch (err) {
    console.error("manualRefreshController error:", err);
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


/**
 * Main Update Function (Amazon Only)
 * Called by manual refresh
 */
export async function updateAllProducts() {
  console.log("🚀 Starting full product refresh...");

  const categories = {
    earphones: "earphones",
    headphones: "headphones",
    speakers: "bluetooth speakers"
  };

  for (const category of Object.keys(categories)) {
    const keyword = categories[category];
    console.log(`\n📌 Fetching category: ${category}`);

    const amazonData = await fetchAmazon(keyword);

    console.log(`📦 Amazon returned ${amazonData.length} items for "${keyword}"`);

    let updated = 0;

    for (const item of amazonData) {
      const price = item.price ?? null;

      await Product.findOneAndUpdate(
        { title: item.title }, // unique key for now
        {
          title: item.title,
          brand: item.brand || "Unknown",
          category,
          images: item.images || [],

          amazon: {
            price: price || null,
            originalPrice: item.originalPrice || null,
            rating: item.rating || null,
            reviews: item.reviews || null,
            url: item.url || "",
          },

          flipkart: {}, // kept empty for future

          bestPrice: price || null,
          bestSource: price ? "amazon" : null,
          lastUpdated: new Date()
        },
        { upsert: true, new: true }
      );

      updated++;
    }

    console.log(`✔ Updated ${updated} items for ${category}`);
  }

  console.log("\n🎉 Product update complete!");
}



/**
 * GET /api/products
 * Fetch products for frontend (with filters)
 */
export const getProducts = async (req, res) => {
  try {
    const {
      category,
      q,
      minPrice,
      maxPrice,
      brand,
      page = 1,
      limit = 20,
      sort
    } = req.query;

    const filter = {};

    if (category) filter.category = category;
    if (brand) filter.brand = brand;
    if (q) filter.title = { $regex: q, $options: "i" };

    if (minPrice || maxPrice) {
      filter.bestPrice = {};
      if (minPrice) filter.bestPrice.$gte = Number(minPrice);
      if (maxPrice) filter.bestPrice.$lte = Number(maxPrice);
    }

    let sortObj = { lastUpdated: -1 };

    if (sort === "price_asc") sortObj = { bestPrice: 1 };
    if (sort === "price_desc") sortObj = { bestPrice: -1 };
    if (sort === "rating_desc") sortObj = { "amazon.rating": -1 };
    if (sort === "rating_asc") sortObj = { "amazon.rating": 1 };

    const skip = (Number(page) - 1) * Number(limit);

    const [items, total] = await Promise.all([
      Product.find(filter).sort(sortObj).skip(skip).limit(Number(limit)),
      Product.countDocuments(filter)
    ]);

    return res.json({
      success: true,
      data: items,
      meta: {
        page: Number(page),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });

  } catch (err) {
    console.error("getProducts error:", err);
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
