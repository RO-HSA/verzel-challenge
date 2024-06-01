import apiServices from "@/http/httpClient";
import { CarResponse } from "@/types/cars";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCarsQuery = () => {
  return useQuery<CarResponse[]>({
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

export const useCarUpdateMutation = (onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: apiServices.updateCar,
    onError,
  });
};

export const useCarDeletionMutation = (onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: apiServices.deleteCar,
    onError,
  });
};
