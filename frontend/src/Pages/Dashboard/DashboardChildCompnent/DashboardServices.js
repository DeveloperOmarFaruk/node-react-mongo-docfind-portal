import React from "react";
import useFunction from "../../../Hooks/useFunction";
import Loading from "../../../Components/MultiComponents/Loading";

const DashboardServices = () => {
  const {
    services,
    service,
    loading,
    servicesData,
    serviceUpdateData,
    setId,
    handleServiceAdd,
    handleServiceDelete,
    handleServiceUpdate,
    handleServicesDataChange,
    handleEditService,
    handleServicesDataUpdate,
  } = useFunction();

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
          <h4 style={{ color: "#054d56" }}>Dashboard Services</h4>

          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Service
          </button>
        </div>

        <div style={{ margin: "2rem 0rem" }}>
          {!loading && (
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Time</th>
                  <th scope="col">Spaces</th>
                  <th scope="col">Booking Fee</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Title">{item.serviceTitle}</td>
                    <td data-label="Time">{item.serviceTime}</td>
                    <td data-label="Spaces">{item.serviceSpaces}</td>
                    <td data-label="Booking Fee">{item.serviceFee}</td>
                    <td data-label="Action">
                      <button
                        type="button"
                        className="btn btn-success pt-1 pb-1 pe-2 ps-2 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        onClick={() => {
                          handleEditService(item._id);
                          setId(item._id);
                        }}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger pt-1 pb-1 pe-2 ps-2 m-2"
                        onClick={() => {
                          handleServiceDelete(item._id);
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
      {/* <!-- Add Service Modal --> */}
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
                Service Add Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleServiceAdd}>
              <div className="modal-body">
                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Title"
                    name="serviceTitle"
                    value={servicesData.serviceTitle}
                    onChange={handleServicesDataChange}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Title</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Time"
                    name="serviceTime"
                    value={servicesData.serviceTime}
                    onChange={handleServicesDataChange}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Titme</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Spaces"
                    name="serviceSpaces"
                    value={servicesData.serviceSpaces}
                    onChange={handleServicesDataChange}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Spaces</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Booking Fee"
                    name="serviceFee"
                    value={servicesData.serviceFee}
                    onChange={handleServicesDataChange}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Booking Fee</label>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-info"
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

      {/* ========================================= */}
      {/* <!-- Update Service Modal --> */}
      {/* ========================================= */}

      <div
        className="modal fade"
        id="exampleModal2"
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
                Service Update Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleServiceUpdate}>
              <div className="modal-body">
                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Title"
                    name="serviceTitle"
                    value={
                      serviceUpdateData.serviceTitle || service.serviceTitle
                    }
                    onChange={handleServicesDataUpdate}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Title</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Time"
                    name="serviceTime"
                    value={serviceUpdateData.serviceTime || service.serviceTime}
                    onChange={handleServicesDataUpdate}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Titme</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Spaces"
                    name="serviceSpaces"
                    value={
                      serviceUpdateData.serviceSpaces || service.serviceSpaces
                    }
                    onChange={handleServicesDataUpdate}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Spaces</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Booking Fee"
                    name="serviceFee"
                    value={serviceUpdateData.serviceFee || service.serviceFee}
                    onChange={handleServicesDataUpdate}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Booking Fee</label>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-info"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardServices;
