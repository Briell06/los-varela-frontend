"use client";

import { z } from "zod";

import { locations } from "@/config/site";

export const formSchema = z.object({
  usaPhoneNumber: z
    .string({ message: "Por favor ingrese un número de teléfono" })
    .regex(
      /^\d{10}$/,
      'Número de teléfono inválido ( no es necesario incluir "()" o "+1" )',
    ),

  cubaPhoneNumber: z
    .string({ message: "Por favor ingrese un número de teléfono" })
    .regex(/^\d{8}$/, "Número de teléfono inválido"),

  locationPrice: z.enum(
    locations.map((loc) => loc.name) as [string, ...string[]],
    { message: "Seleccione una ubicación" },
  ),

  address: z
    .string({ message: "Por favor, ingrese su dirección" })
    .refine((val) => !val.includes("#"), {
      message: 'El caracter "#" no es legible, utilize "No" en su lugar',
    }),

  name: z.string({ message: "Por favor, ingrese su dirección" }),
});
