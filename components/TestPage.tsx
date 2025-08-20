"use client";

import { gerCaracters } from "@/services/characters";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function TestPage() {
  const { data, isLoading, isError } = useQuery({
    queryFn: gerCaracters,
    queryKey: ["list"],
  });

  console.table(data);
  return <div>SomePage</div>;
}
