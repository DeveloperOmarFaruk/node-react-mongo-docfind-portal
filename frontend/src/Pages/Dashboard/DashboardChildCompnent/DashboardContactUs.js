import React from "react";
import useFunction from "../../../Hooks/useFunction";
import Loading from "../../../Components/MultiComponents/Loading";

const DashboardContactUs = () => {
  const { loading, contacts, contact, handleViewContact, handleDeleteContact } =
    useFunction();
  return (
    <>
      <div style={{ margin: "15px 10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <h4 style={{ color: "#054d56" }}>Dashboard Contact</h4>

          <h4></h4>
        </div>

        <div style={{ margin: "2rem 0rem" }}>
          {!loading && (
            <table>
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Email">{item.contactEmail}</td>
                    <td data-label="Subject">{item.contactSubject}</td>

                    <td data-label="Action">
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          handleViewContact(item._id);
                        }}
                      >
                        Details
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger pt-1 pb-1 pe-2 ps-2 m-2"
                        onClick={() => {
                          handleDeleteContact(item._id);
                        }}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {loading && <Loading />}
        </div>
      </div>

      {/* ========================================= */}
      {/* <!-- Add Doctor Modal --> */}
      {/* ========================================= */}

      <div
        className="modal fade"
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
                Contact Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="mt-2 mb-4">
                <h5>Email</h5>
                <p>{contact.contactEmail}</p>
              </div>

              <div className="mt-2 mb-4">
                <h5>Subject</h5>
                <p>{contact.contactSubject}</p>
              </div>

              <div className="mt-2 mb-4">
                <h5>Message</h5>
                <p>{contact.contactMessage}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-info"
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

export default DashboardContactUs;
