import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";

import CardFooterInput from "./CardFooterInput";

import { Product } from "@/types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Link href={`/productos/${product.id}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={`Imagen de ${product.title}`}
          loading="lazy"
          src={product.image}
        />
      </Link>
      <CardBody>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="flex gap-2">
          <p className="relative text-2xl font-bold text-primary">
            {product.price.toFixed(2)} USD
          </p>
          {product.fake_price && (
            <p className="text-lg font-bold text-danger/70 line-through">
              {product.fake_price.toFixed(2)} USD
            </p>
          )}
        </div>
      </CardBody>
      <CardFooter>
        <CardFooterInput col product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
