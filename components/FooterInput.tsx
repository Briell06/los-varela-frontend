"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

import ShoppingCartButton from "./ShoppingCartButton";

import { Product } from "@/types";

interface Props {
  product: Product;
}

const FooterInput = ({ product }: Props) => {
  const [amount, setAmount] = useState<number>(1);

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

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <div className="flex items-center justify-start gap-1">
        <Button
          isIconOnly
          aria-label="Disminuir cantidad"
          className="rounded-full"
          color="primary"
          variant={"bordered"}
          onPress={handleDecrement}
        >
          <BiMinus className="text-default-foreground" />
        </Button>
        <Input
          aria-label="Cantidad"
          className="mx-auto max-w-16"
          classNames={{
            input: "text-center",
          }}
          color="primary"
          type="number"
          value={amount?.toFixed().toString()}
          variant="faded"
          onChange={(e) => handleChange(e)}
        />
        <Button
          isIconOnly
          aria-label="Aumentar cantidad"
          className="rounded-full"
          color="primary"
          variant={"bordered"}
          onPress={handleIncrement}
        >
          <BiPlus className="text-default-foreground" />
        </Button>
      </div>
      <ShoppingCartButton amount={amount} product={product} />
    </div>
  );
};

export default FooterInput;
