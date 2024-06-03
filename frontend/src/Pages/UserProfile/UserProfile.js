import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const UserProfile = () => {
  const { userInfo } = useFirebase();
  console.log(userInfo.photoURL);
  return (
    <>
      <div style={{ padding: "12rem 0rem 8rem 0rem" }}>
        <div className="section">
          <div className="text-center">
            {userInfo.photoURL ? (
              <>
                {" "}
                <img
                  src={userInfo.photoURL}
                  alt="user_profile_image"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    border: "2px dotted #054d56",
                    margin: "10px",
                  }}
                />
              </>
            ) : (
              <></>
            )}
            <h3 style={{ color: "#054d56" }}>{userInfo.displayName}</h3>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
