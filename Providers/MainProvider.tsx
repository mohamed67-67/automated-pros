"use client";

import React from "react";
import TanStackProvider from "./TanStack";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TanStackProvider>{children}</TanStackProvider>
    </>
  );
}
