import apiServices from "@/http/httpClient";
import { Cars } from "@/types/cars";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCarsQuery = () => {
  return useQuery<Cars[]>({
    queryKey: ["/cars"],
    queryFn: apiServices.getCars,
  });
};

export const useCarMutation = (onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: apiServices.createCar,
    onError,
  });
};

export const useCarDeletionMutation = (onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: apiServices.deleteCar,
    onError,
  });
};
