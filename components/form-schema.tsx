"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
});

export const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
  },
});

export const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values);
};
