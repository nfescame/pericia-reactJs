import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Service1 from "./pages/Services/Service1";
import Service2 from "./pages/Services/Service2";
import Service3 from "./pages/Services/Service3";
import Service4 from "./pages/Services/Service4";

const RoutesNav = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<About />} path='/about' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Service1 />} path='/service1' />
        <Route element={<Service2 />} path='/service2' />
        <Route element={<Service3 />} path='/service3' />
        <Route element={<Service4 />} path='/service4' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesNav;
