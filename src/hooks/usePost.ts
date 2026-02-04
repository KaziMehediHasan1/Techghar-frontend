import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export type ApiResponse<T> = {
  message: string;
  success: boolean;
  data: T;
};

const usePost = <T, V>(route: string) => {
  const axiosSecure = useAxiosSecure();

  return useMutation<ApiResponse<T>, AxiosError<ApiResponse<unknown>>, V>({
    mutationFn: async (obj: V) => {
      const response = await axiosSecure.post<ApiResponse<T>>(route, obj);
      return response.data;
    },
    onSuccess: (responseData) => {
      if (responseData?.success) {
        toast.success(responseData.message || "Operation successful!");
      }
    },
    onError: (err) => {
      const errorMessage =
      err.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
      console.error("UsePost Hook Error:", err);
    },
  });
};

export default usePost;
