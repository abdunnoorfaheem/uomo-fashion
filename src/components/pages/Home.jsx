import React from 'react';
import Banner from '../layouts/Banner';
import HotList from '../layouts/HotList';
import TrendyProducts from '../layouts/TrendyProducts';
import SpringCollections from '../layouts/SpringCollections';
import SpecialProduct from '../layouts/SpecialProduct';
import LimitedProduct from '../layouts/LimitedProduct';
import Uomo from '../layouts/Uomo';
import Facility from '../layouts/Facility';


const Home = () => {
  return (
    <>
   
     <Banner/>
     <HotList/>
     <TrendyProducts/>
     <SpringCollections/>
     <SpecialProduct/>
     <LimitedProduct/>
     <Uomo/>
     <Facility/>
    </>
  )
}

export default Home
