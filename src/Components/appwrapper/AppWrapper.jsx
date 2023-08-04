// import React from 'react'

import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import SectionProducts from "../SectionProducts/SectionProducts";
import Header from "../header/Header";
import { AppWrapperStyled } from "./AppWrapperStyled";

const AppWrapper = () => {
  return (
    <AppWrapperStyled>
      <Header />
      <HeroSection />
      <SectionProducts />
      <Footer />
    </AppWrapperStyled>
  );
};

export default AppWrapper;
