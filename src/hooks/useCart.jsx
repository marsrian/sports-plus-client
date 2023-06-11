import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["selectClass", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/selectClass?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};
export default useCart;