import { styled } from "styled-components";

export const FooterContainerStyled = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px #141516;
  transition: all 0.3s ease-in-out;
  padding-bottom: 20px;
  width: 100%;
  height: auto;
  border-top: 1px solid #fff;
`;

export const FooterUpStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLinksStyled = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  text-align: initial;

  & a {
    color: #fff;
    font-weight: 700;
  }

  & li a {
    color: #5a5a5a;
    font-weight: 200;
    font-size: 0.8rem;
    transition: all 0.3s ease-in-out;
  }

  & li a:hover {
    color: #fff;
  }
`;
export const FooterRedesStyled = styled.div`
  display: flex;
  gap: 10px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 0 10px 0 10px;

  & a {
    color: #fff;
    opacity: 0.5;
  }

  & a:hover {
    opacity: 1;
  }
`;
