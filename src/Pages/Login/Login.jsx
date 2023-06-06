import { Link } from "react-router-dom";
import SocialLink from "../Shared/SocialLink/SocialLink";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div className="mt-12">
      <div className="border-2 border-[#ABABAB] px-4 md:px-12 py-4 md:py-6 md:w-1/2 mx-auto rounded-[10px]">
        <h2 className="font-bold text-2xl mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="mb-4">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="password"
              {...register("password", { required: "Password is required" })}
              id=""
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <input
            className="w-full py-3 bg-[#2cdbde] rounded-[10px] font-semibold text-lg"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center mt-2">
          Don not have an account?{" "}
          <Link className="text-blue-600 font-semibold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="divider w-1/3 mx-auto mb-2">Or</div>
      <SocialLink></SocialLink>
    </div>
    );
  }

export default Login;