import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import MyCreatedRoute from "./Router/MyCreatedRoute.jsx";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={MyCreatedRoute} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
