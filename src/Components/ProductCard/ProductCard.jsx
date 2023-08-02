// import React from 'react'

import { ProductCardContainerStyled } from "./ProductCardStyled";

const ProductCard = () => {
  return (
    <ProductCardContainerStyled>
      <img src="/images/matera 1.png" alt="" style={{ height: "200px" }} />
      <h3>Matera 1</h3>
      <p>Lorem ipsum dolor sit.</p>
      <button>Add to cart</button>
    </ProductCardContainerStyled>
  );
};

export default ProductCard;
