import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { className, price, instructorName, email, seats } = data;
          const newClass = {
            className,
            image: imgURL,
            price: parseFloat(price),
            instructorName,
            email,
            seats: parseFloat(seats),
            status: "pending"
          };
          console.log(newClass);
          axiosSecure.post("/classes", newClass).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              // reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="mt-12 w-full">
      <div className="border-2 border-[#ABABAB] px-4 md:px-12 py-4 md:py-6 md:w-1/2 mx-auto rounded-[10px]">
        <h2 className="mb-8 text-2xl font-bold text-center">Add a Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="font-semibold" htmlFor="className">
              Class Name
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="text"
              {...register("className", { required: "true" })}
              id=""
              placeholder="Enter Class Name"
            />
          </div>
          <div className="my-3">
            <label className="font-semibold" htmlFor="image">
              Class Image
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="file"
              {...register("image", { required: true })}
              id=""
              placeholder="Enter email"
            />
          </div>
          <div className="">
            <label className="font-semibold" htmlFor="instructorName">
              Instructor Name
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="text"
              defaultValue={user?.displayName}
              {...register("instructorName")}
              id=""
              readOnly
            />
          </div>

          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="email"
              defaultValue={user?.email}
              {...register("email")}
              id=""
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="font-semibold" htmlFor="photoURL">
              Available Seats
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="number"
              {...register("seats", { required: true })}
              id=""
              placeholder="Enter Seats"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold" htmlFor="photoURL">
              Price
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="number"
              {...register("price", { required: true })}
              id=""
              placeholder="Enter Price"
            />
          </div>
          <input
            className="w-full py-3 bg-[#2cdbde] rounded-[10px] font-semibold text-lg cursor-pointer"
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
