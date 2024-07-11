import { Router } from "express";
import { ProductControllers } from "./products.controller";

const router = Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getProducts);
router.get("/:id", ProductControllers.getSingleProduct);
router.patch("/:id", ProductControllers.updateProduct);

export const ProductRoutes = router;
