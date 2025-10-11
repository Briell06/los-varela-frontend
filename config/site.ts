export type SiteConfig = typeof siteConfig;

export interface footerLinkType {
  label: string;
  href: string;
}

export interface locationType {
  name: string;
  price: number;
}

export const locations: locationType[] = [
  {
    name: "Los Palos",
    price: 0.6,
  },
  {
    name: "Nueva Paz",
    price: 1,
  },
  {
    name: "Vegas",
    price: 2.5,
  },
  {
    name: "Cabezas",
    price: 3,
  },
  {
    name: "Bermejas",
    price: 5,
  },
  {
    name: "Alacranes",
    price: 8.5,
  },
  {
    name: "Unión de Reyes",
    price: 10,
  },
  {
    name: "Madruga",
    price: 8,
  },
  {
    name: "Lote Seco",
    price: 4.5,
  },
  {
    name: "La Reglita",
    price: 4.5,
  },
  {
    name: "2 de Mayo",
    price: 3,
  },
  {
    name: "San Nicolás",
    price: 6,
  },
  {
    name: "La lanza",
    price: 9,
  },
  {
    name: "Plan Sureste",
    price: 4.5,
  },
  {
    name: "Chambolì",
    price: 7,
  },
  {
    name: "Pipian",
    price: 6,
  },
  {
    name: "Primer paso",
    price: 3,
  },
  {
    name: "La esperanza",
    price: 2.5,
  },
  {
    name: "Central la margarita San Nicolás",
    price: 6,
  },
  {
    name: "Central Manuel Isla Los Palos",
    price: 0.6,
  },
];

export const endpoint = "https://losvarelaadmin.pythonanywhere.com/";

export const siteConfig = {
  name: "Los Varela",
  description: "Una aplicación para enviar combos a sus familiares en Cuba.",
  icons: {
    icon: "favicon.ico",
    apple: "apple-icon.png",
  },
  appName: "Los Varela",
  keyWords:
    "Los Varela, los varela, enviar, Cuba, cuba, envíos a Cuba, tienda, productos",
  abstract: "Enviar productos a Cuba",
  creator: "Briell Quintana",

  footerLinks: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/productos",
    },
    {
      label: "Instrucciones",
      href: "/instrucciones",
    },
  ],

  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    whatsApp: "https://wa.me/+5351326441",
  },
};
