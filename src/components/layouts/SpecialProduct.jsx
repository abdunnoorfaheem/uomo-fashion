import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import SPRODUCTONE from "/src/assets/specialOne.png";
import SPRODUCTTWO from "/src/assets/specialTwo.png";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <>
      <div className="py-[100px]">
       <Container>
        <Flex className={"justify-between"}>
            <div className="w-[49%]">
                <Link>
                <Image imgSrc={SPRODUCTONE}/>
                </Link>
                
            </div>
            <div className="w-[49%]">
                <Link>
                <Image imgSrc={SPRODUCTTWO}/>
                </Link>
            </div>
        </Flex>
       </Container>
      </div>
    </>
  )
}

export default SpecialProduct
