import { Button } from "@heroui/button";
import clsx from "clsx";
import NextLink from "next/link";
import { FaHouse, FaShop } from "react-icons/fa6";

interface Props {
  link: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const HeaderLink = ({ link, href, children, className }: Props) => {
  return (
    <Button
      className={clsx("mb-10 text-2xl font-bold", className)}
      as={link ? NextLink : "div"}
      href={link ? href : undefined}
      variant="light"
      size="lg"
      startContent={link ? <FaHouse /> : <FaShop />}
    >
      {children}
    </Button>
  );
};

export default HeaderLink;
