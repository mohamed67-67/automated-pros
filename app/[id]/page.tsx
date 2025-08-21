import FavouriteComp from "@/components/favouriteComp";
import ErrorPage from "@/components/views/DetailsPage/ErrorPage";

import Image from "next/image";
import Link from "next/link";
import React from "react";
export const dynamicParams = true;

export async function generateStaticParams() {
  const characters: any = await fetch(process.env.NEXT_PUBLIC_BASE_URL!).then(
    (res) => res.json()
  );
  return characters.results.map((character: any) => ({
    id: String(character.id),
  }));
}

export default async function Detailspage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res: any = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/${id}`);
  const character = await res?.json();

  if (character.error) {
    return <ErrorPage error={character.error} />;
  }
  return (
    <div className="mx-20 grid grid-cols-5 shadow-2xl rounded-2xl gap-5">
      <Image
        alt={character.name}
        src={character.image}
        width={500}
        height={500}
        className="aspect-6/4 col-span-3 mb-5 rounded-l-2xl h-full w-full object-cover"
        priority
      />
      <div className="flex col-span-2 relative justify-center flex-col gap-1">
        <p className="capitalize font-semibold">Name : {character?.name}</p>
        <p className="capitalize font-semibold">Gender : {character?.gender}</p>
        <p className="capitalize font-semibold">
          species : {character?.species}
        </p>
        <p className="capitalize font-semibold">status : {character?.status}</p>
        <p className="capitalize font-semibold">
          origin : {character?.origin?.name}
        </p>
        <p className="capitalize font-semibold">
          location : {character?.location?.name}
        </p>
        <p className="capitalize font-semibold">
          Episodes : {character?.episode?.length}
        </p>
        <FavouriteComp
          fontSize="50px"
          className="absolute top-3 right-3"
          id={character?.id}
        />
      </div>
    </div>
  );
}
