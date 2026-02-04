import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

// Response structure from your Backend
type ApiResponse<T> = {
  message?: string;
  success: boolean;
  data?: T;
};

const useUpdate = <T, V>(route: string, queryKey?: string) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  return useMutation<ApiResponse<T>, AxiosError<ApiResponse<unknown>>, V>({
    mutationFn: async (obj: V) => {
      const response = await axiosSecure.patch<ApiResponse<T>>(route, obj);
      return response.data;
    },
    onSuccess: (responseData) => {
      if (queryKey) {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      }
      if (responseData?.message) {
        toast.success(responseData.message);
      }
      console.log("Update success:", responseData);
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred while updating.";

      toast.error(
        typeof errorMessage === "string" ? errorMessage : "Update failed",
      );
      console.error("Update hook error:", error);
    },
  });
};

export default useUpdate;
