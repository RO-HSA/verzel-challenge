import apiServices from "@/http/httpClient";
import { RegisterResponse } from "@/types/register";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = (
  onSuccess: (data: RegisterResponse) => void,
  onError: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: apiServices.register,
    onSuccess,
    onError,
  });
};
