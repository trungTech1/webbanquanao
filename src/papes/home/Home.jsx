import React, { useState } from "react";
import Header from "@/layout/mainlayout/components/header/header.jsx";
import Footer from "@/layout/mainlayout/components/footer/footer";
import "./home.scss";
import { Outlet } from "react-router-dom";
import Carousel from "./carousel/carousel";
import Banner from "./homeBaner/Banner";
import Products from "./product/products";
import Information from "./information/information";
import Register from "@/papes/home/register/signin/Signin";
import Signup from "./register/sign up/Signup";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <>
      {showModal && <Register modal={setShowModal} />}
      {showSignup && <Signup modal={setShowSignup} />}

      <div className="homepage">
        <Header modal={setShowModal} showSignup={setShowSignup} />
        <div className="home_page_body">
          <Carousel></Carousel>

          <Banner></Banner>
          <Products></Products>
          <Information></Information>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
