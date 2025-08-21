"use client";

import Card from "@/components/card";
import SkeletalLoader from "@/components/Loaders/SkeletalLoader";
import PaginationComp from "@/components/pagination";
import { getFavCharacters } from "@/services/characters";
import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useEffect, useState } from "react";

export default function Favourites() {
  const [page, setPage] = useState(1);
  const [certainChar, setCertainChar] = useState(undefined);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryFn: () =>
      getFavCharacters({
        page,
        certainChar,
      }),
    queryKey: ["favCharacters", certainChar],
    enabled: !!certainChar,
  });
  console.log(certainChar);
  useEffect(() => {
    if (localStorage) {
      setCertainChar(JSON.parse(localStorage.getItem("favChars")!));
    }
  }, []);

  if (certainChar === null)
    return (
      <div className="flex justify-center items-center h-[70vh] w-full text-center">
        No Favourite characters yet
      </div>
    );
  return (
    <div>
      <div className="w-full">
        {isLoading ? (
          <div className="largeGrid w-full h-screen">
            {Array.from({ length: 8 }).map((skeletal: any, key: number) => (
              <Fragment key={key}>
                <SkeletalLoader className="w-[320px] aspect-4/3" />
              </Fragment>
            ))}
          </div>
        ) : isSuccess ? (
          <div className="flex flex-col w-full gap-5">
            <div className="largeGrid">
              {data?.map((character: any, index: number) => (
                <Fragment key={index}>
                  <Card
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    image={character.image}
                    episode={character.episode.length}
                  />
                </Fragment>
              ))}
            </div>
            <div className="w-full flex justify-center mt-5">
              <PaginationComp
                page={page}
                per_page={20}
                total={data?.info?.count}
                setPagination={setPage}
              />
            </div>
          </div>
        ) : (
          isError && (
            <div className="flex w-full gap-3 h-[70vh] justify-center items-center flex-col">
              <p className="font-semibold text-red-700">Error loading data!!</p>
              <button
                className="border cursor-pointer font-semibold text-sm border-gray-500 hover:shadow rounded-md px-2 py-1 text-gray-500"
                onClick={() => refetch()}>
                Reload
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
