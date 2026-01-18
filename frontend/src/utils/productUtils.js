import { products } from "../data/products";

export const getAllProducts = () =>
  products.flatMap((category) => category.items);

export const getProductById = (id) =>
  getAllProducts().find((p) => p.id === Number(id));
