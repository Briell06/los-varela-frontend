import Navbar from "@/components/navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const HomeLayout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full py-3">
        Footer
      </footer>
    </div>
  );
};

export default HomeLayout;
