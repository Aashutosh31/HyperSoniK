import express from 'express';
import { getAllProducts } from '../controllers/publicController.js';
const router = express.Router();

//Public Route
router.get('/products', getAllProducts);

export default router;