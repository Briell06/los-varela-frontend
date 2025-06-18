import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

import FooterInput from "@/components/FooterInput";
import HeaderLink from "@/components/HeaderLink";
import ProductCard from "@/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductByIdQuery, productsQuery } from "@/config/queries";

interface Props {
  params: Promise<{ id: string }>;
}

const productDetailPage = async ({ params }: Props) => {
  const id = (await params).id;
  const product = await ProductByIdQuery(id);
  const products = await productsQuery(product.category);

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
            <Image
              isZoomed
              alt="Imagen del producto"
              className="mx-auto max-h-[80vh] object-contain"
              fetchPriority="high"
              loading="lazy"
              src={product.image}
            />
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
              <FooterInput product={product} />
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
                    className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
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
  const product = await ProductByIdQuery((await params).id);

  return {
    title: product ? `Producto: ${product.title}` : "Producto",
    description: product ? product.description : "Producto individual",
    keywords: ["producto", "producto individual", "los varela"],
  };
}

export default productDetailPage;
