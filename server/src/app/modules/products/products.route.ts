import { Router } from "express";
import { ProductControllers } from "./products.controller";

const router = Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getProducts);
router.get("/:id", ProductControllers.getSingleProducts);

export const ProductRoutes = router;
