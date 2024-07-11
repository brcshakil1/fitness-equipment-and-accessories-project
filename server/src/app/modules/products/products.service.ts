import { SortOrder } from "mongoose";
import { IProducts } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (payload: IProducts) => {
  const result = await Product.create(payload);
  return result;
};

const getProductsFromDB = async (productQuery: Record<string, unknown>) => {
  let query: { [key: string]: unknown } = {};

  // search by name
  if (productQuery.name) {
    query.name = new RegExp(productQuery.name as string, "i");
  }

  // filter by categories
  if (productQuery.categories) {
    const categoryArray = (productQuery.categories as string).split(",");
    if (categoryArray.length > 0) {
      query.category = { $in: categoryArray };
    }
  }

  // filter by price range
  if (productQuery.minPrice || productQuery.maxPrice) {
    if (productQuery.minPrice) {
      query.price = { $gte: productQuery.minPrice };
    }
    if (productQuery.maxPrice) {
      query.price = { $lte: productQuery.maxPrice };
    }
  }

  // sort by price
  let sort: { [key: string]: SortOrder } = {};
  if (productQuery.price) {
    sort.price = productQuery.price === "asc" ? 1 : -1;
  }

  const result = await Product.find(query).sort(sort);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
};
