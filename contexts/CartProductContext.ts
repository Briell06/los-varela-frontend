import type { PersistOptions } from "zustand/middleware";

import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CartProduct } from "@/types";

export interface CartProductZustandProps {
  products: CartProduct[];
  // Keep second param optional for backward compatibility; it's ignored
  addProduct: (product: CartProduct, products?: CartProduct[]) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
}

const CartProductsContext = create<CartProductZustandProps>()(
  persist<CartProductZustandProps>(
    (set) => ({
      products: [],

      addProduct: (product: CartProduct) => {
        set(
          produce<CartProductZustandProps>((state) => {
            const existing = state.products.find(
              (p) => p.product.id === product.product.id,
            );

            if (existing) {
              existing.amount += product.amount;
            } else {
              state.products.push(product);
            }
          }),
        );
      },

      removeProduct: (productId: string) =>
        set(
          produce<CartProductZustandProps>((state) => {
            state.products = state.products.filter(
              (product) => product.product.id !== productId,
            );
          }),
        ),

      clearCart: () => set(() => ({ products: [] })),

      updateProductQuantity: (productId: string, quantity: number) =>
        set(
          produce<CartProductZustandProps>((state) => {
            const item = state.products.find((p) => p.product.id === productId);

            if (item) {
              item.amount += quantity;
              // Prevent negative quantities; clamp to minimum 0 and remove if 0
              if (item.amount <= 0) {
                state.products = state.products.filter(
                  (p) => p.product.id !== productId,
                );
              }
            }
          }),
        ),
    }),
    {
      name: "cartProducts",
      partialize: (state) => ({
        products: state.products,
      }),
    } as PersistOptions<CartProductZustandProps>,
  ),
);

export default CartProductsContext;
