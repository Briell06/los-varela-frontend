"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

import ShoppingCartButton from "./ShoppingCartButton";

import CartProductsContext from "@/contexts/CartProductContext";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

interface Props {
  product: Product;
  col?: boolean;
  eliminate?: boolean;
}

const CardFooterInput = ({ product, col, eliminate }: Props) => {
  const [amount, setAmount] = useState<number>(1);
  const products = CartProductsContext((s) => s.products);
  const removeProduct = CartProductsContext((s) => s.removeProduct);
  const updateProductQuantity = CartProductsContext(
    (s) => s.updateProductQuantity,
  );
  const currProd = products.find((p) => p.product.id === product.id);

  const handleIncrement = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    if (!value) setAmount(0);
    if (value >= 0) setAmount(value);
  };

  useEffect(() => {
    if (eliminate && currProd) setAmount(currProd.amount);
  }, [currProd]);

  return (
    <div
      className={cn(
        col && "flex-col space-y-5",
        "flex w-full items-center justify-between gap-1",
      )}
    >
      <div className="flex shrink items-center justify-start gap-1">
        <Button
          isIconOnly
          aria-label="Disminuir cantidad"
          className="shrink rounded-full"
          color="primary"
          variant={"bordered"}
          onPress={
            eliminate
              ? () => {
                  if (currProd && Number(currProd?.amount.toFixed()) > 1)
                    updateProductQuantity(currProd?.product.id ?? "", -1);
                }
              : handleDecrement
          }
        >
          <BiMinus className="text-default-foreground" />
        </Button>
        <Input
          aria-label="Cantidad"
          className="mx-auto max-w-16 shrink"
          classNames={{
            input: "text-center",
          }}
          color="primary"
          disabled={eliminate}
          type="number"
          value={
            eliminate
              ? currProd?.amount.toFixed().toString()
              : amount?.toFixed().toString()
          }
          variant="faded"
          onChange={(e) => handleChange(e)}
        />
        <Button
          isIconOnly
          aria-label="Aumentar cantidad"
          className="shrink rounded-full"
          color="primary"
          variant={"bordered"}
          onPress={
            eliminate
              ? () => updateProductQuantity(currProd?.product.id ?? "", 1)
              : handleIncrement
          }
        >
          <BiPlus className="text-default-foreground" />
        </Button>
      </div>
      {eliminate ? (
        <Button
          className="w-10/12"
          color="danger"
          startContent={<Trash />}
          variant="ghost"
          onPress={() => removeProduct(product.id)}
        >
          Eliminar del carrito
        </Button>
      ) : (
        <div className={cn(col && "w-10/12", "grow-1")}>
          <ShoppingCartButton
            amount={amount}
            className={cn(col && "w-full")}
            product={product}
          />
        </div>
      )}
    </div>
  );
};

export default CardFooterInput;
