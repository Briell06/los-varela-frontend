import { produce } from "immer";
import { create } from "zustand";

import { CartProduct } from "@/types";

export interface CartProductZustandProps {
  products: CartProduct[];
  addProduct: (product: CartProduct, products: CartProduct[]) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
}

const CartProductsContext = create<CartProductZustandProps>((set) => ({
  products: [],

  addProduct: (product: CartProduct, products: CartProduct[]) => {
    const productExists = products.find(
      (p: CartProduct) => p.product.id === product.product.id,
    );

    if (productExists) {
      set((state) => ({
        products: state.products.map((p: CartProduct) =>
          p.product.id === product.product.id
            ? produce(p, (draft) => {
                draft.amount += product.amount;
              })
            : p,
        ),
      }));
    } else {
      set((state) => ({ products: [...state.products, product] }));
    }
  },

  removeProduct: (productId: string) =>
    set((state) => ({
      products: state.products.filter(
        (product: CartProduct) => product.product.id !== productId,
      ),
    })),

  clearCart: () => set(() => ({ products: [] })),

  updateProductQuantity: (productId: string, quantity: number) =>
    set((state) => ({
      products: state.products.map((product: CartProduct) =>
        product.product.id === productId
          ? produce(product, (draft) => {
              draft.amount += quantity;
            })
          : product,
      ),
    })),
}));

export default CartProductsContext;
