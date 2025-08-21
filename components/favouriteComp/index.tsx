"use client";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

export default function FavouriteComp({
  id,
  className,
  fontSize = "40px",
}: {
  id: number;
  className?: string;
  fontSize?: string;
}) {
  const [fav, setFav] = useState<boolean | undefined>(undefined);

  // initiating local storage for fav characters
  useEffect(() => {
    if (localStorage && !localStorage.getItem("favChars")) {
      localStorage.setItem("favChars", "[]");
    }
  }, []);

  useEffect(() => {
    if (localStorage) {
      const favChars = localStorage?.getItem("favChars");
      console.log(JSON.parse(favChars!));
      if (favChars?.includes(`${id}`)) {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, []);

  const handleFav = () => {
    setFav((prev) => !prev);
    const favChars = localStorage?.getItem("favChars");
    const favCharsList: number[] = JSON.parse(favChars!);

    if (favCharsList?.includes(id)) {
      const newList = favCharsList.filter((charc) => charc !== id);
      localStorage.setItem("favChars", JSON.stringify(newList));
    } else {
      console.log("triggered");
      localStorage.setItem("favChars", JSON.stringify([...favCharsList, id]));
    }
  };
  return (
    <div className={`${className}`}>
      {fav !== undefined && (
        <>
          {fav ? (
            <StarFilled
              onClick={handleFav}
              style={{ color: "#FFD700", fontSize }}
            />
          ) : (
            <StarOutlined onClick={handleFav} style={{ fontSize }} />
          )}
        </>
      )}
    </div>
  );
}
