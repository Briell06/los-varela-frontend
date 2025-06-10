import { ProductsQueryResult } from "@/sanity/types";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import NextImage from "next/image";
import { default as Link } from "next/link";
import { MdAdd, MdRemove, MdShoppingCart } from "react-icons/md";

interface Props {
  product: ProductsQueryResult[0];
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Link href={`/productos/${product.slug}`}>
        <Image
          as={NextImage}
          alt="Imagen del producto"
          width={400}
          height={300}
          src={product.image ?? ""}
        />
      </Link>
      <CardBody>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price?.toFixed(2)}</p>
      </CardBody>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <Button isIconOnly variant="ghost">
              <MdAdd />
            </Button>
            <div className="w-12">
              <Input
                classNames={{ input: "text-center", inputWrapper: "p-0" }}
                type="number"
                placeholder="1"
              />
            </div>
            <Button isIconOnly variant="ghost">
              <MdRemove />
            </Button>
          </div>
          <Button color="primary">
            <MdShoppingCart /> Añadir al carrito
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
