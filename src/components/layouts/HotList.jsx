import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import  HOTONE  from "/src/assets/hotOne.png";
import HOTTWO  from "/src/assets/hotTwo.png";
import HOTTHREE  from "/src/assets/hotThree.png";
import  HOTFOUR from "/src/assets/hotFour.png";
import { Link } from 'react-router-dom';

const HotList = () => {
  return (
    <>
      <div className="py-[50px]">
        <Container>
        <Flex className={"justify-between"}>
            <div className="w-[49%]">
                <Link><Image imgSrc={HOTONE}/></Link>
            </div>
            <div className="w-[49%]">
                <div className="">
                    <Link><Image imgSrc={HOTTWO}/></Link>
                </div>
                <div className="flex mt-[20px] justify-between">
                    <div className="w-[49%]">
                        <Link><Image imgSrc={HOTTHREE}/></Link>
                    </div>
                    <div className="w-[49%]">
                        <Link><Image imgSrc={HOTFOUR}/></Link>
                    </div>
                </div>
            </div>
        </Flex>
      </Container>
      </div>
    </>
  )
}

export default HotList
