import React from "react";
import "./Appoinment.css";
import useFunction from "../../Hooks/useFunction";
import useFirebase from "../../Hooks/useFirebase";

const AvailableApoinment = ({ date }) => {
  const {
    services,
    service,
    appointmentAddData,
    setId,
    handleEditService,
    apoiDateRef,
    handleAppoinmentAddSubmit,
    handleAppointmentDataChange,
  } = useFunction();

  const { userInfo } = useFirebase();
  const selectDate = new Date(date).toDateString();
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate() + 1;
  const customDate = `${year}-${month}-${day}`;

  // console.log(new Date(customDate).toISOString().split("T")[0]);

  return (
    <>
      <div>
        <h3
          style={{ color: "#054d56", margin: "5rem auto" }}
          className="text-center"
        >
          Available Apoinment: {selectDate}
        </h3>

        <div className="row gx-5 gy-5">
          {services.map((item) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
              key={item._id}
            >
              <div className="booking-appoinment-div">
                <h4 style={{ color: "#054d56" }} className="mb-3 fs-4">
                  {item.serviceTitle}
                </h4>
                <h5 className="fw-bold">{item.serviceTime}</h5>
                <p className="text-uppercase" style={{ color: "gray" }}>
                  {item.serviceSpaces} space available
                </p>
                <h6 className="fw-bold mt-4">
                  Booking Fee: {item.serviceFee} Taka
                </h6>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    handleEditService(item._id);
                  }}
                >
                  Booking Appoinment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =============================================== */}
      {/* <!--Appoinment Booking Modal --> */}
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
            <form onSubmit={handleAppoinmentAddSubmit}>
              <div className="modal-header">
                <h1
                  className="modal-title fs-5"
                  id="exampleModalLabel"
                  style={{ color: "#054d56" }}
                >
                  {service.serviceTitle}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body modal-input">
                <div className="form-floating mb-4 mt-4">
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    aria-label="Large select example"
                    value={service.serviceTime}
                    disabled
                  >
                    <option selected></option>
                    <option value={service.serviceTime}>
                      {service.serviceTime}
                    </option>
                  </select>
                  <label for="floatingSelectGrid">Select Time</label>
                </div>

                <div className="form-floating mb-4 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    name="appoinmentName"
                    value={appointmentAddData.appoinmentName}
                    onChange={handleAppointmentDataChange}
                  />
                  <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-4 mt-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    disabled
                    value={userInfo.email}
                  />
                  <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating mb-4 mt-4">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Phone"
                    name="appoinmentPhone"
                    value={appointmentAddData.appoinmentPhone}
                    onChange={handleAppointmentDataChange}
                  />
                  <label for="floatingInput">Phone</label>
                </div>

                <div className="form-floating mb-4 mt-4">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Booking Fee"
                    value={service.serviceFee}
                    disabled
                  />
                  <label for="floatingInput">Booking Fee</label>
                </div>

                <div className="form-floating mb-4 mt-4">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Date"
                    value={new Date(customDate).toISOString().slice(0, 10)}
                    ref={apoiDateRef}
                    disabled
                  />
                  <label for="floatingInput">Date</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="booking-send"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableApoinment;
