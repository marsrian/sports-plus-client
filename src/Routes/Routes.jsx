import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Instructors from "../Pages/Instructors/Instructors";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../layout/DashBoard";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";
import MySelectedClasses from "../Pages/DashBoard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/DashBoard/Student/Payment/Payment";
import MyEnrolledClasses from "../Pages/DashBoard/Student/MyEnrolledClasses/MyEnrolledClasses";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/DashBoard/Instructors/AddClass/AddClass";
import MyClasses from "../Pages/DashBoard/Instructors/MyClasses/MyClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "instructors",
            element: <Instructors></Instructors>
        },
        {
            path: "classes",
            element: <Classes></Classes>
        },
    ],
  },
  {
    path: "dashboard",
    element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    children: [
      // Admin DashBoard:
        {
          path: "manageClasses",
          element: <ManageClasses></ManageClasses>
        },
        {
          path: "manageUsers",
          element: <ManageUsers></ManageUsers>
        },
        // Instructor Dashboard:
        {
          path: "addClass",
          element: <AddClass></AddClass>
        },
        {
          path: "myClasses",
          element: <MyClasses></MyClasses>
        },
        // Student Dashboard:
        {
          path: "mySelectedClasses",
          element: <MySelectedClasses></MySelectedClasses>
        },
        {
          path: "myEnrolledClasses",
          element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

export default router;
