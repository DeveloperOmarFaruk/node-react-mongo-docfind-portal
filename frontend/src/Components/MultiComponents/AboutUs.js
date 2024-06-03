import React from "react";
import "./MultiComponents.css";
import Treatment from "../../Images/Assets/treatment.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="section">
          <h5
            className="text-center text-uppercase"
            style={{ color: "#054d56", fontWeight: "600" }}
          >
            About Us
          </h5>
          <h1
            className="text-center"
            style={{
              color: "#202020",
              fontWeight: "700",
              marginBottom: "5rem",
            }}
          >
            Who We Are
          </h1>

          <div className="row gx-5 gy-5">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="about-col-div">
                <img src={Treatment} alt="about_image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="about-col-div">
                <h1>
                  Exeptional Dantel
                  <br /> Care, on Your Terms
                </h1>
                <p>
                  Welcome to Docfind, where your smile is our priority. At our
                  state-of-the-art dental facility, we are committed to
                  providing comprehensive, high-quality dental care for patients
                  of all ages. Our dedicated team of experienced dentists,
                  hygienists, and support staff work together to ensure that
                  every visit is a positive and comfortable experience.
                </p>

                <p>
                  Our mission is to deliver exceptional dental care with a focus
                  on patient comfort, satisfaction, and long-term oral health.
                  We strive to build lasting relationships with our patients
                  through personalized care, education, and trust.
                </p>
                <button>More About</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
