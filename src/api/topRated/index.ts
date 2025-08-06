import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetTopRatedQuery = () => {
  return useQuery<TOPRATED.getTopRatedRes, TOPRATED.getTopRatedReq>({
    queryKey: ["topRated"],
    queryFn: async () => {
      const response = await api.get("movie/top_rated");
      return response.data;
    },
  });
};

export { useGetTopRatedQuery };
