import { Schema, model } from "mongoose";
import { IProducts } from "./products.interface";

const productsSchema = new Schema<IProducts>({
  name: { type: String, required: true },
  productImages: { type: [String], required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  benefits: { type: String, required: true },
});

export const Product = model<IProducts>("product", productsSchema);
