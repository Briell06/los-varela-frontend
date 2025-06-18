import { Carousel } from "./ui/aceternityCarousel";

import { categoriesQuery } from "@/config/queries";
import { Category } from "@/types";

const AceternityCategoryCarousel = async () => {
  const categories = await categoriesQuery();

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
