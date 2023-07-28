// import React from 'react'

import FirstBtn from "../Buttons/FirstBtn";
import {
  HeaderLeftContainer,
  HeaderSearchContainer,
  HeaderStyled,
  InputSearch,
  LogoContainer,
  NavContainer,
} from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLeftContainer>
        <LogoContainer>
          <img src="./images/logo.jpg" alt="logo" />
        </LogoContainer>
        <HeaderSearchContainer>
          <InputSearch type="text" placeholder="Buscar..." />
          <FirstBtn>Hola</FirstBtn>
        </HeaderSearchContainer>
      </HeaderLeftContainer>
      <NavContainer>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </NavContainer>
    </HeaderStyled>
  );
};

export default Header;
