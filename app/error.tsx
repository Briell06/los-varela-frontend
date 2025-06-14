"use client";

import { Button } from "@heroui/button";
import { useEffect } from "react";
import { MdError } from "react-icons/md";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="grid h-screen place-content-center">
      <h2 className="text-6xl text-danger">Algo salió mal</h2>
      <Button
        variant="light"
        startContent={<MdError />}
        onPress={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Intentar de nuevo
      </Button>
    </div>
  );
}
