import { categoriesQuery } from "@/config/queries";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import NextLink from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const CategoryCarousel = async () => {
  const categories = await categoriesQuery();
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="mx-auto mb-5 max-w-xs"
    >
      <CarouselContent className="my-5 mb-10">
        {categories.map((category) => (
          <CarouselItem
            className="basis-1/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={category.id}
          >
            <Card
              as={NextLink}
              href={`/productos?query=${category.title}`}
              className="mx-auto flex h-full w-10/12"
            >
              <CardHeader className="">
                <Image
                  width={95}
                  height={95}
                  src={category.image}
                  className="mx-auto aspect-square rounded-full"
                  alt="Category Image"
                />
              </CardHeader>
              <CardBody className="text-center">
                <p className="text-2xl">{category.title}</p>
              </CardBody>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-3 left-1/2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default CategoryCarousel;
