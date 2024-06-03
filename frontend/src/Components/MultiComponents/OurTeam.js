import React from "react";
import "./MultiComponents.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFunction from "../../Hooks/useFunction";

const OurTeam = () => {
  const { doctors } = useFunction();

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="our-team-container">
        <div className="section">
          <h5
            className="text-center text-uppercase"
            style={{ color: "#054d56", fontWeight: "600" }}
          >
            Meet Our Team
          </h5>
          <h1
            className="text-center"
            style={{
              color: "#202020",
              fontWeight: "700",
              marginBottom: "2rem",
            }}
          >
            Our Creative Team
          </h1>

          <div>
            <Slider {...settings}>
              {doctors.map((item) => (
                <div key={item._id}>
                  <div className="our-team-section-div">
                    <img src={item.doctorImage} alt="doctor_image" />
                    <div className="our-team-section-div-info">
                      <div>
                        <h5>{item.doctorName}</h5>
                        <p> {item.doctorCategory}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
