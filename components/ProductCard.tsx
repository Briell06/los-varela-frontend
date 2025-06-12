import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { default as Link } from "next/link";
import ShoppingCartButton from "./ShoppingCartButton";
import { Product } from "@/config/types";
import CardFooterForm from "@/components/CardFooterForm";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="shrink-0">
      <Link href={`/productos/${product.slug}`}>
        <Image
          // as={NextImage}
          alt="Imagen del producto"
          width={400}
          height={300}
          src={product.image}
        />
      </Link>
      <CardBody>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-blue-500">{product.price.toFixed(2)} USD</p>
      </CardBody>
      <CardFooter>
        <div className="flex w-full items-center justify-between gap-2">
          <CardFooterForm />
          <ShoppingCartButton />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
