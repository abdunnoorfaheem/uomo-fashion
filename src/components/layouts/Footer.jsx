import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SUBSCRIBE from "/src/assets/subscribe.png";
import COMPANY from "/src/assets/company.png";

const Footer = () => {
  return (
    <>
      <div className="py-[100px] bg-[#CFCDCD]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image imgSrc={Logo} />
              <Paragraph
                className={"w-[282px] text-[14px] mt-[51px] mb-[41px]"}
              >
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </Paragraph>
              <Heading
                text={"sale@uomo.com"}
                tagName={"h5"}
                className={"text-[14px] font-medium"}
              />
              <Heading
                text={"+1 246-345-0695"}
                tagName={"h5"}
                className={"text-[14px] font-medium"}
              />
              <div className="flex gap-x-6 mt-[48px]">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaPinterest />
              </div>
            </div>
            <div className="">
              <Heading
                text={"COMPANY"}
                tagName={"h3"}
                className={"text-[18px] font-medium mb-[24px]"}
              />
              <ul className="text-[14px] ">
                <li className="mb-[30px]">
                  <Link to={"/"}>HOME</Link>
                </li>
                <li className="mb-[30px]">
                  <Link to={"/shop"}>SHOP</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>COLLECTION</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>JOURNAL</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>LOOKBOOK</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>PAGES</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Heading
                text={"SHOP"}
                tagName={"h3"}
                className={"text-[18px] font-medium mb-[24px]"}
              />
              <ul className="text-[14px] ">
                <li className="mb-[30px]">
                  <Link to={""}>New Arrivals</Link>
                </li>
                <li className="mb-[30px]">
                  <Link to={""}>Accessories</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>Men</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>Women</Link>
                </li>
                <li className="mb-[70px]">
                  <Link>Shop All</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Heading
                text={"HELP"}
                tagName={"h3"}
                className={"text-[18px] font-medium mb-[24px]"}
              />
              <ul className="text-[14px] ">
                <li className="mb-[30px]">
                  <Link to={""}>Customer Service</Link>
                </li>
                <li className="mb-[30px]">
                  <Link to={""}>My Account</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>Find a Store</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>Legal & Privacy</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>Contact</Link>
                </li>
                <li className="mb-[30px]">
                  <Link>Gift Card</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <Image imgSrc={SUBSCRIBE} />
              <Paragraph
                className={"w-[282px] text-[14px] mt-[51px] mb-[41px]"}
              >
                Be the first to get the latest news about trends, promotions,
                and much more!
              </Paragraph>
             <Heading
                text={"Secure payments"}
                tagName={"h5"}
                className={"text-[15px] font-medium"}
              />
              <input type="text"  placeholder="Your email address" className="text-[14px] bg-white py-[10px] px-[21px] w-[330px] mt-[15px] mb-[30px]"/>
              <div className="">
              <Image imgSrc={COMPANY} className={"mb-[40px]"}/>
              </div>
            </div>
          </Flex>
          <div className="border-t-1 border-gray-400 ">
            <Flex className={"justify-between mt-[30px]"}>
              <div className="">
                <Heading
                text={"©2020 Uomo"}
                tagName={"h5"}
                className={"text-[14px] "}
              />
              </div>
              <div className="flex items-center gap-x-4">
                 <Heading
                text={"Language"}
                tagName={"h5"}
                className={"text-[14px] "}
              />
                 <Heading
                text={"United Kingdom  |  English"}
                tagName={"h5"}
                className={"text-[14px] "}
              />
                 <Heading
                text={"Currency"}
                tagName={"h5"}
                className={"text-[14px] "}
              />
                 <Heading
                text={"$ USD"}
                tagName={"h5"}
                className={"text-[14px] "}
              />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
