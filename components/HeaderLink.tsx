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
      aria-label={typeof children === "string" ? children : undefined}
      as={link ? NextLink : "div"}
      className={clsx("mb-10 text-2xl font-bold", className)}
      href={link ? href : undefined}
      size="lg"
      startContent={link ? <FaHouse /> : <FaShop />}
      variant="light"
    >
      {children}
    </Button>
  );
};

export default HeaderLink;
