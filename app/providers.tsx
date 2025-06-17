"use client";

import type { ThemeProviderProps } from "next-themes";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import * as React from "react";
import { create } from "zustand";

import CartProductContext from "@/contexts/productCartContext";
import { CartProduct } from "@/types";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export interface CartProductZustandProps {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
}

const useCartProductStore = create<CartProductZustandProps>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
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
        product.product.id === productId ? { ...product, quantity } : product,
      ),
    })),
}));

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <CartProductContext.Provider value={useCartProductStore}>
          {children}
        </CartProductContext.Provider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
