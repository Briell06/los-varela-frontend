"use client";

import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import CartProductsContext from "@/contexts/CartProductContext";

const CartIcon = () => {
  const { products } = CartProductsContext();

  return (
    <Badge
      color="primary"
      content={products.length}
      isInvisible={products.length === 0}
      showOutline={false}
      variant="solid"
    >
      <Button
        isIconOnly
        aria-label="Carrito"
        as={products.length > 0 ? Link : undefined}
        href={products.length > 0 ? "/carrito" : undefined}
        variant="light"
      >
        <ShoppingCart aria-label="carrito" />
      </Button>
    </Badge>
  );
};

export default CartIcon;
