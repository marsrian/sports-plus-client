import { useState } from "react";
import Swal from "sweetalert2";
import useClasses from "../../../../hooks/useClasses";

const ManageClassTable = ({ index, singleClass }) => {
  const { _id, className, email, instructorName, image, seats, price, status } =
    singleClass;
  console.log(singleClass);
  const [, refetch] = useClasses();

  // Feedback modal
  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const sendFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const requestBody = {
      feedback: feedback,
    };
    console.log(feedback);
    fetch(`https://sports-plus-server.vercel.app/addClasses/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your Feedback Send Done !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleStatus = (singleClass, status) => {
    fetch(
      `https://sports-plus-server.vercel.app/classes/${singleClass._id}/?status=${status}`,
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
            title: "status update successfully",
            showConfirmButton: "false",
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <img className="w-10 h-10 rounded-full" src={image} alt="" />
        </td>
        <td>{className}</td>
        <td>{instructorName}</td>
        <td>{email}</td>
        <td>{seats}</td>
        <td>{price}</td>
        <td>
          {" "}
          <button className="btn bnt-primary btn-sm">{status}</button>{" "}
        </td>
        {
          <>
            {" "}
            <td>
              <button
                disabled={status === "deny" || status === "approved"}
                onClick={() => handleStatus(singleClass, "approved")}
                className="text-white bg-blue-500 btn btn-ghost mr-2"
              >
                Approve
              </button>
            </td>
            <td>
              <button
                disabled={status === "deny" || status === "approved"}
                onClick={() => handleStatus(singleClass, "deny")}
                className="text-white bg-blue-500 btn btn-ghost mr-2"
              >
                Deny
              </button>
            </td>{" "}
          </>
        }
        <td>
          <button
            className="btn btn-sm"
            onClick={() => showModal(singleClass._id)}
          >
            open modal
          </button>
          <dialog
            id={`my_modal_${singleClass._id}`}
            open={modalOpen}
            className="modal"
          >
            <div method="dialog">
              <button
                className="btn btn-xs text-white bg-red-500 hover:bg-black"
                onClick={closeModal}
              >
                ✕
              </button>
              <form onSubmit={sendFeedback} className="modal-box">
                <input
                  name="feedback"
                  placeholder="Write your feedback here..."
                  rows="4"
                  className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
                <input
                  className="btn text-white bg-red-500 hover:bg-black"
                  type="submit"
                  value="feedback"
                />
              </form>
            </div>
          </dialog>
        </td>
      </tr>
    </>
  );
};

export default ManageClassTable;
