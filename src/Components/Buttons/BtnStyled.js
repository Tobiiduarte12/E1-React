import { styled } from "styled-components";

export const FirstBtnStyled = styled.button`
  background-color: #1415166b;
  color: #fff;
  font-weight: bold;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #141516;
  }
`;

export const BtnAddToCartStyled = styled.button`
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  color: #fff;
  font-weight: bold;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #141516;
  }
`;
