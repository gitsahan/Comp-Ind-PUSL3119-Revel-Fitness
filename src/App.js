/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Documents from "./pages/Docs";
import Instructors from "./pages/Instructors";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Products from "./pages/Products";
import StripePay from "./Stripe/Stripe";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import StripePay_01 from "./temp/one";
import StripePAy_02 from "./temp/two";
import StripePAy_03 from "./temp/three";
import StripePAy_04 from "./temp/four";
import StripePAy_05 from "./temp/five";
import StripePAy_06 from "./temp/six";
import StripePAy_07 from "./temp/seven";
import StripePAy_08 from "./temp/eight";
import UserData from "./pages/Userdata"

const Layout = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const Router = createBrowserRouter ([
{
  path:"/",
  element:<Layout/>,
  children: [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/register",
      element: <Register/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path:"/docs",
      element:<Documents/>
    },
    {
      path: "/instructors",
      element: <Instructors/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path: "/location",
      element: <Location/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path: "/stripepay",
      element: <StripePay/>
    },
    {
      path: "/admin",
      element: <Admin/>
    },
    {
      path: "/adminlogin",
      element: <AdminLogin/>
    },
    {
      path: "/pay01",
      element: <StripePay_01/>
    },
    {
      path: "/pay02",
      element: <StripePAy_02/>
    },
    {
      path: "/pay03",
      element: <StripePAy_03/>
    },
    {
      path: "/pay04",
      element: <StripePAy_04/>
    },
    {
      path: "/pay05",
      element: <StripePAy_05/>
    },
    {
      path: "/pay06",
      element: <StripePAy_06/>
    },
    {
      path: "/pay07",
      element: <StripePAy_07/>
    },
    {
      path: "/pay08",
      element: <StripePAy_08/>
    },
    {
      path: "/userdata",
      element: <UserData/>
    }
  ],
},
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  );
};

export default App;