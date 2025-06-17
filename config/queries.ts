import { Category, Product } from "@/types";

const endpoint = "http://losvarelaadmin.pythonanywhere.com";
const revalidate = { next: { revalidate: 60 } };

export const productsQuery = async (query: string | undefined) => {
  const products: Product[] = await fetch(
    `${endpoint}/products${query ? `?query=${query}` : ""}`,
    revalidate,
  ).then((res) => res.json());

  return products;
};

export const ProductByIdQuery = async (id: string): Promise<Product> => {
  const product = await fetch(`${endpoint}/products/${id}`, revalidate).then(
    (res) => res.json(),
  );

  return product;
};

export const categoriesQuery = async () => {
  const categories: Category[] = await fetch(
    `${endpoint}/categories`,
    revalidate,
  ).then((res) => res.json());

  return categories;
};
