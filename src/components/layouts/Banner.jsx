import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Image";
import BannerImg from "/src/assets/banner.png";

const Banner = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <ul style={{ margin: "0px" }}> {dots} </ul>,
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "gray",
        }}
      ></div>
    ),
  };

  return (
    <>
      
      {/* <style>
        {`
          .slick-dots li.slick-active div {
            background: red !important;
            transform: scale(1.2);
          }
          .slick-dots li div {
            background: gray !important;
          }
        `}
      </style> */}

      <div className="">
        <Slider {...settings}>
          <div>
            <Image imgSrc={BannerImg} />
          </div>
          <div>
            <Image imgSrc={BannerImg} />
          </div>
          <div>
            <Image imgSrc={BannerImg} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
