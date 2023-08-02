// import React from 'react'

import ProductsWrapper from "../ProductsWrapper/ProductsWrapper";
import { SectionProductsStyled } from "./SectionProductsStyled";

const SectionProducts = () => {
  // const [products, setProducts] = useState([])

  return (
    <SectionProductsStyled>
      <h2>Nuestras mejores materas</h2>
      <ProductsWrapper />
    </SectionProductsStyled>
  );
};

export default SectionProducts;
