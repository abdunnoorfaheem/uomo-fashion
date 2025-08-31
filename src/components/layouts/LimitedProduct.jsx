import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Flex from '../Flex';
import Product from '../Product';
import IMG from "/src/assets/trendyOne.png";
import {useState,useEffect} from "react";
import axios from 'axios';
import Slider from "react-slick";

const LimitedProduct = () => {
    let [allData,setAllData]=useState([]);
    
    useEffect(() => {

        async function viewData(){
        let data= await axios.get('https://dummyjson.com/products');
        setAllData(data.data.products);
        
        }
     viewData();
    }, []);
  return (
    <>
      <div className="py-[50px]">
        <Container>
            <Heading text={"LIMITED EDITION"} tagName={"h3"} className={"text-[35px] font-medium text-center"}/>
            <div className="">
                <Flex className={"flex-wrap gap-x-4 "}>
                    
                       {
                        allData.map((item)=>(
                            <div className="w-[24%] ">
                                 <Product productImage={item.thumbnail} productText={item.category} productTitle={item.title} productPrice={`$${item.price}`}/>
                            </div>
                        ))
                       }
                   
                </Flex>
            </div>
        </Container>
      </div>
    </>
  )
}

export default LimitedProduct
