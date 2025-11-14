import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const AMAZON_HOST = process.env.AMAZON_HOST;
const AMAZON_KEY = process.env.AMAZON_API_KEY;

export async function fetchAmazon(keyword) {
  try {
    const url = `https://${AMAZON_HOST}/search`;

    const response = await axios.get(url, {
      params: {
        query: keyword,
        country: "IN",
        page: "1",
      },
      headers: {
        "x-rapidapi-key": AMAZON_KEY,
        "x-rapidapi-host": AMAZON_HOST,
      },
    });

    // The successful structure you saw earlier:
    // response.data.data.products

    const raw = response.data?.data?.products || [];

    return raw.map(item => ({
      title: item.product_title,
      brand: item.brand || "Unknown",
      price: clean(item.product_price),
      rating: item.product_star_rating || null,
      reviews: item.product_num_ratings || null,
      url: item.product_url,
      images: item.product_photos || [],
    }));

  } catch (err) {
    console.log("❌ Amazon Fetch Error:", err.response?.data || err.message);
    return [];
  }
}

function clean(str) {
  if (!str) return null;
  return Number(String(str).replace(/\D/g, ""));
}
