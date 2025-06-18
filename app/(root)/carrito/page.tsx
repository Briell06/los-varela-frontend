"use client";

import { Button } from "@heroui/button";
import Image from "next/image";

import HeaderLink from "@/components/HeaderLink";
import CartProductsContext from "@/contexts/CartProductContext";

const CartPage = () => {
  const products = CartProductsContext((s) => s.products);
  const removeProduct = CartProductsContext((s) => s.removeProduct);

  return (
    <>
      <div className="w-full text-center">
        <HeaderLink className="underline" href="/productos" link={true}>
          Seguir comprando
        </HeaderLink>
      </div>
      <div className="mx-auto grid w-full max-w-2xl space-y-5">
        {products.length > 0 ? (
          products.map(({ product, amount }) => (
            <div
              key={product.id}
              className="flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-5">
                <Image
                  alt={product.title}
                  height={100}
                  src={product.image}
                  width={100}
                />
                <p className="text-xl font-bold">{product.title}</p>
                <p className="text-lg font-semibold">{amount}</p>
              </div>
              <Button
                className="justify-self-end"
                color="danger"
                variant="bordered"
                onPress={() => removeProduct(product.id)}
              >
                Eliminar
              </Button>
            </div>
          ))
        ) : (
          <p className="text-center">No hay productos en el carrito</p>
        )}
      </div>
    </>
  );
};

export default CartPage;
