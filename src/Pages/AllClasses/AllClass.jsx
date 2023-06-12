import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AllClass = ({ classAll }) => {
  const { _id, image, className, instructorName, seats, price, student } =
    classAll;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false); 

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      setIsButtonDisabled(true);

      const cartItem = {
        selectClassId: _id,
        className,
        instructorName,
        image,
        price,
        seats,
        email: user.email,
      };

      fetch("https://sports-plus-server.vercel.app/selectClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order the class",
        icon: "Warning",
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className={`card card-compact w-full shadow-xl ${seats <1 ? 'bg-red-500' : 'bg-blue-400'}`}>
      <figure>
        <img src={image} alt="Shoes" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Available Seats: {seats}</p>
        <p>Enrolled student: {student}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end text-center">
          <button
            onClick={() => handleAddToCart(classAll)}
            className="btn btn-outline mt-4 bg-slate-100 border-orange-400"
            disabled={isButtonDisabled || seats < 1}
          >
            {isButtonDisabled ? "Adding to Cart..." : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClass;
