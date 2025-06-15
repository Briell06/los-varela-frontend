"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const FooterButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="relative w-full p-[3px] text-center lg:w-1/2">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-primary-400" />
      <div
        className={`${pathname === href && "!bg-transparent"} group relative mx-auto rounded-[6px] bg-white px-8 py-2 text-center text-xl font-bold text-black transition duration-200 hover:!bg-transparent dark:bg-black dark:text-white`}
      >
        {children}
      </div>
    </Link>
  );
};
