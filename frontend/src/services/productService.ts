import axios from "axios";
import type { Product } from "../types/product";
//const API_URL = "https://localhost:5001/api/products";
const API_URL = "http://localhost:5001/api/products";

// export const getAllProducts = async (): Promise<Product[]> => {
//     const response = await axios.get<Product[]>(API_URL);
//     return response.data;
// };

export const getAllProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(API_URL);

    console.log("API Response:", response.data);

    return response.data;
};