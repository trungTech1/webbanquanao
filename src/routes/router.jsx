import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/papes/home/Home";
import About from "@/about/about";
import lazyLoad from "@/layout/mainlayout/components/lazyLoad/lazyLoad";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route
          path="/home"
          element={lazyLoad(() => import("@/papes/home/Home"))}
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
