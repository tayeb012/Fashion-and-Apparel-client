import React from "react";
import NavBar from "../Component/NavBar/NavBer";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
