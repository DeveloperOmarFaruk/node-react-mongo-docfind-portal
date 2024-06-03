import React from "react";
import Banner from "../../Components/MultiComponents/Banner";
import OurService from "../../Components/MultiComponents/OurService";
import AboutUs from "../../Components/MultiComponents/AboutUs";
import WhyChoose from "../../Components/MultiComponents/WhyChoose";
import Achivement from "../../Components/MultiComponents/Achivement";
import Review from "../../Components/MultiComponents/Review";
import AppoinmentHome from "../../Components/MultiComponents/AppoinmentHome";
import OurTeam from "../../Components/MultiComponents/OurTeam";
import ContactUs from "../../Components/MultiComponents/ContactUs";

const Home = () => {
  return (
    <>
      <div>
        <Banner />

        <div id="about-us">
          <AboutUs />
        </div>

        <WhyChoose />

        <div id="services">
          <OurService />
        </div>

        <Achivement />

        <div id="review">
          <Review />
        </div>

        <AppoinmentHome />
        <OurTeam />

        <div id="contact-us">
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Home;
