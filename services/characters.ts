import axios from "@/config/axios";

export const gerCaracters = async () => {
  const res = await axios.get("");
  return res.data;
};
