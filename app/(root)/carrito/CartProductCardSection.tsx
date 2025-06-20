"use client";

import React from "react";
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
      <p className="font-mono font-bold">
        Mi Carrito ({cartProducts.length} productos)
      </p>
      {cartProducts.length > 0 ? (
        cartProducts.map(({ product, amount }) => (
          <Card key={product.id} className="grid">
            <Image
              alt={product.title}
              height={400}
              src={product.image}
              width={500}
            />
            <CardBody>
              <h3 className="text-2xl">
                {product.title} <span className="text-primary">({amount})</span>
              </h3>
              <p className="mt-2 text-2xl font-bold text-primary">
                {product.price * amount}
                USD
              </p>
            </CardBody>
            <CardFooter>
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
