// import React from 'react'

import {
  FooterContainerStyled,
  FooterLinksStyled,
  FooterRedesStyled,
  FooterUpStyled,
} from "./FooterStyled";

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <FooterUpStyled>
        <FooterLinksStyled>
          <div>
            <a href="#">Buscar Tienda</a>
          </div>
          <div>
            <a href="#">Ayuda</a>
            <ul>
              <li>
                <a href="#">Envios y entregas</a>
              </li>
              <li>
                <a href="#">Devoluciones</a>
              </li>
              <li>
                <a href="#">Opciones de pago</a>
              </li>
              <li>
                <a href="#" style={{ color: "white" }}>
                  Boton de arrepentimiento
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#">Acerca de nosotros</a>
            <ul>
              <li>
                <a href="#">Noticias</a>
              </li>
              <li>
                <a href="#">Inversionistas</a>
              </li>
              <li>
                <a href="#">Sustentabilidad</a>
              </li>
            </ul>
          </div>
        </FooterLinksStyled>
        <FooterRedesStyled>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <TfiYoutube />
          </a>
          <a target="_blanck" href="https://www.instagram.com/materas.ctes/">
            <BsInstagram />
          </a>
        </FooterRedesStyled>
      </FooterUpStyled>
    </FooterContainerStyled>
  );
};

export default Footer;
