import axios from "axios";
import type { Product } from "../types/product";
import type { CreateProduct } from "../types/createProduct";
const API_URL = "http://localhost:5001/api/products";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    `${API_URL}/Get-All-Products`
  );

  return response.data;
};

export const addNewProduct = async (product: CreateProduct,): Promise<Product> => {
  const response = await axios.post<Product>(
    `${API_URL}/Create-Product`,
    product,
  );

  return response.data;
};
