import Link from "next/link";
import React from "react";

export default function ErrorPage({ error }: { error: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[70vh]">
      <p className="text-red-500 font-semibold">{error}</p>
      <Link className="font-semibold" href="/">
        Back Home
      </Link>
    </div>
  );
}
