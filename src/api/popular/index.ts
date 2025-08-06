import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetPopularQuery = () => {
  return useQuery<POPULAR.GetPopularRes, POPULAR.GetPopularReq>({
    queryKey: ["popular"],
    queryFn: async () => {
      const response = await api.get(`/movie/popular`);
      return response.data;
    },
  });
};

export { useGetPopularQuery };
