"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { IconLabel } from "@tabler/icons-react";
import { Trash } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "@heroui/link";
import { addToast } from "@heroui/toast";

import CartProductsContext from "@/contexts/CartProductContext";
import SendInformationContext from "@/contexts/SendInformationContext";

export const CartPaySection = () => {
  const cartProducts = CartProductsContext((s) => s.products);
  const clearCart = CartProductsContext((s) => s.clearCart);
  const info = SendInformationContext((s) => s.info);

  const whatsappMessage = () => {
    return (
      "*Resumen de la compra*%0A%0A-------Compra---------------------------------%0A" +
      JSON.stringify(
        cartProducts
          .map(
            ({ product, amount }) =>
              `- *${amount} X ${product.title}* = ${amount * product.price} USD%0A`,
          )
          .join("%0A"),
        null,
        2,
      )
        .replace('"', "")
        .replace('"', "") +
      "%0A-------------------------------------------------%0A%0A*Datos de contacto:*%0A%0A-------Datos----------------------------------%0A" +
      "*Teléfono de Estados Unidos:* " +
      JSON.stringify(info.usaPhoneNumber) +
      "%0A" +
      "*Teléfono de Cuba:* " +
      JSON.stringify(info.cubaPhoneNumber) +
      "%0A" +
      "*Ubicación:* " +
      JSON.stringify(info.locationName) +
      ` (${info.locationPrice} USD)` +
      "%0A------------------------------------------------%0A%0A" +
      "*Total* = " +
      `*${cartProducts.reduce((acc, curr) => curr.product.price * curr.amount + acc, 0) + (info.locationPrice ?? 0)} USD*`
    )
      .replace("\n", "%0A")
      .replace(",", "%0A")
      .replace("[", "")
      .replace("]", "");
  };

  return (
    <Card
      className={`mx-auto grid h-fit w-full max-w-2xl gap-5 space-y-5 rounded p-5`}
    >
      <CardHeader className={"flex gap-2 text-xl"}>
        <IconLabel className={"-rotate-[140deg]"} />
        <h3>Resumen de la orden</h3>
      </CardHeader>
      <CardBody>
        <Table fullWidth={true} radius={"none"}>
          <TableHeader>
            <TableColumn>Información</TableColumn>
            <TableColumn>
              <></>
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Teléfono de Estados Unidos:</TableCell>
              <TableCell className="whitespace-nowrap">
                {SendInformationContext((s) => s.info.usaPhoneNumber)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Teléfono de Cuba:</TableCell>
              <TableCell>
                {SendInformationContext((s) => s.info.cubaPhoneNumber)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ubicación:</TableCell>
              <TableCell>
                {SendInformationContext((s) => s.info.locationName)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
      <CardBody>
        <Table fullWidth={true} radius={"none"}>
          <TableHeader>
            <TableColumn>Información adicional</TableColumn>
            <TableColumn>
              <></>
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableCell>Productos en el carrito</TableCell>
              <TableCell className="whitespace-nowrap">
                {cartProducts
                  .reduce(
                    (acc, curr) => acc + curr.amount * curr.product.price,
                    0,
                  )
                  .toFixed(2) + " USD"}
              </TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell>Precio de envío</TableCell>
              <TableCell>{info.locationPrice?.toFixed(2) || 0} USD</TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell className="text-lg font-bold">Total</TableCell>
              <TableCell className="whitespace-nowrap text-lg font-bold text-success">
                {(
                  cartProducts.reduce(
                    (acc, curr) => acc + curr.amount * curr.product.price,
                    0,
                  ) + (info.locationPrice ?? 0)
                ).toFixed(2) + " USD"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
      <CardFooter className="flex-col justify-center gap-2">
        <Button
          className="w-full"
          color={"danger"}
          startContent={<Trash />}
          variant="ghost"
          onPress={() => {
            clearCart();
          }}
        >
          Eliminar productos
        </Button>
        {
          <Button
            as={Link}
            className="w-full font-semibold"
            color="primary"
            href={
              info.usaPhoneNumber !== undefined &&
              info.cubaPhoneNumber !== undefined &&
              info.locationName !== undefined &&
              info.locationPrice !== undefined
                ? `https://wa.me/+5351326441?text=${whatsappMessage()}`
                : undefined
            }
            isExternal={
              info.usaPhoneNumber !== undefined &&
              info.cubaPhoneNumber !== undefined &&
              info.locationName !== undefined &&
              info.locationPrice !== undefined
            }
            startContent={<FaWhatsapp size={25} />}
            onPress={
              !info.usaPhoneNumber ||
              !info.cubaPhoneNumber ||
              !info.locationName ||
              !info.locationPrice
                ? () => {
                    addToast({
                      title: "Información incompleta",
                      description:
                        "Por favor, complete la información de contacto",
                      color: "danger",
                      variant: "flat",
                    });
                  }
                : undefined
            }
          >
            Realizar Compra por Whatsapp
          </Button>
        }
      </CardFooter>
    </Card>
  );
};
