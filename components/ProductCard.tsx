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
    <Card>
      <Link href={`/productos/${product.id}`}>
        <Image
          alt={`Imagen del producto: ${product.title}`}
          height={400}
          src={product.image}
          width={500}
        />
      </Link>
      <CardBody>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="flex gap-2">
          <p className="relative text-2xl font-bold text-primary">
            {product.price.toFixed(2)} UDS
          </p>
          {product.fake_price && (
            <p className="text-lg font-bold text-primary-300 line-through">
              {product.fake_price} USD
            </p>
          )}
        </div>
      </CardBody>
      <CardFooter>
        <FooterInput product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
