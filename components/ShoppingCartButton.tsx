import { Button } from "@heroui/button";
import { MdShoppingCart } from "react-icons/md";

const ShoppingCartButton = ({ className }: { className?: string }) => {
  return (
    <Button
      startContent={<MdShoppingCart size={22} />}
      color="primary"
      variant="solid"
      className={`${className}`}
    >
      Añadir al carrito
    </Button>
  );
};

export default ShoppingCartButton;
