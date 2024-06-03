import React from "react";

const WhyChoose = () => {
  return (
    <>
      <div className="why-choose-container">
        <div className="section">
          <div className="row gx-5 gy-5 flex-wrap-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="why-choose-left-info">
                <h1>
                  Why Choose <br />
                  Docfind Clinic?
                </h1>

                <p>
                  We invite you to join our dental family and experience the
                  difference that compassionate, professional dental care can
                  make. Contact us today to schedule your appointment and take
                  the first step towards a healthier, more beautiful smile.
                </p>

                <div className="why-choose-left-info-div">
                  <div>
                    <i className="fa-solid fa-heart-circle-plus"></i>
                  </div>

                  <div>
                    <h4>Quality Control System</h4>
                    <p>
                      We use the latest dental technologies and techniques to
                      ensure the best possible outcomes.
                    </p>
                  </div>
                </div>

                <div className="why-choose-left-info-div">
                  <div>
                    <i className="fa-solid fa-users"></i>
                  </div>

                  <div>
                    <h4>Highly Professional Staff</h4>
                    <p>
                      Our team consists of highly skilled and compassionate
                      dental professionals with years of experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="why-choose-left-info-img-div">
                <img
                  src="https://img.freepik.com/premium-photo/dentist-providing-dental-care-treatment-african-american-female-patient_695793-1615.jpg"
                  alt="why_choose_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
