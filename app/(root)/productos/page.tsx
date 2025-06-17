import { Button } from "@heroui/button";
import { Metadata } from "next";
import { MdOutlineCategory } from "react-icons/md";

import AceternityCategoryCarousel from "@/components/AceternityCategoryCarousel";
import HeaderLink from "@/components/HeaderLink";
import ProductCard from "@/components/ProductCard";
import { productsQuery } from "@/config/queries";

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
            className="mx-auto flex items-center justify-center gap-2 text-center text-2xl font-bold tracking-tighter"
            size="lg"
            startContent={<MdOutlineCategory />}
            variant="light"
          >
            Categorías
          </Button>
          <div className="relative min-h-fit w-full overflow-hidden py-5 pb-16 md:mx-auto">
            <AceternityCategoryCarousel />
          </div>
        </>
      )}
      <div className="flex items-center justify-center">
        <HeaderLink href="/productos" link={query ? true : false}>
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
      {products.length === 0 && (
        <h1 className="text-center font-mono text-4xl font-bold">
          No se encontraron productos
        </h1>
      )}
      <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default ProductsPage;

export const metadata: Metadata = {
  title: "Productos",
  description: "Todos los productos disponibles",
  keywords: ["productos", "todos los productos", "los varela"],
};
