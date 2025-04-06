
import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Secret from "../Pages/Shared/Secret/Secret";

import PrivateRoutes from "./PrivateRoutes";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
       { path: "/",
        element: <Home />,
        },
        {
            path: "/menu",
            element: <Menu />,
        },
        {
            path: "/order/:category",
            element: <Order />,
        },
        {
            path: "/contact-us",
            element: <ContactUs />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <SignUp />,
        },
        {
          path:'/dashboard',
          element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
        },
        {
          path: "*",
          element: <div className="text-center mt-10"><h1 className="text-5xl">404</h1></div>
        }
      ]
    },
  ]);