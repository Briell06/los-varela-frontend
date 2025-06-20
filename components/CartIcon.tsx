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
      <Button isIconOnly as={Link} href={"/carrito"} variant="light">
        <ShoppingCart />
      </Button>
    </Badge>
  );
};

export default CartIcon;
