import CategoryCarousel from "@/components/CategoryCarousel";
import HeaderLink from "@/components/HeaderLink";
import ProductCard from "@/components/ProductCard";
import { productsQuery } from "@/config/queries";
import { Button } from "@heroui/button";
import { MdOutlineCategory } from "react-icons/md";

interface Props {
  searchParams: Promise<{ query?: string }>;
}

const ProductsPage = async ({ searchParams }: Props) => {
  const query = (await searchParams).query;
  const products = await productsQuery(query);

  return (
    <>
      {query ? null : (
        <>
          <Button
            variant="light"
            size="lg"
            className="mx-auto flex items-center justify-center gap-2 text-center font-mono text-3xl font-bold tracking-tighter"
            startContent={<MdOutlineCategory />}
          >
            Categorías
          </Button>
          <CategoryCarousel />
        </>
      )}
      <div className="flex items-center justify-center">
        <HeaderLink link={query ? true : false} href="/productos">
          {query ? "Ir a inicio" : "Todos los productos"}
        </HeaderLink>
      </div>
      {query && products.length > 0 && (
        <h3 className="mb-10 text-center font-mono text-4xl font-semibold tracking-tighter text-gray-500">
          Resultados de la búsqueda &quot;
          {query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()}
          &quot;
        </h3>
      )}
      <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 && (
          <h1 className="text-center font-mono text-4xl font-bold">
            No se encontraron productos
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
