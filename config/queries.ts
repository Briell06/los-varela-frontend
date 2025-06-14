import { Category, Product } from "@/types";

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
  const product = await fetch(`${endpoint}/products/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
  return product;
};

export const categoriesQuery = async () => {
  const categories: Category[] = await fetch(`${endpoint}/categories`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
  return categories;
};
