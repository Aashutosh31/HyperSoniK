export const getAllProducts = async (req, res) => {
  try {
    // For now return mock data (later connect DB)
    const products = [
      {
        id: 1,
        name: "Sony WF-1000XM4",
        brand: "Sony",
        price: 16990,
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/31P3nJDQ3vL._SY300_SX300_QL70_FMwebp_.jpg"
      },
      {
        id: 2,
        name: "Boat Airdopes 141",
        brand: "boAt",
        price: 1299,
        rating: 4.3,
        image: "https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg"
      }
    ];

    res.status(200).json({
      success: true,
      products,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching products",
    });
  }
};
