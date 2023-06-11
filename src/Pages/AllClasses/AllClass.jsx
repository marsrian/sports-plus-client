import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AllClass = ({ classAll }) => {
  const { _id, image, className, instructorName, seats, price } = classAll;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const disabledState = localStorage.getItem(`isButtonDisabled_${_id}`) === "true";
    setIsButtonDisabled(disabledState);
  }, [_id]);

  const handleAddToCart = (item) => {
    console.log(item);
    setIsButtonDisabled(false);
    if (user && user.email) {
      const cartItem = {
        selectClassId: _id,
        className,
        instructorName,
        image,
        price,
        seats,
        email: user.email
      };
      fetch("http://localhost:5000/selectClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
            setIsButtonDisabled(true);
            localStorage.setItem(`isButtonDisabled_${_id}`, "false");
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

  useEffect(() => {
    if (isButtonDisabled) {
      localStorage.setItem(`isButtonDisabled_${_id}`, "true"); // Update local storage
    }
  }, [isButtonDisabled, _id]);

  return (
    <div className="card card-compact w-full bg-blue-400 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Available Seats: {seats}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end text-center">
          <button
            onClick={() => handleAddToCart(classAll)}
            disabled={isButtonDisabled}
            className="btn btn-outline mt-4 bg-slate-100 border-orange-400"
          >
            {isButtonDisabled ? "Adding..." : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClass;
