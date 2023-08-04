// import React from 'react'

import BtnAddToCart from "../Buttons/BtnAddToCart";
import { ProductCardContainerStyled } from "./ProductCardStyled";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, name, description, price }) => {
  return (
    <ProductCardContainerStyled>
      <img src={image} alt={name} style={{}} />
      <h3>{name}</h3> <span>$ {price}</span>
      <p>{description}</p>
      <BtnAddToCart />
    </ProductCardContainerStyled>
  );
};

export default ProductCard;
