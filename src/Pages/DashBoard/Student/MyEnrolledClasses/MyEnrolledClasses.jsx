import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import MyEnrolledClassCard from './MyEnrolledClassCard';

const MyEnrolledClasses = () => {

 const { loading,user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrollStudent= [],} = useQuery({
    queryKey: ['enrollStudent'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  })
console.log(enrollStudent);

  return (
  <div className='w-full mt-5 px-4'>
      
        <h2 className='font-semibold  text-center text-xl'>Total Enrolled Class: {enrollStudent?.length}</h2>
      <div className="overflow-x-auto mt-9">
        <table className="table border rounded">
          {/* head */}
          <thead className='font-semibold text-lg text-purple-700'>
            <tr>
              <th>#</th>
              {/* <th>Image</th> */}
              <th>Class Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Price</th>
              <th>Pending</th>
            </tr>
          </thead>
          <tbody>
            {
              enrollStudent?.map((enroll, index) => <MyEnrolledClassCard
                key={enroll._id}
                enroll={enroll}
                index={index}
              ></MyEnrolledClassCard>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyEnrolledClasses;