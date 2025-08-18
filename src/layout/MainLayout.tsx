import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";

function MainLayout() {


  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      {/* Navbar - uses same toggle and state */}
      <Navbar />

        {/* Main Page */}
        <div className="">
          <Outlet />
        </div>
      </div>
   
  );
}

export default MainLayout;
