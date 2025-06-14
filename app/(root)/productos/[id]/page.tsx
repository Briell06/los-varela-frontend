import FooterInput from "@/components/FooterInput";
import HeaderLink from "@/components/HeaderLink";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import { ProductByIdQuery } from "@/config/queries";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const id = (await params).id;
  const product = await ProductByIdQuery(id);

  return (
    <>
      <div className="grid place-content-center">
        <HeaderLink link={true} href="/productos">
          Ir a inicio
        </HeaderLink>
      </div>
      <Card className="mx-auto w-fit rounded-t-none">
        <CardHeader className="flex flex-col items-center justify-center">
          <Image
            alt="Imagen del producto"
            className="mx-auto"
            src={product.image}
            loading="lazy"
          />
        </CardHeader>
        <CardBody className="flex flex-col items-center gap-5 text-center">
          <h3 className="text-center text-4xl font-bold">{product.title}</h3>
          <p className="text-center text-3xl font-semibold text-primary">
            {product.price.toFixed(2)} USD
          </p>
          <p className="text-center text-xl font-semibold text-content4-foreground">
            {product.description}
          </p>
        </CardBody>
        <CardFooter className="flex flex-col items-center justify-center">
          <FooterInput />
          <ShoppingCartButton className="mt-5 w-full" />
        </CardFooter>
      </Card>
    </>
  );
};

export default page;
