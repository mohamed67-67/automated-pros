"use client";

import Card from "@/components/card";
import SkeletalLoader from "@/components/Loaders/SkeletalLoader";
import PaginationComp from "@/components/pagination";
import { ICharactersList } from "@/interface/Comps";

import React, { Fragment } from "react";

export default function CharactersList({
  page,
  setPage,
  data,
  isLoading,
  isError,
  isSuccess,
  refetch,
}: ICharactersList) {
  console.log(data);
  return (
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
            {data?.results?.map((character: any, index: number) => (
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
  );
}
