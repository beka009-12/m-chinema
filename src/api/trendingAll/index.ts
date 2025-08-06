import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetAllTrendingMovies = (
  date: TRENDINGALLMOVIES.getAllTrendingMoviesReq
) => {
  return useQuery<TRENDINGALLMOVIES.getAllTrendingMoviesRes>({
    queryKey: [`/trending/all/${date}`],
    queryFn: async () => {
      const response = await api.get(`/trending/all/${date}`);
      return response.data;
    },
  });
};

export { useGetAllTrendingMovies };
