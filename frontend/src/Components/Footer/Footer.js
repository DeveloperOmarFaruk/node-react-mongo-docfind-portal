import React from "react";
import "./Footer.css";
import FooterLogo from "../../Images/Assets/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="fooer-container">
        <div className="section">
          <div className="row gx-5 gy-5">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="footer-div">
                <img src={FooterLogo} alt="footer_logo" />
                <p>
                  We offer flexible scheduling options, including early morning
                  and evening appointments, to accommodate your busy lifestyle.
                </p>

                <div className="footer-div-icon">
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="row gx-5 gy-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="footer-div-link">
                    <h4>Services</h4>
                    <p>
                      <Link to="#">Therapiya</Link>
                    </p>
                    <p>
                      <Link to="#">Dentistry</Link>
                    </p>
                    <p>
                      <Link to="#">Virusology</Link>
                    </p>
                    <p>
                      <Link to="#">Pharmocology</Link>
                    </p>
                    <p>
                      <Link to="#">Cardiology</Link>
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="footer-div-link">
                    <h4>Useful Links</h4>
                    <p>
                      <Link to="#">Home</Link>
                    </p>
                    <p>
                      <Link to="#">About</Link>
                    </p>
                    <p>
                      <Link to="#">Dental Service</Link>
                    </p>
                    <p>
                      <Link to="#">Review</Link>
                    </p>
                    <p>
                      <Link to="#">Contact Us</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="footer-div-link">
                <h4>Subscribe</h4>
                <form>
                  <div class="form-floating mt-4 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      style={{ border: "1px solid #054d56" }}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
                <p>
                  Get The Latest Updates via email. Any time you may unsubscribe
                </p>
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-wrap-reverse justify-content-between align-center"
            style={{ margin: "4rem auto 1rem auto" }}
          >
            <div className="footer-div-copyright">
              <p>
                © Website{" "}
                <span style={{ color: "  color: #054d56", fontWeight: "bold" }}>
                  2024
                </span>{" "}
                | All Rights Reserved | Developed by{" "}
                <span style={{ color: "  color: #054d56", fontWeight: "bold" }}>
                  Developer.OmarFaruk
                </span>
              </p>
            </div>

            <div className="d-flex justify-content-start align-center footer-div-copyright">
              <p>
                <Link>Privacy</Link> |
              </p>

              <p>
                <Link>Terms</Link> |
              </p>
              <p>
                <Link>Help</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
