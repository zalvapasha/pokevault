import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
