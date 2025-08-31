import React from 'react';
import { FaLessThan } from "react-icons/fa";

const PrevArrow = (props) => {
    const {   onClick } = props;
      return (
        <>
           <div
          className={"text-4xl absolute top-[50%] left-[20px] -translate-[50%] z-10"}
          
          onClick={onClick}
        ><FaLessThan className='bg-amber-100 rounded-3xl'/></div>
        </>
      )
}

export default PrevArrow
