import HeaderLink from "@/components/HeaderLink";
import CartProductCardSection from "@/app/(root)/carrito/CartProductCardSection";
import CartPaySection from "@/app/(root)/carrito/CartPaySection";

const CartPage = () => {
  return (
    <>
      <div className="w-full text-center">
        <HeaderLink className="underline" href="/productos" link={true}>
          Seguir comprando
        </HeaderLink>
      </div>
      <section className={`grid gap-5`}>
        <CartProductCardSection />
        <CartPaySection />
      </section>
    </>
  );
};

export default CartPage;
