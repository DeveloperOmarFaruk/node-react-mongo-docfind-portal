import React from "react";

const Loading = () => {
  return (
    <>
      <div
        style={{
          padding: "15rem 0rem",
          margin: "auto",
          width: "10%",
          display: "block",
        }}
      >
        <div
          className="spinner-border text-info mb-3 text-center"
          role="status"
          style={{ marginLeft: "3.5rem" }}
        >
          <span className="visually-hidden text-center">Loading...</span>
        </div>
        <div className="text-center">
          <h4 style={{ color: "#054d56" }}>Loading...</h4>
        </div>
      </div>
    </>
  );
};

export default Loading;
