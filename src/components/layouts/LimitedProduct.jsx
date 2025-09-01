import React, { useState, useEffect } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Product from "../Product";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const LimitedProduct = () => {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function viewData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    viewData();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };

  return (
    <div className="py-[50px]">
      <Container>
        <Heading
          text={"LIMITED EDITION"}
          tagName={"h3"}
          className={"text-[35px] font-medium text-center mb-[30px]"}
        />
        <div className="-mx-3">
            <Slider {...settings} >
          {allData.map((item) => (
            <div key={item.id}>
              <Product
                productImage={item.thumbnail}
                productText={item.category}
                productTitle={item.title}
                productPrice={`$${item.price}`}
              />
            </div>
          ))}
        </Slider>
        </div>
      </Container>
    </div>
  );
};

export default LimitedProduct;
