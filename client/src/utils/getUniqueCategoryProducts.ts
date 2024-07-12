import { IProduct } from "@/types/products.interface";

export const getUniqueCategoryProducts = (products: IProduct[]) => {
  const seenCategories = new Set<string>();
  const uniqueCategoryProducts = [];

  for (const product of products) {
    if (!seenCategories.has(product.category)) {
      uniqueCategoryProducts.push(product);
      seenCategories.add(product.category);
    }
  }

  return uniqueCategoryProducts;
};
