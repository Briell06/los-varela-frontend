import { MdShoppingCart } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Productos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required().error("El campo es requerido"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      hidden: ({ document }) => !document?.title,
      description:
        "Aquí no tienes que poner nada, solo taca el botón de generar",
      validation: (Rule) => Rule.required().error("El campo es requerido"),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("El campo es requerido"),
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
      validation: (Rule) => Rule.required().error("El campo es requerido"),
    }),
    defineField({
      name: "productCategory",
      title: "Categoría",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required().error("El campo es requerido"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
  icon: MdShoppingCart,
  orderings: [
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
