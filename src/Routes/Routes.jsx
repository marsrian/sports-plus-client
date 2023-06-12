import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../layout/DashBoard";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";
import MySelectedClasses from "../Pages/DashBoard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/DashBoard/Student/Payment/Payment";
import MyEnrolledClasses from "../Pages/DashBoard/Student/MyEnrolledClasses/MyEnrolledClasses";
import AddClass from "../Pages/DashBoard/Instructors/AddClass/AddClass";
import MyClasses from "../Pages/DashBoard/Instructors/MyClasses/MyClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PaymentHistory from "../Pages/DashBoard/Student/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allinstructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "allclasses",
        element: <AllClasses></AllClasses>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
    children: [
      // Admin DashBoard:
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      // Instructor Dashboard:
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      // Student Dashboard:
      {
        path: "mySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://sports-plus-server.vercel.app/selectClass/${params.id}`
          ),
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
