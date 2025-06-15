import { Image } from "@heroui/image";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";
import NextImage from "next/image";
import NextLink from "next/link";

import SearchInput from "./SearchInput";
import { ThemeSwitch } from "./theme-switch";

const Navbar = () => {
  return (
    <nav role="navigation" aria-label="Barra de navegación principal">
      <HeroNavbar shouldHideOnScroll isBordered className="py-2">
        <NavbarBrand as={NextLink} href={"/"} className="flex-1 gap-2">
          <Image
            alt="Logo de Los Varela"
            as={NextImage}
            className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px]"
            height={55}
            radius="full"
            src="/logo.jpg"
            width={55}
          />
          <p className="text-2xl font-bold max-md:hidden">Los Varela</p>
        </NavbarBrand>
        <NavbarContent justify="center">
          <SearchInput />
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeSwitch className="mx-auto" />
        </NavbarContent>
      </HeroNavbar>
    </nav>
  );
};

export default Navbar;
