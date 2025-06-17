import { Button } from "@heroui/button";
import { MdShoppingCart } from "react-icons/md";

const ShoppingCartButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={`${className}`}
      color="primary"
      startContent={<MdShoppingCart size={22} />}
      variant="solid"
    >
      Añadir al carrito
    </Button>
  );
};

export default ShoppingCartButton;
