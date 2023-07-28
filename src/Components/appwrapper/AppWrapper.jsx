// import React from 'react'

import HeroSection from "../HeroSection/HeroSection";
import Header from "../header/Header";
import { AppWrapperStyled } from "./AppWrapperStyled";

const AppWrapper = () => {
  return (
    <AppWrapperStyled>
      <Header />
      <HeroSection />
    </AppWrapperStyled>
  );
};

export default AppWrapper;
