import axios from 'axios';

// In Vite, use import.meta.env for environment variables and prefix them with VITE_
// Remove dotenv usage from front-end code — dotenv is for Node environments.
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const fetchProducts = async () => {
    const{data} = await axios.get(`${API_URL}/products`);
    return data.products;
};