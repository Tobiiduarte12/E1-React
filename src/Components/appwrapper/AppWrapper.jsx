// import React from 'react'

import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import SectionAbout from "../SectionAbout/SectionAbout";
import SectionProducts from "../SectionProducts/SectionProducts";
import Header from "../header/Header";
import { AppWrapperStyled } from "./AppWrapperStyled";

const AppWrapper = () => {
  return (
    <AppWrapperStyled>
      <Header />
      <HeroSection />
      <SectionProducts />
      <SectionAbout />
      <Footer />
    </AppWrapperStyled>
  );
};

export default AppWrapper;
