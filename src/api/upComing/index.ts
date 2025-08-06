import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetUpComingQuery = () => {
  return useQuery<UPCOMING.useGetUpcomingRes, UPCOMING.useGetUpComingReq>({
    queryKey: ["upComing"],
    queryFn: async () => {
      const response = await api.get("/movie/upcoming");
      return response.data;
    },
  });
};

export { useGetUpComingQuery };
