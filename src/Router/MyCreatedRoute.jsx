import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Component/Home/Home";
import AddProduct from "../Component/AddProduct/AddProduct";
import MyCard from "../Component/MyCard/MyCard";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";
import PrivateRoute from "./PrivateRoute";
import CardDetails from "../Component/MyCard/CardDetails";
import UpdateCard from "../Component/MyCard/UpdateCard";
import BrandDetails from "../Component/Home/Brands/BrandDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

const MyCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/brands"
          ),
      },
      {
        path: "/brand-details/:name",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-product/brand/${params.name}`
          ),
      },

      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCard></MyCard>,
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-my-product"
          ),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-product/id/${params.id}`
          ),
      },
      {
        path: "/product-update/:id",
        element: <UpdateCard></UpdateCard>,
        loader: ({ params }) =>
          fetch(
            `https://fashion-and-apparel-server-pu09gest9-dark-days-projects.vercel.app/add-product/id/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default MyCreatedRoute;
