import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";
import { productsQuery } from "@/sanity/lib/queries";

const ProductsPage = async () => {
  const products = await client.fetch(productsQuery);

  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductsPage;
