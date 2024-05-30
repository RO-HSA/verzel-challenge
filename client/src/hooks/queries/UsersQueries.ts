import apiServices from "@/http/httpClient";
import { LoginResponse } from "@/types/login";
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

export const useLoginMutation = (
  onSuccess: (data: LoginResponse) => void,
  onError: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: apiServices.login,
    onSuccess,
    onError,
  });
};
