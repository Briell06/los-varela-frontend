"use client";
import { Button } from "@heroui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 px-4 text-center">
      <span className="text-7xl" role="img" aria-label="error">
        😢
      </span>
      <h2 className="text-3xl font-bold text-danger">Algo salió mal</h2>
      <p className="max-w-md text-lg text-white/70">
        Ocurrió un error inesperado. Por favor, intenta de nuevo.
      </p>
      <Button onPress={reset}>Intentar de nuevo</Button>
    </div>
  );
}
