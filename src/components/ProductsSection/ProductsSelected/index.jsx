import React from 'react';

const ProductsSelected = ({ products, selectProduct }) => {
  
  console.group();
  for (let {name, order} of products) {
    console.log(name, order)
  }
  console.groupEnd();

  const products_sorted = products.filter(el => el.isSelected).sort((a, b) => a.order - b.order);
  // console.log(products_sorted)
  return (
    <div>
      <h1>List of selected</h1>
      <ul>
        {
          products_sorted
            .map(el => <li key={el.id} onClick={() => {
              selectProduct(el.id)
            }}>{el.name}</li>)
        }
      </ul>

    </div>
  );
}

export default ProductsSelected;
