import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import Image from "next/image";

import CardFooterInput from "@/app/(root)/productos/CardFooterInput";
import ProductCard from "@/app/(root)/productos/ProductCard";
import HeaderLink from "@/components/HeaderLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { endpoint } from "@/config/site";
import { Product } from "@/types";

interface Props {
  params: Promise<{ id: string }>;
}

const productDetailPage = async ({ params }: Props) => {
  const id = (await params).id;
  const product: Product = await fetch(`${endpoint}products/${id}`).then(
    (res) => res.json(),
  );
  const products: Product[] = await fetch(
    `${endpoint}products?query=${product.category}`,
  ).then((res) => res.json());

  return (
    <>
      <div>
        <div className="grid place-content-center">
          <HeaderLink href="/productos" link={true}>
            Ir a inicio
          </HeaderLink>
        </div>
        <Card className="mx-auto w-fit md:grid md:grid-cols-2 md:place-items-center">
          <CardHeader className="flex flex-col items-center justify-center">
            <Link isExternal href={product.image}>
              <Image
                alt={`Imagen del producto`}
                className="mx-auto max-h-[80vh] object-contain"
                height={500}
                src={product.image}
                width={500}
              />
            </Link>
          </CardHeader>
          <div className="space-y-5">
            <CardBody className="flex flex-col items-center gap-5 text-center">
              <h3 className="text-center text-4xl font-bold lg:text-5xl">
                {product.title}
              </h3>
              <p className="text-center text-3xl font-semibold text-primary lg:text-5xl">
                {product.price?.toFixed(2)} USD
              </p>
              <p className="text-center text-xl font-semibold text-content4-foreground lg:text-2xl">
                {product.description}
              </p>
            </CardBody>
            <CardFooter className="flex flex-col items-center justify-center">
              <CardFooterInput col product={product} />
            </CardFooter>
          </div>
        </Card>
      </div>
      <div>
        <h4 className="mb-20 mt-10 font-mono text-3xl font-bold">
          Otros productos similares
        </h4>
        <section>
          <Carousel className="mx-auto w-full">
            <CarouselContent>
              {products
                .filter((product) => product.id !== id)
                .map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="w-full basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute -top-10 right-16">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>
      </div>
    </>
  );
};

export async function generateMetadata({ params }: Props) {
  const product = await fetch(`${endpoint}products/${(await params).id}`).then(
    (res) => res.json(),
  );

  return {
    title: product ? `Producto: ${product.title}` : "Producto",
    description: product ? product.description : "Producto individual",
    keywords: ["producto", "producto individual", "los varela"],
  };
}

export default productDetailPage;
