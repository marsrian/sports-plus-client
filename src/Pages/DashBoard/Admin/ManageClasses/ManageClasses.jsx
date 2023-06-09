import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleStatus = (user, status) => {
    fetch(`http://localhost:5000/classes/${user._id}/?status=${status}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "status update successfully",
            showConfirmButton: "false",
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center mb-8">Manage Classes:</h2>
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
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {classes.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                    <img className="w-10 h-10 rounded-full" src={user.image} alt="" />
                </td>
                <td>{user.className}</td>
                <td>{user.instructorName}</td>
                <td>{user.email}</td>
                <td>{user.seats}</td>
                <td>{user.price}</td>
                <td>{user?.status}</td>
                <td className="flex gap-2">
                  <button
                    disabled={
                      user?.status === "deny" || user.status === "approved"
                    }
                    onClick={() => handleStatus(user, "approved")}
                    className="text-white bg-blue-500 btn btn-ghost mr-2"
                  >
                    Approved
                  </button>

                  <button
                    disabled={
                      user?.status === "deny" || user.status === "approved"
                    }
                    onClick={() => handleStatus(user, "deny")}
                    className="text-white bg-blue-500 btn btn-ghost"
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
