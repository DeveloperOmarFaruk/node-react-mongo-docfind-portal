import React from "react";
import ErrorImage from "../../Images/Assets/404_page-not-found.png";
import useFunction from "../../Hooks/useFunction";

const Error404 = () => {
  const { navigate } = useFunction();

  return (
    <div style={{ padding: "10rem 0rem" }}>
      <div className="section">
        <div className="row gx-5 gy-5">
          <div className="clo-lg-4 col-md-12 col-sm-12 col-xs-12"></div>

          <div className="clo-lg-4 col-md-12 col-sm-12 col-xs-12">
            <img
              src={ErrorImage}
              alt="error_image"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="text-center">
              <button
                type="button"
                className="mt-4 btn btn-primary"
                onClick={() => {
                  navigate(`/`);
                  window.scrollTo(0, 0);
                }}
              >
                <i
                  className="fa-solid fa-house"
                  style={{ marginRight: "0.5rem" }}
                ></i>{" "}
                Back Home
              </button>
            </div>
          </div>

          <div className="clo-lg-4 col-md-12 col-sm-12 col-xs-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
