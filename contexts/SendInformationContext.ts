import { create } from "zustand";

import { CartProduct } from "@/types";

interface SendInformationZustandProps {
  products: CartProduct[];
  name: string;
  setInfo: (info: { products: CartProduct[]; name: string }) => void;
}

const sendInfoContext = create<SendInformationZustandProps>((set) => ({
  products: [],
  name: "",
  setInfo: (info: { products: CartProduct[]; name: string }) =>
    set({ products: info.products, name: info.name }),
}));

export default sendInfoContext;
