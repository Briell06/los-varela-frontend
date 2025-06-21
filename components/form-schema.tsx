"use client";

import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Debe contener mas de 2 caracteres" })
    .max(50),
});
