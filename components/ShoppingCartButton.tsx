import { Button } from "@heroui/button";
import { MdShoppingCart } from "react-icons/md";

const ShoppingCartButton = ({ className }: { className?: string }) => {
  return (
    <Button color="primary" className={`${className}`}>
      <MdShoppingCart /> Añadir al carrito
    </Button>
  );
};

export default ShoppingCartButton;
