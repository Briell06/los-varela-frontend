import { Form } from "@heroui/form";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";
import NextImage from "next/image";

import { SearchIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

const Navbar = () => {
  return (
    <HeroNavbar shouldHideOnScroll isBordered className="py-2">
      <NavbarBrand className="flex-1 gap-2">
        <Image
          alt="Logo"
          as={NextImage}
          className="min-w-[55px] min-h-[55px] max-w-[55px] max-h-[55px]"
          height={55}
          radius="full"
          src="/logo.jpg"
          width={55}
        />
        <p className="text-2xl font-bold max-md:hidden">Los Varela</p>
      </NavbarBrand>

      <NavbarContent justify="center">
        <Form action="/">
          <Input
            endContent={<SearchIcon />}
            name="search"
            placeholder="Buscar..."
            variant="faded"
          />
        </Form>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch className=" max-md:mx-auto" />
      </NavbarContent>
    </HeroNavbar>
  );
};

export default Navbar;
