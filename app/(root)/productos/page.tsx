import ProductCard from "@/components/ProductCard";
import { productsQuery } from "@/config/queries";

const ProductsPage = async () => {
  const products = await productsQuery();

  return (
    <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsPage;
