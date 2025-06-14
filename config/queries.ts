import { Product } from "@/types";

const endpoint = "http://losvarelaadmin.pythonanywhere.com";

export const productsQuery = async (query: string | undefined) => {
  const products: Product[] = await fetch(
    `${endpoint}/products${query ? `?query=${query}` : ""}`,
    {
      next: { revalidate: 60 },
    },
  ).then((res) => res.json());
  return products;
};

export const ProductByIdQuery = async (id: string): Promise<Product> => {
  return await fetch(`${endpoint}/products/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};
