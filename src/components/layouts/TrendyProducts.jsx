import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Product from "../Product";
import TRENDYONE from "/src/assets/trendyOne.png";
import {useState,useEffect} from "react";
import axios from "axios";

const TrendyProducts = () => {
    let [allProduct,setAllProduct]=useState([]);
    
    useEffect(() => {

        async function viewProduct(){
        let data=await axios.get('https://dummyjson.com/products');
        setAllProduct(data.data.products);
        
        }
        viewProduct();
      
    }, []);
    
  return (
    <>
      <Container>
        <Heading
          text={"OUR TRENDY PRODUCTS"}
          tagName={"h3"}
          className={"text-[35px] font-medium text-center mb-[31px]"}
        />
        <Flex className={"justify-around px-[400px]"}>
          <div className="">
            <Heading
              text={"ALL"}
              tagName={"h4"}
              className={"text-[16px] font-medium"}
            />
          </div>
          <div className="">
            <Heading
              text={"NEWARRIVALS"}
              tagName={"h4"}
              className={"text-[16px] font-medium"}
            />
          </div>
          <div className="">
            <Heading
              text={"BEST SELLER"}
              tagName={"h4"}
              className={"text-[16px] font-medium underline"}
            />
          </div>
          <div className="">
            <Heading
              text={"TOP RATING"}
              tagName={"h4"}
              className={"text-[16px] font-medium"}
            />
          </div>
        </Flex>
        <div className="py-[30px]">
          <Flex className={"justify-between"}>
            <div className="flex flex-wrap justify-between">
              {
                
                    allProduct.map((item)=>(
                    <Product
                productImage={item.thumbnail}
                productText={item.category}
                productTitle={item.title}
                productPrice={item.price}
              />
                ))
               
              }
            </div>
            
           
            
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default TrendyProducts;
