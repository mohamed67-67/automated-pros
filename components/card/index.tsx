"use client";

import { statusColorSchema } from "@/constants/state";
import { ICard } from "@/interface/Comps";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavouriteComp from "../favouriteComp";

export default function Card({ name, image, status, episode, id }: ICard) {
  return (
    <div className="max-w-[320px] relative h-full flex justify-self-center shadow-xl group overflow-hidden hover:shadow-2xl duration-1000 rounded-lg">
      <Image
        priority
        src={image}
        alt={name}
        width={200}
        height={200}
        className="aspect-square group-hover:scale-105 overflow-hidden duration-1000 rounded-l-lg object-cover"
      />
      <div className="flex flex-col font-semibold gap-1 p-3 justify-evenly bg-white">
        <h1 className="text-lg">{name}</h1>
        <p
          style={{ backgroundColor: statusColorSchema?.[status!]?.color }}
          className="text-xs text-white w-max px-2 py-1 rounded-sm uppercase bg-red-800">
          {status}
        </p>
        <p className="bg-blue-50 text-xs p-1 rounded-md">
          featured in {episode} episodes
        </p>
        <Link href={`/${id}`} passHref>
          <p className="bg-blue-500 cursor-pointer text-white text-center text-xs rounded-md py-1">
            view
          </p>
        </Link>
      </div>
      <FavouriteComp
        fontSize="20px"
        className="absolute top-1 right-1"
        id={id}
      />
    </div>
  );
}
