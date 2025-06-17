import { createContext } from "react";

import { CartProductZustandProps } from "@/app/providers";

const cartProductsContext = createContext<CartProductZustandProps>(
  {} as CartProductZustandProps,
);

export default cartProductsContext;
