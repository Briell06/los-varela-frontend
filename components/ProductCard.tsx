import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

import FooterInput from "./FooterInput";

import { Product } from "@/types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card isFooterBlurred isHoverable>
      <Link href={`/productos/${product.id}`}>
        <Image
          alt={`Imagen del producto: ${product.title}`}
          className="rounded-b-none object-contain"
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
        <FooterInput product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
