"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@heroui/button";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;

    if (!el) return;

    const r = el.getBoundingClientRect();

    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;
  const query = title.toLowerCase().replace(" ", "+");

  return (
    <div
      className="[perspective:1200px] [transform-style:preserve-3d]"
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/productos/?query=${query}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(`/productos/?query=${query}`);
        }
      }}
    >
      <div
        ref={slideRef}
        className="relative z-10 mx-[4vmin] flex h-[60vmin] w-[60vmin] flex-1 flex-col items-center justify-center text-center text-white opacity-100 transition-all duration-300 ease-in-out md:h-[40vmin] md:w-[40vmin]"
        role="button"
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
        tabIndex={0}
        onClick={() => handleSlideClick(index)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleSlideClick(index);
          }
        }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl bg-[#1D1F2F] transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <Image
            fill
            alt={title}
            className="duration-600 absolute inset-0 h-full w-full rounded-xl object-cover transition-opacity ease-in-out"
            decoding="sync"
            loading="eager"
            src={src}
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            onLoad={imageLoaded}
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <h2 className="relative text-xl font-semibold md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <div className="flex justify-center">
            <Button
              className="text-md mx-auto mt-6 flex h-12 w-fit items-center justify-center rounded-2xl border border-transparent bg-white px-4 py-2 font-semibold text-black opacity-70 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:shadow-lg sm:text-sm"
              size="sm"
            >
              {button}
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`mx-2 flex h-10 w-10 items-center justify-center rounded-full border-3 border-transparent bg-neutral-200 transition duration-200 hover:-translate-y-0.5 focus:border-primary focus:outline-none active:translate-y-0.5 dark:bg-neutral-800 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <FaArrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;

    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;

    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      aria-labelledby={`carousel-heading-${id}`}
      className="relative mx-auto h-[60vmin] w-[60vmin] md:h-[40vmin] md:w-[40vmin]"
    >
      <ul
        className="absolute mx-[-4vmin] flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            current={current}
            handleSlideClick={handleSlideClick}
            index={index}
            slide={slide}
          />
        ))}
      </ul>

      <div className="absolute top-[calc(100%+1rem)] flex w-full justify-center">
        <CarouselControl
          handleClick={handlePreviousClick}
          title="Go to previous slide"
          type="previous"
        />

        <CarouselControl
          handleClick={handleNextClick}
          title="Go to next slide"
          type="next"
        />
      </div>
    </div>
  );
}
