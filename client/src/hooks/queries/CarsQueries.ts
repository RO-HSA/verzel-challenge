import apiServices from "@/http/httpClient";
import { Cars } from "@/types/cars";
import { useQuery } from "@tanstack/react-query";

export const useCarsQuery = () => {
  return useQuery<Cars[]>({
    queryKey: ["/cars"],
    queryFn: apiServices.getCars,
  });
};
