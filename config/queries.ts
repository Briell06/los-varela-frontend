import { Category, Product } from "@/types";

const endpoint = "http://losvarelaadmin.pythonanywhere.com";
const revalidate = { next: { revalidate: 60 } };

export const productsQuery = async (
  query: string | undefined,
): Promise<Product[]> => {
  return await fetch(
    `${endpoint}/products${query ? `?query=${query}` : ""}`,
    revalidate,
  ).then((res) => res.json());
};

export const ProductByIdQuery = async (id: string): Promise<Product> => {
  return await fetch(`${endpoint}/products/${id}`, revalidate).then((res) =>
    res.json(),
  );
};

export const categoriesQuery = async () => {
  return await fetch(`${endpoint}/categories`, revalidate).then(
    (res): Promise<Category[]> => res.json(),
  );
};
