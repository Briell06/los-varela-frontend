import { CartPaySection } from "@/app/(root)/carrito/CartPaySection";
import CartProductCardSection from "@/app/(root)/carrito/CartProductCardSection";
import CartValidationForm from "@/app/(root)/carrito/CartValidationForm";
import HeaderLink from "@/components/HeaderLink";

const CartPage = () => {
  return (
    <>
      <div className="w-full text-center">
        <HeaderLink className="underline" href="/productos" link={true}>
          Seguir comprando
        </HeaderLink>
      </div>
      <section className={`grid gap-5 lg:grid-cols-2 lg:place-content-center`}>
        <CartProductCardSection />
        <div className="space-y-5">
          <CartValidationForm />
          <CartPaySection />
        </div>
      </section>
    </>
  );
};

export default CartPage;
