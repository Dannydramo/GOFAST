import React, { Fragment } from "react";
import Emergency from "../components/LandingPage/Emergency";
import Download from "../components/LandingPage/Download";
import Delivery from "../components/LandingPage/Delivery";
import Parcel from "../components/LandingPage/Parcel";
import Safety from "../components/LandingPage/Safety";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Emergency />
      <Download />
      <Delivery />
      <Parcel />
      <Safety />
      <Footer />
    </Fragment>
  );
};

export default Home;
