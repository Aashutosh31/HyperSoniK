import express from "express";
import { getProducts, manualRefreshController } from "../controllers/publicController.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/refresh-products", manualRefreshController);

export default router;
