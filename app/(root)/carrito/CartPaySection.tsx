"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { addToast } from "@heroui/toast";
import { IconLabel } from "@tabler/icons-react";
import { Trash } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import CartProductsContext from "@/contexts/CartProductContext";
import SendInformationContext from "@/contexts/SendInformationContext";
import { CartProduct } from "@/types";

export const CartPaySection = () => {
  const cartProducts = CartProductsContext((s) => s.products);
  const clearCart = CartProductsContext((s) => s.clearCart);
  const info = SendInformationContext((s) => s.info);
  const [savedProducts, setSavedProducts] = useState<CartProduct[]>([]);

  const generateWhatsAppMessage = () => {
    return (
      "*Resumen de la compra*%0A%0A-------Compra---------------------------------%0A" +
      JSON.stringify(
        savedProducts
          .map(
            ({ product, amount }) =>
              `- *${amount} X ${product.title}* = ${(amount * product.price).toFixed(2)} USD`,
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
      "%0A------------------------------------------------%0A" +
      "*Nombre:* " +
      JSON.stringify(info.name) +
      "%0A" +
      "*Dirección:* " +
      JSON.stringify(info.address) +
      "%0A%0A" +
      "*Total* = " +
      `*${(cartProducts.reduce((acc, curr) => curr.product.price * curr.amount + acc, 0) + (info.locationPrice ?? 0)).toFixed(2)} USD*`
    )
      .replace("\n", "%0A")
      .replace(",", "%0A")
      .replace("[", "")
      .replace("]", "");
  };

  return (
    <Card
      className={`mx-auto grid h-fit w-full max-w-2xl gap-5 space-y-5 rounded`}
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
                +1 {SendInformationContext((s) => s.info.usaPhoneNumber)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Teléfono de Cuba:</TableCell>
              <TableCell>
                +53 {SendInformationContext((s) => s.info.cubaPhoneNumber)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ubicación:</TableCell>
              <TableCell>
                {SendInformationContext((s) => s.info.locationName)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dirección:</TableCell>
              <TableCell>
                {SendInformationContext((s) => s.info.address)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nombre:</TableCell>
              <TableCell>
                {SendInformationContext((s) => s.info.name)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
      <CardBody>
        <Table radius={"none"}>
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
                ? `https://wa.me/+5351326441?text=${generateWhatsAppMessage()}`
                : undefined
            }
            isDisabled={cartProducts.length === 0}
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
                : cartProducts.length === 0
                  ? () =>
                      addToast({
                        title: "Carrito vacío",
                        description: "Por favor, agregue productos al carrito",
                        color: "danger",
                        variant: "flat",
                      })
                  : () => {
                      setSavedProducts(cartProducts);
                      clearCart();
                    }
            }
          >
            Realizar Compra por WhatsApp
          </Button>
        }
        <p className="text-muted-foreground text-center text-sm">
          Al hacer clic en &quot;Realizar Compra por WhatsApp&quot;, no
          modifique el mensaje generado automáticamente.
        </p>
      </CardFooter>
    </Card>
  );
};
