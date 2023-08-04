import { styled } from "styled-components";

export const SectionProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  background-color: #1415166b;
  width: 100%;

  & h2 {
    font-size: 2.8rem;
    font-weight: 900;
    color: #141516;
    border-bottom: 2px solid #ffff;
    background: linear-gradient(
      180deg,
      rgba(44, 226, 186, 1) 42%,
      rgba(221, 169, 47, 0.896796218487395) 70%
    );
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
  }
`;
