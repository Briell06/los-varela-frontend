"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Input } from "@heroui/input";

const FooterInput = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div className="flex items-center justify-start gap-1">
      <Button variant={"ghost"} isIconOnly>
        <BiMinus />
      </Button>
      <Input
        type="number"
        classNames={{
          mainWrapper: "w-10",
          input: "text-center",
        }}
        value={quantity.toString()}
        onChange={(e) => handleChange(e)}
      />
      <Button variant={"ghost"} isIconOnly>
        <BiPlus />
      </Button>
    </div>
  );
};
export default FooterInput;
