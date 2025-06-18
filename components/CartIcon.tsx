"use client";

import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import CartProductsContext from "@/contexts/CartProductContext";

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = CartProductsContext();
  const router = useRouter();

  return (
    <>
      <Badge
        color="primary"
        content={products.length}
        isInvisible={products.length === 0}
        showOutline={false}
        variant="solid"
      >
        <Button isIconOnly variant="light" onPress={() => setIsOpen(true)}>
          <ShoppingCart />
        </Button>
      </Badge>
      {products.length > 0 && (
        <Modal
          backdrop="blur"
          isOpen={isOpen}
          placement="center"
          onOpenChange={() => setIsOpen(false)}
        >
          <ModalContent>
            <ModalHeader>
              <h2 className="mx-auto text-3xl font-bold">Carrito</h2>
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 gap-5">
                {products.map(({ product, amount }) => (
                  <div
                    key={product.id}
                    className="mx-auto flex flex-col items-center gap-5"
                  >
                    <Image
                      alt={product.title}
                      className="mx-auto"
                      height={100}
                      src={product.image}
                      width={100}
                    />
                    <p className="text-xl font-bold">
                      {product.title}{" "}
                      <span className="text-lg font-normal text-primary">
                        {amount > 1 ? `x${amount}` : ""}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                startContent={<MdOutlineClose />}
                variant="bordered"
                onPress={() => setIsOpen(false)}
              >
                Cerrar
              </Button>
              <Button
                color="primary"
                startContent={<ShoppingCart />}
                onPress={() => {
                  setIsOpen(false);
                  router.push("/carrito");
                }}
              >
                Ver el carrito
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default CartIcon;
