import React from "react";
import Header from "@/home/header/header.jsx";
import Footer from "@/home/footer/footer";

import "./home.scss";
import { Outlet } from "react-router-dom";
import Carousel from "./carousel/carousel";
import Banner from "./homeBaner/Banner";
import Products from "./product/products";
import Information from "./information/information";

const Home = () => {
  return (
    <div className="homepage">
      <Header></Header>
      <div className="home_page_body">
        <Carousel></Carousel>
        <Banner></Banner>
        <Products></Products>
        <Information></Information>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
