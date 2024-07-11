import { Request, Response } from "express";
import { ProductServices } from "./products.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProductIntoDB(req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: true,
      status: 404,
      message: err.message || "Something went wrong while creating product.",
      error: err.message,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductsFromDB(req.query);

    res.status(200).json({
      success: true,
      status: 200,
      message: "All products retrieved successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: true,
      status: 404,
      message: err.message || "Something went wrong while getting products.",
      error: err.message,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductFromDB(id);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Product retrieved successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: true,
      status: 404,
      message: err.message || "Something went wrong while getting product.",
      error: err.message,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.updateProductFromDB(id, req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Product retrieved successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: true,
      status: 404,
      message: err.message || "Something went wrong while getting product.",
      error: err.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
};
