"use client";

import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import CartProductsContext from "@/contexts/CartProductContext";

const CartIcon = () => {
  const { products } = CartProductsContext();
  const router = useRouter();

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
        variant="light"
        onPress={() => {
          router.push("/carrito");
        }}
      >
        <ShoppingCart />
      </Button>
    </Badge>
  );
};

export default CartIcon;
