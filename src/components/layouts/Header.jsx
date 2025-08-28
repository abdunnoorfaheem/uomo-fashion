import React from "react";
import Container from "../Container";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaSearch,FaRegUser,FaRegHeart,FaBars    } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
const Header = () => {
  return (
    <>
      <div className="py-[25px]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="">
                    <Link><Image imgSrc={Logo} /></Link>
                    
                </div>
                <div className="">
                    <ul className="flex gap-x-8 text-[14px] font-semibold">
                        <li><Link to={"/"}>HOME</Link></li>
                        <li><Link to={"/shop"}>SHOP</Link></li>
                        <li><Link>COLLECTION</Link></li>
                        <li><Link>JOURNAL</Link></li>
                        <li><Link>LOOKBOOK</Link></li>
                        <li><Link>PAGES</Link></li>
                    </ul>
                </div>
                <div className="flex gap-x-5 text-[20px]">
                    <FaSearch/>
                    <FaRegUser/>
                    <FaRegHeart/>
                    <LuShoppingBag/>
                    <FaBars/>
                </div>
            </Flex>
          
        </Container>
      </div>
    </>
  );
};

export default Header;
