import { IProducts } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (payload: IProducts) => {
  const result = await Product.create(payload);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
