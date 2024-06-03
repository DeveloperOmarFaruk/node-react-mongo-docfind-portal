import React from "react";
import useFunction from "../../Hooks/useFunction";

const ContactUs = () => {
  const { handleContactChange, handleContactSubmit, contactData } =
    useFunction();
  return (
    <>
      <div className="contact-us-container">
        <div className="section">
          <h5
            className="text-center text-uppercase"
            style={{ color: "#ffffff", fontWeight: "600" }}
          >
            Contact Us
          </h5>
          <h1
            className="text-center"
            style={{
              color: "#ffffff",
              fontWeight: "700",
              marginBottom: "4rem",
            }}
          >
            Always Connect With Us
          </h1>

          <div className="row gx-5 gy-5">
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <form className="contact-us-form" onSubmit={handleContactSubmit}>
                <div class="form-floating mb-4 mt-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email Address"
                    required
                    name="contactEmail"
                    value={contactData.contactEmail}
                    onChange={handleContactChange}
                  />
                  <label for="floatingInput">Email Address</label>
                </div>

                <div class="form-floating mb-4 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Your Subject"
                    required
                    name="contactSubject"
                    value={contactData.contactSubject}
                    onChange={handleContactChange}
                  />
                  <label for="floatingInput">Your Subject</label>
                </div>

                <div class="form-floating mb-4 mt-4">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Your Message"
                    id="floatingTextarea2"
                    style={{ height: "200px" }}
                    required
                    name="contactMessage"
                    value={contactData.contactMessage}
                    onChange={handleContactChange}
                  ></textarea>
                  <label for="floatingTextarea2">Your Message</label>
                </div>

                <div className="mt-4 text-left">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
