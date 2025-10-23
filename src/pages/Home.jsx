import React from "react";
import DirectorInfo from "../Components/DirectorInfo"; // 👈 import
import HeroImage from "../Components/HeroImage";
import Detail from "../Components/Detail";
import Faq from "../Components/Faq";

function Home() {
  return (
    <>
      <HeroImage/>
      <DirectorInfo />  
      <Detail />
      <Faq />
    </>
  );
}

export default Home;
