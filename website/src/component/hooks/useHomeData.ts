import { GetData } from "@/services/api/api";
import { useQuery } from "@tanstack/react-query";

const useHomeData = () => {
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["home-data"],
    queryFn: () => GetData("/web-data"),
    staleTime: 0,
    select(data) {
      return data?.data ?? {};
    },
  });

  return {
    data,
    isLoading,
    refetch,
    isError,
  };
};

export default useHomeData;
