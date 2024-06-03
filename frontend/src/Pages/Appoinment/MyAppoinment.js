import React from "react";
import "./Appoinment.css";
import useFunction from "../../Hooks/useFunction";
import MyCalender from "./MyCalender";

const MyAppoinment = () => {
  const {
    appoDate,
    setAppoDate,
    appoinments,
    handleAppointmentView,
    setIdView,
    appoinment,
    navigate,
    handleDeleteAppoinment,
  } = useFunction();

  return (
    <>
      <div className="appoinment-container">
        <div className="section">
          <div className="mb-4 text-center">
            <h5
              style={{
                cursor: "pointer",
                color: "#054d56",
                padding: "1rem 2rem",
                marginBottom: "4rem",
                borderRadius: "10px",
                border: "1px dotted #054d56",
              }}
              onClick={() => navigate(`/appoinment`)}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;
              Get Appoinment
            </h5>
          </div>
          <div className="row gx-5 gy-5 row-edit flex-wrap-reverse">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <div className="appoinment-div">
                <h1 className="text-center mb-4">My Appoinment</h1>
                <div>
                  <MyCalender appoDate={appoDate} setAppoDate={setAppoDate} />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <div className="appoinment-div ">
                <img
                  src="https://mediniz-images-2018-100.s3.ap-south-1.amazonaws.com/post-images/istockphoto-1196021900-612x612_1628790101.jpg"
                  alt="appoinment_image"
                />
              </div>
            </div>
          </div>

          {/* {appoinments.map((item) =>
            item._id !== null ? (
             <></>
            ) : (
              <h1 className="text-center mb-4">No Appoinment</h1>
            )
          )} */}

          <div style={{ margin: "4rem 0rem" }}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Title</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Details</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appoinments.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Date">{item.appoinmentDate}</td>
                    <td data-label="Time">{item.appoinmentTime}</td>
                    <td data-label="Title">{item.appoinmentTitle}</td>
                    <td data-label="Phone">{item.appoinmentPhone}</td>
                    <td data-label="Details">
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          handleAppointmentView(item._id);
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td data-label="Action">
                      {item.appoinmentPayment ? (
                        <button
                          type="button"
                          className="btn btn-success pt-1 pb-1 pe-2 ps-2 m-2"
                        >
                          Paid
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn btn-danger pt-1 pb-1 pe-2 ps-2 m-2"
                            onClick={() => {
                              navigate(`/order/${item._id}`);
                            }}
                          >
                            Pay
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger pt-1 pb-1 pe-2 ps-2 m-2"
                            onClick={() => {
                              handleDeleteAppoinment(item._id);
                            }}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </>
                      )}

                      {item.appoinmentAction && (
                        <button
                          type="button"
                          className="btn btn-primary pt-1 pb-1 pe-2 ps-2 m-2"
                        >
                          {item.appoinmentAction.appoinmentAction}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =============================================== */}
      {/* <!-- Appoinment Data View Modal --> */}
      {/* =============================================== */}
      <div
        className="modal fead "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
                style={{ color: "#054d56" }}
              >
                {appoinment.appoinmentTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-input">
              <div
                className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                style={{ fontSize: "18px" }}
              >
                <p style={{ color: "#054d56" }} className="fw-semibold">
                  Date:{" "}
                </p>
                <p>{appoinment.appoinmentDate}</p>
              </div>

              <div
                className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                style={{ fontSize: "18px" }}
              >
                <p style={{ color: "#054d56" }} className="fw-semibold">
                  Time:{" "}
                </p>
                <p>{appoinment.appoinmentTime}</p>
              </div>

              <div
                className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                style={{ fontSize: "18px" }}
              >
                <p style={{ color: "#054d56" }} className="fw-semibold">
                  Name:{" "}
                </p>
                <p>{appoinment.appoinmentName}</p>
              </div>

              <div
                className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                style={{ fontSize: "18px" }}
              >
                <p style={{ color: "#054d56" }} className="fw-semibold">
                  Email:{" "}
                </p>
                <p>{appoinment.email}</p>
              </div>

              <div
                className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                style={{ fontSize: "18px" }}
              >
                <p style={{ color: "#054d56" }} className="fw-semibold">
                  Phone:{" "}
                </p>
                <p>{appoinment.appoinmentPhone}</p>
              </div>

              <div
                className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                style={{ fontSize: "18px" }}
              >
                <p style={{ color: "#054d56" }} className="fw-semibold">
                  Booking Fee:{" "}
                </p>
                <p>{appoinment.appoinmentBookingFee} Taka</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="booking-send"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAppoinment;
