import { Card, CardBody, CardHeader } from "@heroui/card";

import CartForm from "@/app/(root)/carrito/CartForm";

const CartValidationForm = () => {
  return (
    <Card className="mx-auto max-w-2xl rounded">
      <CardHeader>
        <h4 className="mx-auto text-center text-2xl text-warning">
          Información necesaria para completar su orden
        </h4>
      </CardHeader>
      <CardBody>
        <CartForm />
      </CardBody>
    </Card>
  );
};

export default CartValidationForm;
