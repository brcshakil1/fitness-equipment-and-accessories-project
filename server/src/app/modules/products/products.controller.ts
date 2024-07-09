import { Request, Response } from "express";
import { ProductServices } from "./products.service";

const createProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  res.status(200).json({
    success: true,
    status: 200,
    message: "Product created successfully!",
    data: result,
  });
};

export const ProductControllers = {
  createProduct,
};
