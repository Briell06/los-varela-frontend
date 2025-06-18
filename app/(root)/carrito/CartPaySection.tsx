"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { IconLabel } from "@tabler/icons-react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

import CartProductsContext from "@/contexts/CartProductContext";

const CartPaySection = () => {
  const router = useRouter();

  const cartProducts = CartProductsContext((s) => s.products);
  const clearCart = CartProductsContext((s) => s.clearCart);

  return (
    <Card
      className={`mx-auto grid w-full max-w-2xl gap-5 space-y-5 rounded p-5`}
    >
      <CardHeader className={"flex gap-2 text-xl"}>
        <IconLabel className={"-rotate-[140deg]"} />
        <h3>Resumen de la orden</h3>
      </CardHeader>
      <CardBody>
        <Table hideHeader color="primary" radius={"none"}>
          <TableHeader>
            <TableColumn>Motivo</TableColumn>
            <TableColumn>Precio</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableCell>Productos en el carrito</TableCell>
              <TableCell>
                {cartProducts.reduce(
                  (acc, curr) => acc + curr.amount * curr.product.price,
                  0,
                )}{" "}
                USD
              </TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell>Precio de envío</TableCell>
              <TableCell>x</TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell className="text-lg font-bold">Total</TableCell>
              <TableCell className="text-lg font-bold">
                {cartProducts.reduce(
                  (acc, curr) => acc + curr.amount * curr.product.price,
                  0,
                ) + 5}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
      <CardFooter className="flex-col justify-center gap-2">
        <Button
          className="w-10/12"
          color={"danger"}
          variant="ghost"
          onPress={() => {
            router.push("/productos");
            clearCart();
          }}
        >
          Eliminar productos
        </Button>
        <Button className="w-10/12 font-semibold" color="primary">
          Realizar Compra
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartPaySection;
