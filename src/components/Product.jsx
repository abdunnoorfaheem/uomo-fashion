import React from "react";
import TRENDYONE from "/src/assets/trendyOne.png";
import Heading from "./Heading";

import { CiHeart } from "react-icons/ci";
import Image from "./Image";

const Product = ({productImage,productText,productTitle,productPrice}) => {
  return (
    <>
      <div className="">
        <Image imgSrc={productImage} />
        <div className="flex justify-between">
          <div className="">
            <Heading
              text={productText}
              tagName={"h5"}
              className={"text-[14px]"}
            />
            <Heading
              text={productTitle}
              tagName={"h4"}
              className={"text-[16px]"}
            />
            <Heading text={productPrice} tagName={"h5"} className={"text-[16px]"} />
          </div>
          <div className="mt-[10px] text-[18px]">
            <CiHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
