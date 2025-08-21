"use client";

import { gerCaracters } from "@/services/characters";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import ActionComp from "./ActionComp";
import { Chargender, CharStatus } from "@/interface/endPoints";

export default function LandingPage() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [filters, setFilters] = useState<{
    status: CharStatus;
    gender: Chargender;
  }>({
    status: undefined,
    gender: undefined,
  });
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryFn: () =>
      gerCaracters({
        page,
        name,
        status: filters.status,
        gender: filters.gender,
      }),
    queryKey: ["characters", page, name, filters.gender, filters.status],
  });

  //edge case
  useEffect(() => {
    setPage(1);
  }, [name, filters.gender, filters.status]);

  console.log(data);
  return (
    <div className="px-20 flex flex-col gap-14">
      <ActionComp
        setFilters={setFilters}
        filters={filters}
        state={name}
        setState={setName}
      />
      <CharactersList
        data={data}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        refetch={refetch}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}
