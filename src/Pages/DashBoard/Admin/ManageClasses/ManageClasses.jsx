import useClasses from "../../../../hooks/useClasses";
import ManageClassTable from "./ManageClassTable";

const ManageClasses = () => {
  const [classes] = useClasses();
  console.log(classes, 44);
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Manage Classes:
      </h2>
      <div className="overflow-x-auto mt-9">
        <table className="table border rounded">
          {/* head */}
          <thead className="font-semibold text-lg text-purple-700">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approved</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((singleClass, index) => (
              <ManageClassTable
                key={singleClass._id}
                singleClass={singleClass}
                // handleDelete={handleDelete}
                index={index}
              ></ManageClassTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageClasses;
