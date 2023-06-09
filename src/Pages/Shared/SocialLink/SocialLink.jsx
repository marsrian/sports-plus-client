import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLink = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <>
      <button onClick={handleGoogleSign} className="flex items-center p-3 border-2 border-[#C7C7C7] rounded-full w-1/4 mx-auto">
        <FaGoogle className="w-6 h-6 mr-14"></FaGoogle>{" "}
        <span className="font-medium">Continue with Google</span>
      </button>
    </>
  );
};

export default SocialLink;
