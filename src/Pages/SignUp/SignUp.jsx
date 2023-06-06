import { Link } from "react-router-dom";
import SocialLink from "../Shared/SocialLink/SocialLink";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mt-12">
      <div className="border-2 border-[#ABABAB] px-4 md:px-12 py-4 md:py-6 md:w-1/2 mx-auto rounded-[10px]">
        <h2 className="font-bold text-2xl mb-8 text-center">
          Create an account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="text"
              {...register("name", { required: "Name is required" })}
              id=""
              placeholder="Enter Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="email"
              {...register("email", { required: "Email is required" })}
              id=""
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="">
            <label className="font-semibold" htmlFor="photo">
              Photo URL
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="text"
              {...register("photo", { required: "Photo URL is required" })}
              id=""
              placeholder="Enter Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
            )}
          </div>
          <div className="my-3">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[!@#$%^&*])/,
                  message:
                    "Password must contain at least one capital letter and one special character",
                },
              })}
              id=""
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold" htmlFor="confirm">
              Confirm Password
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="password"
              {...register("confirm", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              id=""
              placeholder="Confirm Password"
            />
            {errors.confirm && (
              <p className="text-red-500 text-sm">{errors.confirm.message}</p>
            )}
          </div>
          <input
            className="w-full py-3 bg-[#2cdbde] rounded-[10px] font-semibold text-lg"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link className="text-blue-600 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
      <div className="divider w-1/3 mx-auto mb-3">Or</div>
      <SocialLink></SocialLink>
    </div>
  );
};

export default SignUp;
