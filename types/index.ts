import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  slug: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}
