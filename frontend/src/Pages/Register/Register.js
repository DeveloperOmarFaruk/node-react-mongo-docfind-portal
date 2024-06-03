import React from "react";
import LoginPic from "../../Images/Assets/login.png";
import useFirebase from "../../Hooks/useFirebase";
import { useLocation } from "react-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useFunction from "../../Hooks/useFunction";

const Register = () => {
  const {
    handleGoogleSignin,
    setUserInfo,
    setError,
    auth,
    alert,
    navigate,
    nameRef,
    emailRef,
    passwordRef,

    setLoading,
  } = useFirebase();

  const { URL } = useFunction();

  const location = useLocation();
  const windowScroll = () => {
    window.scrollTo(0, 0);
    navigate(location?.state ? location.state : "/home");
  };

  // ============================
  // Form Register Functionality
  // ============================
  const handleFormRegister = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        const newUser = { email, displayName: name };
        setUserInfo(newUser);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        windowScroll();
        alert.show("Register Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setLoading(true);
  };

  // ============================
  // Google Register Functionality
  // ============================

  const handleGoogleRegister = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUserInfo(user);
        saveUser(user.email, user.displayName, "PUT");
        windowScroll();
        alert.show("Register Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    setLoading(true);
  };

  // ============================
  // Save User DB Functionality
  // ============================
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`${URL}/users`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return (
    <>
      <div
        className="login-container"
        style={{ padding: "12rem 0rem 8rem 0rem" }}
      >
        <div className="section">
          <div className="row gx-5 gy-5 flex-wrap-reverse row-edit">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div>
                <h1
                  className="text-center"
                  style={{ color: "#054d56", marginBottom: "3rem" }}
                >
                  Register Form
                </h1>
                <form onSubmit={handleFormRegister}>
                  <div className="form-floating mb-4 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Name"
                      ref={nameRef}
                      style={{ border: "1px solid #054d56" }}
                    />
                    <label for="floatingInput">Name</label>
                  </div>

                  {/* <div className="form-floating mb-4 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Username"
                      ref={userNameRef}
                      style={{ border: "1px solid #054d56" }}
                    />
                    <label for="floatingInput">Username</label>
                  </div> */}

                  <div className="form-floating mb-4 mt-4">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Email"
                      ref={emailRef}
                      style={{ border: "1px solid #054d56" }}
                    />
                    <label for="floatingInput">Email</label>
                  </div>

                  <div className="form-floating mb-4 mt-4">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Password"
                      ref={passwordRef}
                      style={{ border: "1px solid #054d56" }}
                    />
                    <label for="floatingInput">Password</label>
                  </div>

                  <button type="submit" className="booking-send">
                    Register
                  </button>
                </form>

                <div className="text-center mt-4 mb-2">
                  <p>
                    All ready register?{" "}
                    <span
                      style={{ color: "#054d56", cursor: "pointer" }}
                      onClick={() => navigate(`/login`)}
                    >
                      Login Now
                    </span>
                  </p>
                </div>
                <div className="text-center  mb-2">
                  <p>Or</p>
                </div>
                <div className="text-center  mb-4">
                  <button
                    type="submit"
                    className="booking-send"
                    onClick={handleGoogleRegister}
                  >
                    <i className="fa-brands fa-google-plus-g"></i> Google
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div>
                <img
                  src={LoginPic}
                  alt="login_image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
