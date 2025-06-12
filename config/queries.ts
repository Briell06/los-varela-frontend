import { Product } from "@/config/types";

const endpoint = "http://losvarelaadmin.pythonanywhere.com";

export const productsQuery = async () => {
  const products: Product[] = await fetch(`${endpoint}/products`).then((res) =>
    res.json(),
  );
  return products;
};
