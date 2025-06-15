export type SiteConfig = typeof siteConfig;

export interface footerLinkType {
  label: string;
  href: string;
}

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
    whatsApp: "https://wa.me/",
  },
};
