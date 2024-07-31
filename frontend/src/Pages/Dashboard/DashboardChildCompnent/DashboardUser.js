import React from "react";
import useFunction from "../../../Hooks/useFunction";
import Loading from "../../../Components/MultiComponents/Loading";

const DashboardUser = () => {
  const { setAdminEmail, handleMakeAdmin, loading, users } = useFunction();
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
          <h4 style={{ color: "#054d56" }}>Dashboard Users</h4>

          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Admin
          </button>
        </div>

        <div style={{ margin: "2rem 0rem" }}>
          {!loading && (
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Name">
                      {!item.displayName
                        ? item.user.displayName
                        : item.displayName}
                    </td>
                    <td data-label="Email">{item.email}</td>
                    <td data-label="Role">{item.role ? item.role : "user"}</td>
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
                Admin Create Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleMakeAdmin}>
              <div className="modal-body">
                <div className="form-floating mb-4 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    onChange={(e) => setAdminEmail(e.target.value)}
                    style={{ border: "1px solid #054d56" }}
                  />
                  <label for="floatingInput">Email</label>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-info"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Make Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUser;
