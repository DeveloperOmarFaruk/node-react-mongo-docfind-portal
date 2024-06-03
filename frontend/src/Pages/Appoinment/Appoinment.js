import React, { useState } from "react";
import "./Appoinment.css";

import Calender from "./Calender";
import AvailableApoinment from "./AvailableApoinment";
import useFunction from "../../Hooks/useFunction";

const Appoinment = () => {
  const { date, setDate } = useFunction();

  return (
    <>
      <div className="appoinment-container">
        <div className="section">
          <div className="row gx-5 gy-5 row-edit flex-wrap-reverse">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <div className="appoinment-div">
                <h1 className="text-center mb-4"> Appoinment</h1>
                <div>
                  <Calender date={date} setDate={setDate} />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <div className="appoinment-div ">
                <img
                  src="https://media.istockphoto.com/id/160641361/photo/modern-dental-office.jpg?s=612x612&w=0&k=20&c=UKmxnD-7B4AttO3Ua5WD7cwTRg4tMAPuu56VhXnnZtw="
                  alt="appoinment_image"
                />
              </div>
            </div>
          </div>

          <div>
            <AvailableApoinment date={date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appoinment;
