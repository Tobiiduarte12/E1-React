// import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { SplideStyled } from "./SplideStyled";

const SplideWrapper = () => {
  const options = {
    type: "loop",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    rewind: true,
    gap: "1rem",
  };

  return (
    <>
      <Splide options={options} />
      <SplideSlide>
        <img src="./images/logo.jpg" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src="./images/logo.jpg" alt="" />
      </SplideSlide>
    </>
  );
};

export default SplideWrapper;
