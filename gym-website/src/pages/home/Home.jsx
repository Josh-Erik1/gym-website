import Header from "../../components/Header";
import "./home.css";

import React from "react";
import Programs from "../../components/programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
