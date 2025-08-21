"use client";

import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { ITextField } from "@/interface/Comps";

export default function TextField({
  state,
  setState,
  placeHolder = "search",
  debounce,
}: ITextField<string>) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //debouncing condition as this comp might be used as regular input field
  useEffect(() => {
    if (debounce) {
      const handler = setTimeout(() => {
        setState(inputValue);
      }, 1000);
      return () => {
        clearTimeout(handler);
      };
    } else {
      setState(inputValue);
    }
  }, [inputValue]);

  return (
    <div className="w-[350px]">
      <Input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        // size="large"
        className="w-full"
        width={800}
        placeholder={placeHolder}
      />
    </div>
  );
}
