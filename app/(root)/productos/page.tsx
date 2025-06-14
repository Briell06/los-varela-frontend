import CategoryCarousel from "@/components/CategoryCarousel";
import HeaderLink from "@/components/HeaderLink";
import ProductCard from "@/components/ProductCard";
import { productsQuery } from "@/config/queries";
import { BiCategory } from "react-icons/bi";

interface Props {
  searchParams: Promise<{ query?: string }>;
}

const ProductsPage = async ({ searchParams }: Props) => {
  const query = (await searchParams).query;
  const products = await productsQuery(query);

  return (
    <>
      <h3 className="flex items-center gap-2 text-center text-3xl">
        <BiCategory /> Todas las categorías
      </h3>
      <CategoryCarousel />
      <div className="flex items-center justify-center">
        <HeaderLink link={query ? true : false} href="/productos">
          {query ? "Ir a inicio" : "Todos los productos"}
        </HeaderLink>
      </div>
      <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 && (
          <h1 className="text-center font-mono text-4xl font-bold">
            No se ha podido encontrar el producto
          </h1>
        )}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default ProductsPage;
