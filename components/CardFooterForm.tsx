"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { LuMinus, LuPlus } from "react-icons/lu";

const CardFooterForm = () => {
  const [amount, setAmount] = useState(1);

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
    <div className="flex gap-0.5">
      <Button
        isIconOnly={true}
        role="button"
        aria-labelledby="decrementar cantidad"
        aria-label="decrementar cantidad"
        onPress={handleDecrement}
        variant={"light"}
        className="rounded-full"
      >
        <LuMinus />
      </Button>
      <Input
        type="number"
        aria-label="cantidad"
        aria-describedby="cantidad de productos"
        value={amount.toFixed(0)}
        onChange={handleChange}
        classNames={{ input: "text-center" }}
        className="shadow-xs w-10 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <Button
        isIconOnly={true}
        role="button"
        aria-label="incrementar cantidad"
        aria-labelledby="incrementar cantidad"
        onPress={handleIncrement}
        variant="light"
        className="rounded-full"
      >
        <LuPlus />
      </Button>
    </div>
  );
};

export default CardFooterForm;
