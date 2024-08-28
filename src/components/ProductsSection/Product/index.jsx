import React from 'react';

const Product = ({ id, category, name, price, isSelected, selectProduct, }) => {
  const styles = { border: isSelected ? '5px solid green' : undefined };
  const handleClick = () => selectProduct(id)
  return (
    <article onClick={handleClick} style={styles}>
      <h2>{category}</h2>
      <h3>{name}</h3>
      <p>{price}</p>
    </article>
  );
}

export default Product;
