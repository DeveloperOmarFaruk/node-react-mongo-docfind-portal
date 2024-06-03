import React from "react";
import LoginPic from "../../Images/Assets/login.png";
import useFirebase from "../../Hooks/useFirebase";
import { useLocation } from "react-router";

const Login = () => {
  const {
    handleGoogleSignin,
    setUserInfo,
    setError,
    alert,
    navigate,
    handleFormSignin,
    emailRef,
    passwordRef,
    setLoading,
  } = useFirebase();

  const location = useLocation();
  const windowScroll = () => {
    window.scrollTo(0, 0);
    navigate(location?.state ? location.state : "/home");
  };

  // =======================
  // Form Login Functionality
  // ========================
  const handleFormLogin = (e) => {
    e.preventDefault();
    handleFormSignin()
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user);
        windowScroll();
        alert.show("Login Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    emailRef.current.value = "";
    passwordRef.current.value = "";
    setLoading(true);
  };

  // ==========================
  // Google Login Functionality
  // ==========================
  const handleGoogleLogIn = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUserInfo(user);
        windowScroll();
        alert.show("Login Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    setLoading(true);
  };

  return (
    <>
      <div style={{ padding: "12rem 0rem 8rem 0rem" }}>
        <div className="section">
          <div className="row gx-5 gy-5 flex-wrap-reverse row-edit">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div>
                <h1
                  className="text-center"
                  style={{ color: "#054d56", marginBottom: "3rem" }}
                >
                  Login Form
                </h1>
                <form onSubmit={handleFormLogin}>
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
                    Login
                  </button>
                </form>

                <div className="text-center mt-4 mb-2">
                  <p>
                    Not a member?{" "}
                    <span
                      style={{ color: "#054d56", cursor: "pointer" }}
                      onClick={() => navigate(`/register`)}
                    >
                      Register Now
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
                    onClick={handleGoogleLogIn}
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

export default Login;
