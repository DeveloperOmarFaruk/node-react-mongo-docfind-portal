import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFunction from "../../Hooks/useFunction";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./Order.css";

const stripePromise = loadStripe(`${process.env.REACT_STRIPE_KEY}`);

const Order = () => {
  const { URL, appoinment, setAppoinment, alert, navigate } = useFunction();
  const { appoinmentId } = useParams();

  useEffect(() => {
    fetch(`${URL}/appoinments/${appoinmentId}`)
      .then((res) => res.json())
      .then((data) => setAppoinment(data));
  }, [URL, appoinmentId, setAppoinment]);

  return (
    <>
      <div style={{ padding: "10rem 0rem" }}>
        <h2 className="text-center" style={{ color: "#054d56" }}>
          Order Page
        </h2>

        <div className="section">
          <div className="row gx-5 ">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5"></div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5">
              <div className="row gx-5 mb-2">
                <div className="col-5">
                  <p
                    style={{
                      color: "#054d56",
                      fontWeight: "bold",
                    }}
                  >
                    Booking Id:
                  </p>
                </div>
                <div className="col-7">
                  <p
                    style={{
                      color: "#2C3E50",
                    }}
                  >
                    {appoinmentId}
                  </p>
                </div>
              </div>

              <div className="row gx-5 mb-2">
                <div className="col-5">
                  <p
                    style={{
                      color: "#054d56",
                      fontWeight: "bold",
                    }}
                  >
                    Date:
                  </p>
                </div>
                <div className="col-7">
                  <p
                    style={{
                      color: "#2C3E50",
                    }}
                  >
                    {appoinment.appoinmentDate}
                  </p>
                </div>
              </div>

              <div className="row gx-5 mb-2">
                <div className="col-5">
                  <p
                    style={{
                      color: "#054d56",
                      fontWeight: "bold",
                    }}
                  >
                    Titme:
                  </p>
                </div>
                <div className="col-7">
                  <p
                    style={{
                      color: "#2C3E50",
                    }}
                  >
                    {appoinment.appoinmentTime}
                  </p>
                </div>
              </div>

              <div className="row gx-5 mb-2">
                <div className="col-5">
                  <p
                    style={{
                      color: "#054d56",
                      fontWeight: "bold",
                    }}
                  >
                    Booking Fee:
                  </p>
                </div>
                <div className="col-7">
                  <p
                    style={{
                      color: "#2C3E50",
                    }}
                  >
                    {appoinment.appoinmentBookingFee} Taka
                  </p>
                </div>
              </div>

              <div className="row gx-5 mb-2">
                <div className="col-5">
                  <p
                    style={{
                      color: "#054d56",
                      fontWeight: "bold",
                    }}
                  >
                    Name:
                  </p>
                </div>
                <div className="col-7">
                  <p
                    style={{
                      color: "#2C3E50",
                    }}
                  >
                    {appoinment.appoinmentName}
                  </p>
                </div>
              </div>

              <div className="row gx-5 mb-2">
                <div className="col-5">
                  <p
                    style={{
                      color: "#054d56",
                      fontWeight: "bold",
                    }}
                  >
                    Email:
                  </p>
                </div>
                <div className="col-7">
                  <p
                    style={{
                      color: "#2C3E50",
                    }}
                  >
                    {appoinment.email}
                  </p>
                </div>
              </div>

              <div className="row gx-5 mb-2">
                <div className="col-5">
                  <p
                    style={{
                      color: "#054d56",
                      fontWeight: "bold",
                    }}
                  >
                    Phone:
                  </p>
                </div>
                <div className="col-7">
                  <p
                    style={{
                      color: "#2C3E50",
                    }}
                  >
                    {appoinment.appoinmentPhone}
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginBottom: "2rem",
                  fontStyle: "italic",
                  color: "#EC7063",
                }}
              >
                <small>
                  For Testing: 4242 4242 4242 4242 &nbsp;&nbsp;12/34/567/10005
                </small>
              </div>

              {appoinment.appoinmentBookingFee && (
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    appoinment={appoinment}
                    URL={URL}
                    alert={alert}
                    navigate={navigate}
                    setAppoinment={setAppoinment}
                  />
                </Elements>
              )}
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
