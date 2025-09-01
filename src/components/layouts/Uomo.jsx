import React from "react";
import Image from "../Image";
import UOMO from "/src/assets/uomo.png";
import Container from "../Container";
import Heading from "../Heading";

const Uomo = () => {
  return (
    <>
      <div className="py-[50px]">
        <Container>
            <Heading text={"@UOMO"} tagName={"h3"} className={"text-[35px] text-center mb-[32px]"}/>
          <Image imgSrc={UOMO} />
        </Container>
      </div>
    </>
  );
};

export default Uomo;
