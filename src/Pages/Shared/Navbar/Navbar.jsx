import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import logo from "../../../assets/logo/logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [darkTheme, setDarkTheme] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const navInfo = (
    <>
      <li>
        <ActiveLink
          className={`text-lg font-bold ${darkTheme ? "text-white" : "text-black"}`}
          to="/"
        >
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={`text-lg font-bold ${darkTheme ? "text-white" : "text-black"}`}
          to="/allinstructors"
        >
          Instructors
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className={`text-lg font-bold ${darkTheme ? "text-white" : "text-black"}`}
          to="/allclasses"
        >
          Classes
        </ActiveLink>
      </li>
      {user && (
        <li>
          <Link
            to={
              isAdmin
                ? "/dashboard/manageClasses"
                : isInstructor
                ? "/dashboard/addClass"
                : "/dashboard/mySelectedClasses"
            }
            className={`${darkTheme ? "text-white" : "text-gray-600"}`}
          >
            DashBoard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className={`navbar ${darkTheme ? "bg-gray-800" : "bg-green-200"} px-4 md:px-8`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn btn-ghost lg:hidden ${darkTheme ? "text-white" : "text-black"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-10 ${
              darkTheme ? "bg-gray-800" : "bg-green-200"
            }`}
          >
            {navInfo}
          </ul>
        </div>
        <img className="w-20 h-20" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center px-1 gap-6">{navInfo}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className={`text-[#2cdbde] px-3 py-2 bg-transparent border-2 border-[#2cdbde] rounded-lg text-lg font-bold hover:bg-[#2cdbde] hover:text-white mr-2 ${
                darkTheme ? "text-white" : "text-black"
              }`}
            >
              Log Out
            </button>
            <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
          </>
        ) : (
          <>
            <Link
              className={`text-[#2cdbde] px-3 py-2 bg-transparent border-2 border-[#2cdbde] rounded-lg text-lg font-bold hover:bg-[#2cdbde] hover:text-white mr-2 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className={`rounded-full w-8 h-8 bg-gray-300 dark:bg-gray-600 ${
            darkTheme ? "translate-x-4 bg-green-200" : ""
          }`}
        ></button>
      </div>
    </div>
  );
};

export default Navbar;


// import { Link } from "react-router-dom";
// import logo from "../../../assets/logo/logo.png";
// import ActiveLink from "../../../components/ActiveLink/ActiveLink";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { useContext } from "react";
// import useAdmin from "../../../hooks/useAdmin";
// import useInstructor from "../../../hooks/useInstructor";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isAdmin] = useAdmin();
//   const [isInstructor] = useInstructor();

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const navInfo = (
//     <>
//       <li>
//         <ActiveLink className="text-lg font-bold" to="/">
//           Home
//         </ActiveLink>
//       </li>
//       <li>
//         <ActiveLink className="text-lg font-bold" to="/allinstructors">
//           Instructors
//         </ActiveLink>
//       </li>
//       <li>
//         <ActiveLink className="text-lg font-bold" to="/allclasses">
//           Classes
//         </ActiveLink>
//       </li>
//       {user && <li>
//         <Link
//           to={
//             isAdmin
//               ? "/dashboard/manageClasses"
//               : isInstructor ? "/dashboard/addClass" : "/dashboard/mySelectedClasses"
//           }
//         >
//           DashBoard
//         </Link>
//       </li>}
//     </>
//   );
//   return (
//     <div className="navbar bg-green-200 px-4 md:px-8">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-10 bg-green-200"
//           >
//             {navInfo}
//           </ul>
//         </div>
//         <img className="w-20 h-20" src={logo} alt="" />
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="flex justify-center px-1 gap-6">{navInfo}</ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <>
//             <button
//               onClick={handleLogOut}
//               className="text-[#2cdbde] px-3 py-2 bg-transparent border-2 border-[#2cdbde] rounded-lg text-lg font-bold hover:bg-[#2cdbde] hover:text-white mr-2"
//             >
//               Log Out
//             </button>
//             <img
//               className="w-12 h-12 rounded-full"
//               src={user?.photoURL}
//               alt=""
//             />
//           </>
//         ) : (
//           <>
//             <Link
//               className="text-[#2cdbde] px-3 py-2 bg-transparent border-2 border-[#2cdbde] rounded-lg text-lg font-bold hover:bg-[#2cdbde] hover:text-white mr-2"
//               to="/login"
//             >
//               Login
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;