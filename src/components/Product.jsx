import React from "react";
import TRENDYONE from "/src/assets/trendyOne.png";
import Heading from "./Heading";

import { CiHeart } from "react-icons/ci";
import Image from "./Image";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addtocart } from "../slices/addToCartSlice";

const Product = ({productImage,productText,productTitle,productPrice}) => {
  let dispatch=useDispatch();
  let handleAddToCart =()=>{
    dispatch(addtocart({
      productImg:productImage,
      title:productTitle,
      price:productPrice,
      quantity:1
    }))
    
  }
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
            <TbShoppingCartPlus onClick={handleAddToCart}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
