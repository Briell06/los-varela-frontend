"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronRight, MapPin, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/components/form-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { locations } from "@/config/site";
import CartProductsContext from "@/contexts/CartProductContext";
import SendInformationContext, {
  Info,
} from "@/contexts/SendInformationContext";

const CartForm = () => {
  const setInfo = SendInformationContext((s) => s.setInfo);
  const clearInfo = SendInformationContext((s) => s.clearInfo);
  const cartProducts = CartProductsContext((s) => s.products);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usaPhoneNumber: undefined,
      cubaPhoneNumber: undefined,
      locationPrice: "",
      name: undefined,
      address: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
    addToast({
      title: "Información enviada correctamente",
      description: "Puede proseguir con su compra",
      color: "success",
      variant: "flat",
    });
    const newItem: Info = {
      usaPhoneNumber: Number(values.usaPhoneNumber),
      cubaPhoneNumber: Number(
        values.cubaPhoneNumber.replace("-", "").replace("+53", ""),
      ),
      locationName: values.locationPrice,
      locationPrice: locations.find((loc) => loc.name === values.locationPrice)!
        .price,
      address: values.address,
      name: values.name,
    };

    setInfo(newItem);
  }

  // @ts-ignore
  return (
    <section className="mx-auto w-10/12">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="usaPhoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-primary">
                  Numero de teléfono
                </FormLabel>
                <FormControl>
                  <Input
                    color="primary"
                    description="Este será el número que utilizaremos en caso de contactarlo"
                    disabled={isSubmitted}
                    placeholder={"(123) 456-7890"}
                    startContent="+1"
                    type="tel"
                    variant="underlined"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cubaPhoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-primary">
                  Numero de teléfono de quien recibe el pedido
                </FormLabel>
                <FormControl>
                  <Input
                    color="primary"
                    disabled={isSubmitted}
                    placeholder="55123456"
                    startContent="+53"
                    type="tel"
                    variant="underlined"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locationPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-primary">
                  Seleccione la ubicación donde se entregará el pedido
                </FormLabel>
                <FormControl>
                  <Autocomplete
                    classNames={{ selectorButton: "text-foreground" }}
                    color="primary"
                    description="Si no encuentra su ubicación es debido a que la misma aún no se encuentra disponible"
                    disabled={isSubmitted}
                    placeholder={"Seleccione una ubicación"}
                    selectedKey={field.value}
                    startContent={<MapPin />}
                    variant="underlined"
                    onSelectionChange={field.onChange}
                    {...field}
                  >
                    {locations.map((location) => (
                      <AutocompleteItem key={location.name} variant="shadow">
                        {location.name}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-primary">
                  Dirección a entregar
                </FormLabel>
                <FormControl>
                  <Input
                    color="primary"
                    disabled={isSubmitted}
                    placeholder={"Ave 12 #3456 e/7 y 8"}
                    type="text"
                    variant="underlined"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-primary">
                  Nombre de la persona que recibirá el envío
                </FormLabel>
                <FormControl>
                  <Input
                    color="primary"
                    disabled={isSubmitted}
                    placeholder={"John Doe"}
                    type="text"
                    variant="underlined"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <div className="mx-auto flex flex-col items-center justify-center gap-2">
            {isSubmitted && (
              <Button
                color={
                  isSubmitted || cartProducts.length === 0
                    ? "danger"
                    : "primary"
                }
                fullWidth={true}
                startContent={<X />}
                variant="ghost"
                onPress={() => {
                  setIsSubmitted(false);
                  clearInfo();
                }}
              >
                Volver a enviar
              </Button>
            )}
            <Button
              color={
                isSubmitted || cartProducts.length === 0 ? "default" : "primary"
              }
              disabled={isSubmitted || cartProducts.length === 0}
              endContent={
                isSubmitted || cartProducts.length === 0 ? undefined : (
                  <ChevronRight />
                )
              }
              fullWidth={true}
              startContent={
                isSubmitted ? (
                  <Check />
                ) : cartProducts.length === 0 ? (
                  <X />
                ) : undefined
              }
              type="submit"
            >
              {isSubmitted
                ? "Enviado"
                : cartProducts.length === 0
                  ? "No hay productos en el carrito"
                  : "Enviar información"}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CartForm;
