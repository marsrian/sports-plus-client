import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth();
  const { data: myClasses = []} = useQuery(
    ["myClasses"],
    async () => {
      const res = await axiosSecure.get(`/myclasses?email=${user?.email}`);
      return res.data;
    }
  );

  return (
      <div className="">
        <h2 className="text-3xl font-semibold text-center mb-8">
          My All Classes:
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>ClassName</th>
                <th>Instructor</th>
                <th>Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Total Enrolled</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myClasses.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.image}
                      alt=""
                    />
                  </td>
                  <td>{user.className}</td>
                  <td>{user.instructorName}</td>
                  <td>{user.email}</td>
                  <td>{user.seats}</td>
                  <td>{user.price}</td>
                  <td>{user?.status}</td>
                  <td>{user.student}</td>
                  <td>{user.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default MyClasses;
