"use client";
import { Button } from "@heroui/button";

export default function Error() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 px-4 text-center">
      <span aria-label="error" className="text-7xl" role="img">
        😢
      </span>
      <h2 className="text-3xl font-bold text-danger">Algo salió mal</h2>
      <p className="max-w-md text-lg text-white/70">
        Ocurrió un error inesperado. Por favor, intenta de nuevo.
      </p>
      <Button as={"a"} href="/productos">
        Intentar de nuevo
      </Button>
    </div>
  );
}
