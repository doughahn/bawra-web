"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center">
      <h2 className="text-2xl font-bold text-bawra-primary">Something went wrong!</h2>
      <p className="text-muted-foreground">We apologize for the inconvenience.</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}