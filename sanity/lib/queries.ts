import { defineQuery } from "next-sanity";

export const productsQuery = defineQuery(`
  *[_type == "product"] {
    _id,
    title,
    price,
    description,
    slug,
    image
  }`);
