import React from "react";
import "./home.css";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import Featured from "../../component/featured/Featured";
import PropertyList from "../../component/propertyList/PropertyList";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";
import MailList from "../../component/mailList/MailList";

const Home = () => {
  return <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes guest love</h1>
      <FeaturedProperties/>
      <MailList/>
    </div>
    </div>;
};

export default Home;
