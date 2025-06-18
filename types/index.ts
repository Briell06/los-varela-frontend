import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  fake_price: number;
  image: string;
  slug: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
  products: Product[];
  created_at: string;
  updated_at: string;
}

export interface CartProduct {
  product: Product;
  amount: number;
}

export interface CardType {
  id: string;
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
}
