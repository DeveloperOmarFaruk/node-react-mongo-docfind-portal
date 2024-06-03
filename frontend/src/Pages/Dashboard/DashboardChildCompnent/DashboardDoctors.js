import React from "react";
import "../Dasboard.css";
import useFunction from "../../../Hooks/useFunction";
import Loading from "../../../Components/MultiComponents/Loading";

const DashboardDoctors = () => {
  const {
    loading,
    doctorsData,
    doctorImageRef,
    doctorUpdateImageRef,
    doctors,
    doctor,
    doctorsDataUpdate,
    setId,
    handleDoctorEdit,
    handleDoctorDelete,
    handleDoctorsDataChange,
    handleDoctorDataSubmit,
    handleDoctorsDataUpdateChange,
    handleDoctorUpdate,
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
          <h4 style={{ color: "#054d56" }}>Dashboard Doctors</h4>

          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Doctor
          </button>
        </div>

        <div style={{ margin: "2rem 0rem" }}>
          {!loading && (
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Program</th>
                  <th scope="col">Image</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Name">{item.doctorName}</td>
                    <td data-label="Category">{item.doctorCategory}</td>
                    <td data-label="Program">{item.doctorProgram}</td>
                    <td data-label="Image">
                      <img
                        src={item.doctorImage}
                        alt="doctor_image"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td data-label="Action">
                      <button
                        type="button"
                        className="btn btn-success pt-1 pb-1 pe-2 ps-2 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        onClick={() => {
                          handleDoctorEdit(item._id);
                          setId(item._id);
                        }}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger pt-1 pb-1 pe-2 ps-2 m-2"
                        onClick={() => {
                          handleDoctorDelete(item._id);
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
                Doctor Add Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleDoctorDataSubmit}>
              <div className="modal-body">
                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    style={{ border: "1px solid #054d56" }}
                    name="doctorName"
                    value={doctorsData.doctorName}
                    onChange={handleDoctorsDataChange}
                  />
                  <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    style={{ border: "1px solid #054d56" }}
                    name="doctorCategory"
                    value={doctorsData.doctorCategory}
                    onChange={handleDoctorsDataChange}
                  >
                    <option selected>Select Category</option>
                    <option value="Orthodontics & Dental Surgeon">
                      Orthodontics & Dental Surgeon
                    </option>
                    <option value="Oral & Diseases Specialist">
                      Oral & Diseases Specialist{" "}
                    </option>
                    <option value="Oral & Maxillofacial Surgery">
                      Oral & Maxillofacial Surgery{" "}
                    </option>
                    <option value="Oral & Dental Surgeon">
                      Oral & Dental Surgeon{" "}
                    </option>
                    <option value="Prosthetic Dentistry Specialist">
                      Prosthetic Dentistry Specialist{" "}
                    </option>
                  </select>
                  <label for="floatingSelectGrid">Category</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Program"
                    style={{ border: "1px solid #054d56" }}
                    name="doctorProgram"
                    value={doctorsData.doctorProgram}
                    onChange={handleDoctorsDataChange}
                  />
                  <label for="floatingInput">Program</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Choose Image"
                    style={{ border: "1px solid #054d56" }}
                    ref={doctorImageRef}
                  />
                  <label for="floatingInput">Choose Image</label>
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
      {/* <!-- Update Doctor Modal --> */}
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
                Doctor Update Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleDoctorUpdate}>
              <div className="modal-body">
                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    style={{ border: "1px solid #054d56" }}
                    name="doctorName"
                    value={doctorsDataUpdate.doctorName || doctor.doctorName}
                    onChange={handleDoctorsDataUpdateChange}
                  />
                  <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    style={{ border: "1px solid #054d56" }}
                    name="doctorCategory"
                    value={
                      doctorsDataUpdate.doctorCategory || doctor.doctorCategory
                    }
                    onChange={handleDoctorsDataUpdateChange}
                  >
                    <option selected>Select Category</option>
                    <option value="Orthodontics & Dental Surgeon">
                      Orthodontics & Dental Surgeon
                    </option>
                    <option value="Oral & Diseases Specialist">
                      Oral & Diseases Specialist{" "}
                    </option>
                    <option value="Oral & Maxillofacial Surgery">
                      Oral & Maxillofacial Surgery{" "}
                    </option>
                    <option value="Oral & Dental Surgeon">
                      Oral & Dental Surgeon{" "}
                    </option>
                    <option value="Prosthetic Dentistry Specialist">
                      Prosthetic Dentistry Specialist{" "}
                    </option>
                  </select>
                  <label for="floatingSelectGrid">Category</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Program"
                    style={{ border: "1px solid #054d56" }}
                    name="doctorProgram"
                    value={
                      doctorsDataUpdate.doctorProgram || doctor.doctorProgram
                    }
                    onChange={handleDoctorsDataUpdateChange}
                  />
                  <label for="floatingInput">Program</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Choose Image"
                    style={{ border: "1px solid #054d56" }}
                    ref={doctorUpdateImageRef}
                    disabled
                  />
                  <label for="floatingInput">Choose Image</label>
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

export default DashboardDoctors;
