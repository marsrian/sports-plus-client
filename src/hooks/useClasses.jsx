// import { useQuery } from '@tanstack/react-query'
// import useAuth from './useAuth';

// const useClasses = () => {
//   const { user, loading } = useAuth();

//   const {  data: classes = [],refetch } = useQuery({
//     queryKey: ['classes'],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await fetch(`https://sports-plus-server.vercel.app/classes`);
//       return res.json();
//     },
//   })
//   return [classes, refetch]
// };

// export default useClasses;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/classes`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [classes, refetch];
};
export default useClasses;
