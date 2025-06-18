"use client";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

import CartProductsContext from "@/contexts/CartProductContext";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CardType } from "@/types";

interface Props {
  cards: CardType[];
}

export function ExpandableCard({ cards }: Props) {
  const [active, setActive] = useState<CardType[][number] | boolean | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const removeProduct = CartProductsContext((s) => s.removeProduct);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              animate={{
                opacity: 1,
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              initial={{
                opacity: 0,
              }}
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
              layoutId={`card-${active.title}-${id}`}
            >
              <motion.div
                className="mx-auto"
                layoutId={`image-${active.title}-${id}`}
              >
                <Image
                  alt={active.title}
                  className="mx-auto w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                  src={active.src}
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      className="text-3xl font-bold text-neutral-700 dark:text-neutral-200"
                      layoutId={`title-${active.title}-${id}`}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      className="text-neutral-600 dark:text-neutral-400"
                      layoutId={`description-${active.description}-${id}`}
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <Button
                    as={motion.button}
                    className="rounded-full bg-danger px-4 py-3 text-sm font-bold text-white"
                    layoutId={`button-${active.title}-${id}`}
                    onPress={() => removeProduct(active.id)}
                  >
                    {active.ctaText}
                  </Button>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full max-w-2xl gap-4">
        {cards.map((card) => (
          <motion.div
            key={`card-${card.title}-${id}`}
            className="flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 md:flex-row"
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
          >
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  alt={card.title}
                  className="h-40 w-40 rounded-lg object-cover object-top md:h-14 md:w-14"
                  src={card.src}
                />
              </motion.div>
              <div className="">
                <motion.h3
                  className="text-center font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                  layoutId={`title-${card.title}-${id}`}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                  layoutId={`description-${card.description}-${id}`}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <Button
              as={motion.button}
              color="danger"
              layoutId={`button-${card.title}-${id}`}
              onPress={() => removeProduct(card.id)}
            >
              {card.ctaText}
            </Button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      animate={{
        opacity: 1,
      }}
      className="h-4 w-4 text-black"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      fill="none"
      height="24"
      initial={{
        opacity: 0,
      }}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
