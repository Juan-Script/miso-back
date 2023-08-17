import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: String,
    wood: String,
    price: Number,
    size: Number,
    assembly: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Products = model("Products", productsSchema);

export default Products;
