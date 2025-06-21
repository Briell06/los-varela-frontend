"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/components/form-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CartProductsContext from "@/contexts/CartProductContext";
import SendInformationContext, {
  Info,
} from "@/contexts/SendInformationContext";

const CartForm = () => {
  const setInfo = SendInformationContext((s) => s.setInfo);
  const clearInfo = SendInformationContext((s) => s.clearInfo);
  const cartProducts = CartProductsContext((s) => s.products);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
      name: values.name,
      province: "",
    };

    setInfo(newItem);
  }

  return (
    <section className="mx-auto w-10/12">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoComplete="name"
                    disabled={isSubmitted}
                    label="Nombre completo"
                    labelPlacement={"outside"}
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
                variant="ghost"
                onPress={() => {
                  setIsSubmitted(false);
                  form.reset();
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
