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
      className={clsx("mb-10 h-16 text-wrap text-2xl", className)}
      as={link ? NextLink : "div"}
      href={link ? href : undefined}
      variant="light"
      size="lg"
      startContent={link ? <FaHouse /> : <FaShop />}
    >
      <span className="font-light">{children}</span>
    </Button>
  );
};

export default HeaderLink;
