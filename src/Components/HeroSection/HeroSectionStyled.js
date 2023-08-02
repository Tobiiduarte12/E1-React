import { styled } from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  color: #fff;
  height: calc(100vh - 80px);
  width: 100%;
`;

export const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  width: 60%;
  height: 140px;
  border: 1px solid #fff;
`;
