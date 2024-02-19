import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/home/Home.jsx";
import About from "@/about/about";
import Category from "@/category/category.jsx";
import CategoryDetail from "@/category/detail.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="abc" element={<>abc</>}></Route>
            <Route path="category" element={<Category />}></Route>
            <Route
              path="category/:categoryId"
              element={<CategoryDetail />}
            ></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
