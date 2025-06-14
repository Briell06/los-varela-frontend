import FooterInput from "@/components/FooterInput";
import HeaderLink from "@/components/HeaderLink";
import ProductCard from "@/components/ProductCard";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductByIdQuery, productsQuery } from "@/config/queries";
import { Product } from "@/types";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const id = (await params).id;
  const product = await ProductByIdQuery(id);
  const categories = await productsQuery(product.category);

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div>
        <div className="grid place-content-center">
          <HeaderLink link={true} href="/productos">
            Ir a inicio
          </HeaderLink>
        </div>
        <Card className="mx-auto w-fit rounded-t-none">
          <CardHeader className="flex flex-col items-center justify-center">
            <Image
              alt="Imagen del producto"
              className="mx-auto object-contain"
              src={product.image}
              loading="lazy"
            />
          </CardHeader>
          <CardBody className="flex flex-col items-center gap-5 text-center">
            <h3 className="text-center text-4xl font-bold">{product.title}</h3>
            <p className="text-center text-3xl font-semibold text-primary">
              {product.price.toFixed(2)} USD
            </p>
            <p className="text-center text-xl font-semibold text-content4-foreground">
              {product.description}
            </p>
          </CardBody>
          <CardFooter className="flex flex-col items-center justify-center">
            <FooterInput />
            <ShoppingCartButton className="mt-5 w-full" />
          </CardFooter>
        </Card>
      </div>
      <div>
        <h4 className="mb-20 font-mono text-3xl font-bold">
          Otros productos similares
        </h4>
        <section>
          <Carousel className="mx-auto max-w-[95vw]">
            <CarouselContent>
              {categories.slice(0, 4).map((category: Product) => (
                <CarouselItem
                  className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  key={category.id}
                >
                  <ProductCard product={category} />
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
    </div>
  );
};

export default page;
