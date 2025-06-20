import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";
import Image from "next/image";
import NextLink from "next/link";

import CartIcon from "./CartIcon";
import SearchInput from "./SearchInput";
import { ThemeSwitch } from "./theme-switch";

const Navbar = () => {
  return (
    <HeroNavbar
      isBordered
      aria-label="Barra de navegación principal"
      as={"nav"}
      className="py-2"
    >
      <NavbarBrand as={NextLink} className="flex-1 gap-2" href={"/"}>
        <Image
          alt="Logo de Los Varela"
          className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] rounded-full"
          height={55}
          src="/logo.jpg"
          width={55}
        />
        <p className="text-2xl font-bold max-md:hidden">Los Varela</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <SearchInput />
      </NavbarContent>
      <NavbarContent className="justify-end">
        <div className="mx-auto flex space-x-2 md:space-x-5 lg:space-x-5">
          <CartIcon />
          <ThemeSwitch className="mx-auto" />
        </div>
      </NavbarContent>
    </HeroNavbar>
  );
};

export default Navbar;
