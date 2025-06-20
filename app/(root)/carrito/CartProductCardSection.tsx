"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";

import CartProductsContext from "@/contexts/CartProductContext";
import CardFooterInput from "@/app/(root)/productos/CardFooterInput";

const CartProductCardSection = () => {
  const cartProducts = CartProductsContext((s) => s.products);

  return (
    <Card
      className="mx-auto grid w-full max-w-2xl space-y-5 rounded p-5"
      shadow="lg"
    >
      <p className="font-mono font-bold md:text-center md:text-2xl">
        Mi Carrito ({cartProducts.length} productos)
      </p>
      {cartProducts.length > 0 ? (
        cartProducts.map(({ product, amount }) => (
          <Card
            key={product.id}
            className="grid md:grid-cols-[1fr_3fr] md:grid-rows-2 md:items-center md:justify-center"
          >
            <Image
              alt={product.title}
              className="object-containe md:row-span-full"
              height={400}
              src={product.image}
              width={500}
            />
            <CardBody className="md:justify-self-start md:text-center">
              <h3 className="text-2xl">
                {product.title}{" "}
                {amount > 1 && <span className="text-primary">({amount})</span>}
              </h3>
              <p className="mt-2 text-2xl font-bold text-primary">
                {product.price * amount}
                USD
              </p>
            </CardBody>
            <CardFooter className="md:row-start-2 md:mx-auto md:justify-self-end">
              <CardFooterInput col eliminate product={product} />
            </CardFooter>
          </Card>
        ))
      ) : (
        <p className="text-center">No hay productos en el carrito</p>
      )}
    </Card>
  );
};

export default CartProductCardSection;
