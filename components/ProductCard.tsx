import { urlFor } from "@/sanity/lib/image";
import { ProductsQueryResult } from "@/sanity/types";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import Link from "next/link";
import { MdAdd, MdRemove } from "react-icons/md";
import ShoppingCartButton from "./ShoppingCartButton";

interface Props {
  product: ProductsQueryResult[0];
}

const ProductCard = ({ product }: Props) => {
  const imageUrl = product.image ? urlFor(product.image).url() : "";

  return (
    <Card className="">
      <Link href={`/productos/${product._id}`}>
        <Image alt="Imagen del producto" src={imageUrl} />
      </Link>
      <CardBody>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-blue-500">{product.price?.toFixed(2)} USD</p>
      </CardBody>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <Button isIconOnly variant="light">
              <MdAdd />
            </Button>
            <div className="w-12">
              <Input
                className=""
                classNames={{ input: "text-center" }}
                type="number"
                placeholder="1"
              />
            </div>
            <Button isIconOnly variant="light">
              <MdRemove />
            </Button>
          </div>
          <ShoppingCartButton />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
