import React from "react";
import "./MultiComponents.css";
import AppoinmentImage from "../../Images/Assets/doctor.png";
import { useNavigate } from "react-router";

const AppoinmentHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="appoinment-home-container">
        <div className="section">
          <div className="row gy-3 gx-5 row-edit flex-wrap-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="apoinment-div ">
                <img src={AppoinmentImage} alt="appoinment_image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="apoinment-div">
                <h5
                  className="text-left text-uppercase"
                  style={{ fontWeight: "600" }}
                >
                  Appoinment
                </h5>
                <h1
                  className="text-left"
                  style={{
                    fontWeight: "700",
                    marginBottom: "2rem",
                  }}
                >
                  Make an Appoinment <br />
                  Today
                </h1>

                <p
                  style={{
                    fontWeight: "200",
                    marginBottom: "1rem",
                  }}
                >
                  Ready to take the next step towards a healthier smile?
                  Scheduling an appointment at Docfind is easy! Whether you're a
                  new patient or a returning one, our friendly staff is here to
                  assist you.
                </p>

                <p
                  style={{
                    fontWeight: "200",
                    marginBottom: "1rem",
                  }}
                >
                  We offer flexible scheduling options, including early morning
                  and evening appointments, to accommodate your busy lifestyle.
                </p>
                <button onClick={() => navigate(`/appoinment`)}>
                  Get Appoinment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppoinmentHome;
