import { Category, Product } from "@/types";

const endpoint = "https://losvarelaadmin.pythonanywhere.com/";

export const productsQuery = async (
  query: string | undefined,
): Promise<Product[]> => {
  return await fetch(`${endpoint}products${query ? `?query=${query}` : ""}`, {
    next: { revalidate: 300 },
  }).then((res) => res.json());
};

export const ProductByIdQuery = async (id: string): Promise<Product> => {
  return await fetch(`${endpoint}products/${id}`, {
    next: { revalidate: 300 },
  }).then((res) => res.json());
};

export const categoriesQuery = async () => {
  return await fetch(`${endpoint}categories`, {
    next: { revalidate: 300 },
  }).then((res): Promise<Category[]> => res.json());
};
