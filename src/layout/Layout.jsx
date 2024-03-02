import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Outlet context={[<Navbar />]} />
      <Footer />
    </>
  );
}

export default Layout;
