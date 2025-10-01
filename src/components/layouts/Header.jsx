import React from "react";
import Container from "../Container";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaSearch, FaRegUser, FaRegHeart, FaBars } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Header = () => {
  let [showCart, setShowCart] = useState(false);
  let data = useSelector((state) => state.addtocart.value);
  return (
    <>
      <div className="py-[25px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Link>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <div className="">
              <ul className="flex gap-x-8 text-[14px] font-semibold">
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link to={"/shop"}>SHOP</Link>
                </li>
                <li>
                  <Link>COLLECTION</Link>
                </li>
                <li>
                  <Link>JOURNAL</Link>
                </li>
                <li>
                  <Link>LOOKBOOK</Link>
                </li>
                <li>
                  <Link>PAGES</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-5 text-[20px] relative">
              <FaSearch />
              <FaRegUser />
              <FaRegHeart />
              <LuShoppingBag
                onClick={() => {
                  setShowCart(!showCart);
                }}
              />
              <FaBars />
            </div>
          </Flex>
          {showCart && (
            <div
              className="h-screen w-[600px] bg-lime-100 absolute right-0 top-0"
              onClick={() => {
                setShowCart(!showCart);
              }}
            >
              <RxCross1 />
              <ul className="py-7">
                <div className="flex justify-between bg-gray-300 py-4 px-2 font-bold">
                  <li>Product</li>
                  <li>Product Name</li>
                  <li>Product price</li>
                  <li>Product Quantity</li>
                </div>
                {data.map((item) => (
                  <div
                    className="flex justify-between py-3 px-2 bg-white"
                    key={item.id}
                  >
                    <li>
                      <img src={item.productImg} className="w-[60px]" />
                    </li>
                    <li>{item.title}</li>
                    <li>{item.price}</li>
                    <li>{item.quantity}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Header;
