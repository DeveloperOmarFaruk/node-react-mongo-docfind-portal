import React from "react";
import useFunction from "../../../Hooks/useFunction";
import DasboardDatePicker from "./DasboardDatePicker";

const DashboardHome = () => {
  const {
    appoinments,
    setIdView,
    appoinment,
    appoinmentsAdmin,
    adminAppoDate,
    setAdminAppoDate,
    handleAppoinmentAction,
    setAppoinmentAction,
    handleAppointmentView,
    appoinmentTotal,
    todayAppoinmentTotal,
    totalVisited,
    totalPaidPayment,
  } = useFunction();

  return (
    <>
      <div style={{ margin: "15px 10px" }}>
        <h4 style={{ color: "#054d56" }}>Dashboard</h4>

        <div style={{ margin: "2rem 0rem 3rem 0rem" }}>
          <div className="row gx-3 gy-5">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#A569BD" }}
              >
                <h4>{appoinmentTotal}</h4>
                <p>
                  Total
                  <br />
                  Appoinments
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#2ECC71" }}
              >
                <h4> {todayAppoinmentTotal}</h4>
                <p>
                  Today's
                  <br />
                  Appoinments
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#3498DB" }}
              >
                <h4> {totalVisited}</h4>
                <p>
                  Total
                  <br />
                  Visited Patient
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#EC7063 " }}
              >
                <h4> {totalPaidPayment}</h4>
                <p>
                  Total
                  <br />
                  Payment Paid
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <h4 style={{ color: "#054d56" }}>Recent Appoinments</h4>
          <div>
            <DasboardDatePicker
              adminAppoDate={adminAppoDate}
              setAdminAppoDate={setAdminAppoDate}
            />
          </div>
        </div>

        <div style={{ margin: "2rem 0rem" }}>
          <table>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Details</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appoinmentsAdmin.map((item) => (
                <tr key={item._id}>
                  <td data-label="Date">{item.appoinmentDate}</td>
                  <td data-label="Time">{item.appoinmentTime}</td>
                  <td data-label="Name">{item.appoinmentName}</td>
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
                      <>
                        <button
                          type="button"
                          className="btn btn-success pt-1 pb-1 pe-2 ps-2 m-2"
                          style={{ width: "5.5rem" }}
                        >
                          Paid
                        </button>

                        <button
                          type="button"
                          className="btn btn-success pt-1 pb-1 pe-2 ps-2 m-2"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                          onClick={() => {
                            setIdView(item._id);
                          }}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-danger pt-1 pb-1 pe-2 ps-2 m-2"
                        style={{ width: "5.5rem" }}
                      >
                        Non Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                <p>
                  {appoinment.appoinmentBookingFee} Taka{" "}
                  <space>
                    {appoinment.appoinmentPayment ? "Paid" : "Non Paid"}
                  </space>
                </p>
              </div>

              {appoinment.appoinmentPayment ? (
                <>
                  <div
                    className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                    style={{ fontSize: "18px" }}
                  >
                    <p style={{ color: "#054d56" }} className="fw-semibold">
                      Transiction Number:{" "}
                    </p>
                    <p>{appoinment.appoinmentPayment.created}</p>
                  </div>

                  <div
                    className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                    style={{ fontSize: "18px" }}
                  >
                    <p style={{ color: "#054d56" }} className="fw-semibold">
                      Card Last 4 disit:{" "}
                    </p>
                    <p>{appoinment.appoinmentPayment.last4}</p>
                  </div>
                </>
              ) : (
                <></>
              )}

              {appoinment.appoinmentAction ? (
                <div
                  className="d-flex justify-content-between align-self-center border border-info m-2 p-2 rounded-1"
                  style={{ fontSize: "18px" }}
                >
                  <p style={{ color: "#054d56" }} className="fw-semibold">
                    Visit Action:{" "}
                  </p>
                  <p>{appoinment.appoinmentAction.appoinmentAction}</p>
                </div>
              ) : (
                <></>
              )}
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

      {/* =============================================== */}
      {/* <!-- Appoinment Action  Modal --> */}
      {/* =============================================== */}

      <div
        className="modal fead "
        id="exampleModal1"
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
                Visiting Action
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form onSubmit={handleAppoinmentAction}>
              <div className="modal-body modal-input">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    onChange={(e) => setAppoinmentAction(e.target.value)}
                  >
                    <option value="Not Visited">Not Visited</option>
                    <option value="Visited">Visited</option>
                  </select>
                  <label for="floatingSelectGrid">Select</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="booking-send"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
