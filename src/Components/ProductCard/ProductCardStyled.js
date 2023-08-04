import { styled } from "styled-components";

export const ProductCardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;

  height: auto;
  margin: 20px;
  border-radius: 10px;
  background-color: #141516;
  box-shadow: 0 0 10px #141516;
  transition: all 0.3s ease-in-out;
  padding-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #141516;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #fff;
  }

  & h3 {
    font-size: 1.2rem;
    color: #fff;
    margin: 10px 5px;
  }

  & span {
    font-size: 1.2rem;
    color: #5a5a5a;
    font-weight: 600;
  }

  & p {
    font-size: 1rem;
    color: #fff;
    margin: 10px 0;
    max-width: 80%;
    text-align: center;
    border-bottom: 1px solid #5a5a5a;
    margin-bottom: 8px;
  }
`;
