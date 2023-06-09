import { useNavigate } from "react-router-dom";
import notFoundPhoto from '../../../assets/notFound/NotFount.png'

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="mt-20">
        <img className="w-full mx-auto mb-3 md:w-80" src={notFoundPhoto} alt="" />
      <h2 className="font-bold text-center text-red-700 text-7xl">404</h2>
      <p className="my-3 text-xl font-semibold text-center text-amber-600">
        This Page Not Found
      </p>
      <div className="mt-5 text-center">
        <button className="px-5 py-2 text-lg font-bold border-2 border-gray-400 rounded-full" onClick={handleBackHome}>
        Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
