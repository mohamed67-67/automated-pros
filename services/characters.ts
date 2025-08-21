import axios from "@/config/axios";
import { IGetChar } from "@/interface/endPoints";

export const gerCaracters = async ({
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
