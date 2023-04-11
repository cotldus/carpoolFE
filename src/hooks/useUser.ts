import { createUser } from "@/services";
import { CreateUser, User } from "@/services/interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useUser = () => {
  const queryClient = useQueryClient();

  const registerUser = useMutation({
    mutationFn: (newUser: CreateUser) => createUser(newUser),
    onSuccess: (res, newCar) => {
      queryClient.setQueryData(["createUser"], (user?: User) => {
        return user;
      });
    },
  });

  return {
    registerUser,
  };
};
