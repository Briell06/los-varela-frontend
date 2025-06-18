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
      (p) => p.product.id === product.product.id,
    );

    if (productExists) {
      set((state) => ({
        products: state.products.map((p) =>
          p.product.id === product.product.id
            ? produce(p, (draft) => {
                draft.amount += p.amount;
              })
            : p,
        ),
      }));
    } else {
      set((state) => ({ products: [...state.products, product] }));
    }
  },

  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter(
        (product) => product.product.id !== productId,
      ),
    })),

  clearCart: () => set(() => ({ products: [] })),

  updateProductQuantity: (productId, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.product.id === productId
          ? produce(product, (draft) => {
              draft.amount = draft.amount + quantity;
            })
          : product,
      ),
    })),
}));

export default CartProductsContext;
