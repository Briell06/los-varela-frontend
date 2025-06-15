import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const HomeLayout = ({ children }: Props) => {
  return (
    <div className="relative flex h-screen flex-col">
      <Navbar />
      <main className="container mx-auto min-h-screen max-w-7xl flex-grow px-6 pt-16">
        {children}
      </main>
      <footer className="flex w-full items-center justify-center py-3">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
