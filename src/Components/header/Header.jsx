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

import { AiOutlineHome } from "react-icons/ai";

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
            <a
              style={{ display: "flex", alignItems: "center", gap: "2px" }}
              href="#"
            >
              Home <AiOutlineHome />
            </a>
          </li>
          <li>
            <a
              style={{ display: "flex", alignItems: "center", gap: "2px" }}
              href="#"
            >
              Products
            </a>
          </li>
          <li>
            <a
              style={{ display: "flex", alignItems: "center", gap: "2px" }}
              href="#"
            >
              About us
            </a>
          </li>
        </ul>
      </NavContainer>
    </HeaderStyled>
  );
};

export default Header;
