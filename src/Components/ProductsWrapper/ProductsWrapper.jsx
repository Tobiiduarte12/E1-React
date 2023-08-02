// import React from 'react'

import ProductCard from "../ProductCard/ProductCard";
import { ProductsWrapperStyled } from "./ProductsWrapperStyled";
import { DataProducts } from "../../data/DataProducts";

const ProductsWrapper = () => {
  return (
    <ProductsWrapperStyled>
      {DataProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ProductsWrapperStyled>
  );
};

export default ProductsWrapper;
