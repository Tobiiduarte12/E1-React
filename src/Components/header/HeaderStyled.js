import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  background-color: #14151662;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #000;
  position: fixed;
  top: 0;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoContainer = styled.figure`
  height: 50px;
  width: 50px;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`;

export const HeaderSearchContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const NavContainer = styled.nav`
  padding: 10px;
  border-radius: 5px;
  /* background-color: #141323; */
  width: 300px;
  & ul {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-around;
  }

  & li a {
    color: #ffffff62;
    transition: all 0.1s ease-in-out;
    padding: 5px;
    border-radius: 5px;
  }

  & li a:hover {
    color: #fff;
    background-color: #141516;
  }
`;

export const InputSearch = styled.input`
  border: none;
  border-bottom: 1px solid #141516;
  padding: 5px;
  outline: none;
  background-color: #ffffff62;
  transition: all 0.3s ease-in-out;
  border-radius: 10px 5pc 0 0;
  font-weight: 600;
  :focus {
    border-bottom: 1px solid #141516;
  }
`;
