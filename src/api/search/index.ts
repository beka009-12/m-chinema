import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useSearchQuery = (date: SEARCH.useSearchReq) => {
  return useQuery<SEARCH.useSearchRes>({
    queryKey: ["search/multi", date],
    queryFn: async () => {
      const response = await api.get("search/multi", {
        params: date,
      });
      return response.data;
    },
  });
};

export { useSearchQuery };
