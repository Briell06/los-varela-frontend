"use client";

import { Button } from "@heroui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function HeroSectionOne() {
  return (
    <section
      aria-label="Hero principal de Los Varela"
      className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center"
    >
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 dark:text-slate-300 md:text-4xl lg:text-7xl">
          {"Envíe combos a sus familiares ahora mas fácil que nunca"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                className="mr-2 inline-block"
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          animate={{
            opacity: 1,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
        >
          Con nuestra aplicación será capaz de seleccionar entre la amplia gama
          de productos que ofrecemos para crear combos y enviarlos con facilidad
          a sus familiares en Cuba
        </motion.p>
        <motion.div
          animate={{
            opacity: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.4,
          }}
        >
          <Button
            as={Link}
            className="w-60 transform rounded-lg px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5"
            color="primary"
            href="/productos"
          >
            Explorar productos
          </Button>
          <Button
            as={Link}
            className="w-60 transform rounded-lg border px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5"
            color="primary"
            href="/sobre-nosotros"
            variant="bordered"
          >
            Más sobre nosotros
          </Button>
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          initial={{
            opacity: 0,
            y: 10,
          }}
          transition={{
            duration: 0.3,
            delay: 1.6,
          }}
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              alt="imagen de inicio"
              className="aspect-square object-cover"
              height={1000}
              src="/hero-image.jpg"
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
