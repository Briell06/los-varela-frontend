import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import FooterVideo from "./FooterVideo";
import { FooterButton } from "./ui/TailwindCssButton";

import { footerLinkType, siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer
      aria-label="Pie de página de Los Varela"
      className="flex w-full flex-col items-center border-t-1 border-white/10 bg-transparent pt-5 md:px-20"
      role="contentinfo"
    >
      <div className="flex w-full items-center justify-center gap-10 max-md:flex-col">
        <div
          aria-label="Logo y título"
          className="flex flex-1 flex-col items-center justify-center gap-4 md:gap-8 lg:gap-10"
        >
          <FooterVideo />
          <p className="text-pretty text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Los Varela
          </p>
        </div>

        <div className="w-full px-10 md:hidden">
          <Divider />
        </div>
        <div
          aria-label="Enlaces del pie de página"
          className="flex w-1/2 flex-1 flex-col items-center justify-center gap-5"
        >
          {siteConfig.footerLinks.map((link: footerLinkType) => (
            <FooterButton
              key={link.href}
              aria-label={link.label}
              href={link.href}
            >
              {link.label}
            </FooterButton>
          ))}
        </div>
      </div>
      {/* Social & Contact Section */}
      <div
        aria-label="Sección de redes sociales y contacto"
        className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-24"
      >
        {/* Social Icons */}
        <div
          aria-label="Redes sociales"
          className="flex flex-row items-center justify-center gap-4 md:min-w-[220px] md:justify-start md:px-20"
        >
          <Link
            isExternal
            aria-label="Instagram de Los Varela"
            as={NextLink}
            className="rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 p-2 text-white transition-transform hover:scale-110"
            href={siteConfig.socialLinks.instagram}
            target="_blank"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            isExternal
            aria-label="Facebook de Los Varela"
            as={NextLink}
            className="rounded-full bg-blue-600 p-2 text-white transition-transform hover:scale-110"
            href={siteConfig.socialLinks.facebook}
            target="_blank"
          >
            <FaFacebookF size={22} />
          </Link>
          <Link
            isExternal
            aria-label="WhatsApp"
            as={NextLink}
            className="rounded-full bg-green-500 p-2 text-white transition-transform hover:scale-110"
            href={siteConfig.socialLinks.whatsApp}
            target="_blank"
          >
            <FaWhatsapp size={22} />
          </Link>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center justify-center gap-2 text-center text-lg md:items-end md:gap-3 md:px-20 md:text-right lg:gap-4">
          <div className="mx-auto flex items-center justify-center gap-2 md:gap-3 lg:gap-4">
            <FaEnvelope className="text-primary-400" />
            <Link
              isExternal
              className="mx-auto text-center text-default-foreground hover:underline"
              href="mailto:info@losvarela.com"
            >
              info@losvarela.com
            </Link>
          </div>
          <div className="mx-auto flex items-center justify-center gap-2 md:gap-3 lg:gap-4">
            <FaPhoneAlt className="text-primary-400" />
            <Link
              isExternal
              className="mx-auto text-center text-default-foreground hover:underline"
              href="tel:+53 51326441"
            >
              +53 51326441
            </Link>
          </div>
        </div>
      </div>
      <div className="my-6 w-full">
        <Divider />
      </div>
      {/* Copyright & Tagline */}
      <div className="flex w-full flex-col items-center justify-between gap-2 pb-2 text-center text-sm text-white/60 md:flex-row md:text-left">
        <span className="text-md mx-auto">
          &copy; {new Date().getFullYear()} Los Varela. Todos los derechos
          reservados.
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 pb-4 text-xs text-white/50">
        <Link
          as={NextLink}
          className="underline underline-offset-2 transition-colors hover:text-primary-300"
          href="/terminos-y-condiciones"
        >
          Términos y Condiciones
        </Link>
        <span className="hidden md:inline">|</span>
        <Link
          as={NextLink}
          className="underline underline-offset-2 transition-colors hover:text-primary-300"
          href="/politica-de-privacidad"
        >
          Política de Privacidad
        </Link>
      </div>
      <Divider className={"my-2"} />
      <p className="text-center">
        © {new Date().getFullYear()} Los Varela. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
