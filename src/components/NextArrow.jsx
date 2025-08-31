import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

const NextArrow = (props) => {
    
  const {   onClick } = props;
  return (
    <>
       <div
      className={"text-4xl absolute top-[50%] right-[20px] -translate-[50%]"}
      
      onClick={onClick}
    ><FaGreaterThan className='bg-amber-100 rounded-3xl'/></div>
    </>
  )
}

export default NextArrow
