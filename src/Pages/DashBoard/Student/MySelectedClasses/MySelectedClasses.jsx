import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const MySelectedClasses = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  //   const total = cart.price;

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-plus-server.vercel.app/selectClass/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted", "Your file has been deleted", "success");
              localStorage.removeItem(`isButtonDisabled_${item._id}`) ===
                "true";
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="uppercase font-semibold flex justify-evenly h-[60px] items-center">
        <h2>Total Selected Classes: {cart.length}</h2>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Option</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar flex items-center gap-2">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    {item.className}
                  </div>
                </td>
                <td>{item.instructorName}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${item._id}`}>
                    <button className="btn btn-primary btn-sm">Pay</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600 text-white"
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

export default MySelectedClasses;
