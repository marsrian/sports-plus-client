import { FaGoogle } from "react-icons/fa";

const SocialLink = () => {
  return (
    <>
      <button className="flex items-center p-3 border-2 border-[#C7C7C7] rounded-full w-1/4 mx-auto">
        <FaGoogle className="w-6 h-6 mr-14"></FaGoogle>{" "}
        <span className="font-medium">Continue with Google</span>
      </button>
    </>
  );
};

export default SocialLink;
