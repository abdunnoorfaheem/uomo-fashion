import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import FACILITYONE from "/src/assets/avatarOne.png";
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import FACILITYTWO from "/src/assets/avatarTwo.png";
import FACILITYTHREE from "/src/assets/avatarThree.png"

const Facility = () => {
  return (
    <>
      <div className="py-[50px]">
        <Container>
            <Flex className={"justify-around"}>
                <div className="text-center">
                   <div className="">
                     <Image imgSrc={FACILITYONE} className={"m-auto"}/>
                   </div>
                    <Heading text={"FAST AND FREE DELIVERY"} tagName={"h4"} className={"text-[18px] mt-[23px] mb-[8px] font-semibold"}/>
                    <Paragraph className={"text-[15px] text-[#000000] opacity-[.85]"}>Free delivery for all orders over $140</Paragraph>
                </div>
                <div className="text-center">
                   <div className="">
                     <Image imgSrc={FACILITYTWO} className={"m-auto"}/>
                   </div>
                    <Heading text={"24/7 CUSTOMER SUPPORT"} tagName={"h4"} className={"text-[18px] mt-[23px] mb-[8px] font-semibold"}/>
                    <Paragraph className={"text-[15px] text-[#000000] opacity-[.85]"}>Friendly 24/7 customer support</Paragraph>
                </div>
                <div className="text-center">
                   <div className="">
                     <Image imgSrc={FACILITYTHREE} className={"m-auto"}/>
                   </div>
                    <Heading text={"MONEY BACK GUARANTEE"} tagName={"h4"} className={"text-[18px] mt-[23px] mb-[8px] font-semibold"}/>
                    <Paragraph className={"text-[15px] text-[#000000] opacity-[.85]"}>We return money within 30 days</Paragraph>
                </div>
                
            </Flex>
        </Container>
      </div>
    </>
  )
}

export default Facility
