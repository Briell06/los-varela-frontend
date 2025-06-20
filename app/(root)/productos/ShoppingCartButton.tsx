"use client";

import { Button } from "@heroui/button";
import { MdCheck, MdShoppingCart } from "react-icons/md";
import { useState } from "react";

import CartProductsContext from "@/contexts/CartProductContext";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

interface Props {
  product: Product;
  amount: number;
  className?: string;
}

const ShoppingCartButton = ({ product, amount, className }: Props) => {
  const [isAdded, setIsAdded] = useState(false);
  const products = CartProductsContext((s) => s.products);
  const addProduct = CartProductsContext((s) => s.addProduct);

  return (
    <Button
      className={cn(className)}
      color="primary"
      startContent={isAdded ? <MdCheck /> : <MdShoppingCart />}
      variant="solid"
      onPress={() => {
        addProduct({ product, amount }, products);
        setIsAdded(true);
      }}
    >
      {isAdded ? "Añadido" : "Añadir al carrito"}
    </Button>
  );
};

export default ShoppingCartButton;
