import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="">
        <Link>
         <div className="h-[800px] bg-[url('/src/assets/banner.png')] bg-no-repeat bg-center bg-cover"></div>
        </Link>
       
      </div>
    </>
  )
}

export default Banner
