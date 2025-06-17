import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

import FooterInput from "./FooterInput";
import ShoppingCartButton from "./ShoppingCartButton";

import { Product } from "@/types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card isHoverable>
      <Link href={`/productos/${product.id}`}>
        <Image
          alt={`Imagen del producto: ${product.title}`}
          className="rounded-b-none"
          fetchPriority="high"
          loading="lazy"
          src={product.image}
        />
      </Link>
      <CardBody>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-3 text-3xl font-semibold text-blue-500">
          {product.price?.toFixed(2)} USD
        </p>
      </CardBody>
      <CardFooter>
        <div className="flex w-full items-center justify-between gap-2">
          <FooterInput />
          <ShoppingCartButton />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
