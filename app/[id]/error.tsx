"use client";

import React from "react";

export default function error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-screen w-full font-semibold flex justify-center items-center text-red-500">
      {error.message}
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
