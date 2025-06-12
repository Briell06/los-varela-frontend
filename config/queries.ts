import { Product } from "@/types";

const endpoint = "http://losvarelaadmin.pythonanywhere.com";

export const productsQuery = async () => {
  const products: Product[] = await fetch(`${endpoint}/products`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
  return products;
};
