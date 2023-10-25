import React from "react";
import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brands from "./Brands/Brands";
import Footer from "./Footer";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Brands brands={brands}></Brands>
      <Footer></Footer>
    </div>
  );
};

export default Home;
