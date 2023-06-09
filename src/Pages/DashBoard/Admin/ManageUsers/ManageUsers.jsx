import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `http://localhost:5000/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now`,
            showConfirmButton: "false",
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `http://localhost:5000/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor now`,
            showConfirmButton: "false",
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = () => {};

  return (
    <div className="w-full">
      <h3 className="my-4 text-3xl font-semibold text-center">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-white bg-blue-500 btn btn-ghost mr-2"
                    >
                      Make Admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="text-white bg-blue-500 btn btn-ghost ml-2"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="text-white bg-red-600 btn btn-ghost"
                  >
                    <FaTrashAlt></FaTrashAlt>{" "}
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

export default ManageUsers;
