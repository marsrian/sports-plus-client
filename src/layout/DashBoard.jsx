import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import Footer from "../Pages/Shared/Footer/Footer";
import {
  FaBookReader,
  FaCheckCircle,
  FaDollarSign,
  FaHome,
  FaList,
  FaListOl,
  FaRegListAlt,
  FaUserCheck,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-blue-300 px-4">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    className="mb-2 flex items-center gap-2 border-2 p-2 rounded-lg"
                    to="/dashboard/manageClasses"
                  >
                    {" "}
                    <FaList className="mr-2"></FaList> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center gap-2 border-2 p-2 rounded-lg"
                    to="/dashboard/manageUsers"
                  >
                    <FaUserFriends className="mr-2"></FaUserFriends> Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink
                    className="mb-3 flex items-center gap-2 border-2 p-2 rounded-lg"
                    to="/dashboard/addClass"
                  >
                    <FaRegListAlt className="mr-2"></FaRegListAlt> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center gap-2 border-2 p-2 rounded-lg"
                    to="/dashboard/myClasses"
                  >
                    <FaListOl className="mr-2"></FaListOl> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="mb-2 flex items-center gap-2 border-2 p-2 rounded-lg"
                    to="/dashboard/mySelectedClasses"
                  >
                    <FaCheckCircle className="mr-2"></FaCheckCircle> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center gap-2 border-2 p-2 rounded-lg"
                    to="/dashboard/myEnrolledClasses"
                  >
                    <FaUserCheck className="mr-2"></FaUserCheck> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" my-3 flex items-center gap-2 border-2 p-2 rounded-lg"
                    to="/dashboard/paymentHistory"
                  >
                    <FaDollarSign className="mr-2"></FaDollarSign> Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink className="flex items-center gap-2 border-2 p-2" to="/">
                <FaHome className="mr-2"></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                className="flex items-center border-2 p-2 my-3 "
                to="/allinstructors"
              >
                <FaUserGraduate className="mr-2"></FaUserGraduate> Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center border-2 p-2"
                to="/allclasses"
              >
                <FaBookReader className="mr-2"></FaBookReader> Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
