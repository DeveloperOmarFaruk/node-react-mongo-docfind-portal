import React from "react";
import "./MultiComponents.css";
import Service1 from "../../Images/Assets/fluoride.png";
import Service2 from "../../Images/Assets/cavity.png";
import Service3 from "../../Images/Assets/whitening.png";

const OurService = () => {
  return (
    <>
      <div className="our-service-container">
        <div className="section">
          <h5
            className="text-center text-uppercase"
            style={{ color: "#054d56", fontWeight: "600" }}
          >
            Our Services
          </h5>
          <h1
            className="text-center"
            style={{
              color: "#202020",
              fontWeight: "700",
              marginBottom: "5rem",
            }}
          >
            Services We Provide
          </h1>

          <div className="row gx-5 gy-5">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="our-service-card">
                <img src={Service1} alt="services_image" />
                <h4>Fluoride Treatment</h4>
                <p>
                  Typically professional treatments containing a high
                  concentration of fluoride that a dentist or hygienist will
                  apply to a person's teeth to improve health and reduce the
                  risk of cavities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="our-service-card">
                <img src={Service2} alt="services_image" />
                <h4>Cavity Filing</h4>
                <p>
                  To treat a cavity your dentist will remove the decayed portion
                  of the tooth and then "fill" the area on the tooth where the
                  decayed material was removed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="our-service-card">
                <img src={Service3} alt="services_image" />
                <h4>Teath whitening</h4>
                <p>
                  How long does teeth whitening last? The most effective way to
                  whiten your teeth is professional teeth whitening treatment
                  applied by your dentist in the office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
