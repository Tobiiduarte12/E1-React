import { styled } from "styled-components";

export const SectionAboutStyled = styled.section`
  padding: 50px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.pexels.com/photos/8279918/pexels-photo-8279918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: fixed;
`;

export const TextContainerStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: initial;
  word-spacing: 2px;
  line-height: 1.5;
  background-color: #ffffff62;
  border-radius: 5px;
  & h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 20px;
    border-bottom: 2px solid #141516;
    width: 100%;
    text-align: center;
  }
`;
