import { Category } from "@/utils/types";
import CarouselCard from "./CarouselCard";
import { Carousel, CarouselContent } from "./ui/carousel";

const CategoryCarousel = async () => {
  const categories: Category[] = await fetch(
    "http://localhost:8000/categories",
    {
      next: { revalidate: 60 },
    },
  ).then((res) => res.json());

  return (
    <div className="my-15 px-5">
      <p className="mb-5 text-center text-2xl font-bold">Explorar Categorías</p>
      <Carousel>
        <CarouselContent>
          {categories.map((category) => (
            <CarouselCard key={category.id} category={category} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
