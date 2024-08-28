import React from 'react';
import Product from '../Product';

const ProductsList = ({ products, selectProduct }) => {

  return (
    <div>
      <h1>List of products</h1>
      {products.map(el => <Product key={el.id} {...el} selectProduct={selectProduct} />)}
    </div>
  );
}

export default ProductsList;
