import logo from '../../../assets/logo/logo.png'
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

const Navbar = () => {
  const navInfo = (
    <>
      <li><ActiveLink className="text-lg font-bold" to="/">Home</ActiveLink></li>
      <li><ActiveLink className="text-lg font-bold" to="/instructors">Instructors</ActiveLink></li>
      <li><ActiveLink className="text-lg font-bold" to="/classes">Classes</ActiveLink></li>
      <li><ActiveLink className="text-lg font-bold" to="/dashboard">DashBoard</ActiveLink></li>
      <li><ActiveLink className="text-lg font-bold" to="/login">login</ActiveLink></li>
    </>
  );
  return (
    <div className="navbar bg-green-200 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-10 bg-green-200"
          >
            {navInfo}
          </ul>
        </div>
        <img className="w-20 h-20" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center px-1 gap-6">
          {navInfo}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
