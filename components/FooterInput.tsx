"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const FooterInput = () => {
  const [quantity, setQuantity] = useState<number>(1);

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
    <div className="flex items-center justify-start gap-1">
      <Button
        onPress={handleDecrement}
        className="rounded-full"
        color="primary"
        variant={"flat"}
        isIconOnly
      >
        <BiMinus className="text-default-foreground" />
      </Button>
      <Input
        type="number"
        variant="underlined"
        color="primary"
        value={amount.toFixed().toString()}
        onChange={(e) => handleChange(e)}
        className="mx-auto max-w-16"
        classNames={{
          input: "text-center",
        }}
      />
      <Button
        onPress={handleIncrement}
        className="rounded-full"
        variant={"flat"}
        color="primary"
        isIconOnly
      >
        <BiPlus className="text-default-foreground" />
      </Button>
    </div>
  );
};
export default FooterInput;
