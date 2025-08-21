import axios from "@/config/axios";
import { IGetChar } from "@/interface/endPoints";

export const getCharacters = async ({
  page,
  name,
  status,
  gender,
}: IGetChar) => {
  const res = await axios.get(`?page=${page}`, {
    params: { name, status, gender },
  });
  return res.data;
};

export const getFavCharacters = async ({ page, certainChar }: IGetChar) => {
  const res = await axios.get(`/${certainChar}?page=${page}`);
  return res.data;
};
