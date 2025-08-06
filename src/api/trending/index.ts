import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetTrendingQuery = (date: TRENDING.getTrendingReq) => {
  return useQuery<TRENDING.getTrendingRes>({
    queryKey: [`/trending/movie/${date}`],
    queryFn: async () => {
      const response = await api.get(`/trending/movie/${date}`);
      return response.data;
    },
  });
};

export { useGetTrendingQuery };
