import { MdCategory } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Categorías",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required().error("El campo es requerido"),
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
  icon: MdCategory,
  orderings: [
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
