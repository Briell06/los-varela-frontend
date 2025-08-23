import { Carousel } from "./ui/aceternityCarousel";

import { endpoint } from "@/config/site";
import { Category } from "@/types";

const AceternityCategoryCarousel = async () => {
  const categories = await fetch(`${endpoint}categories`).then(
    (res): Promise<Category[]> => res.json(),
  );

  const slides = categories.map((category: Category) => {
    return {
      title: category.title,
      button: "Ver categoría",
      src: category.image,
    };
  });

  return <Carousel slides={slides} />;
};

export default AceternityCategoryCarousel;
