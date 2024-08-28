import React, { useState } from 'react';
import ProductsList from './ProductsList';
import ProductsSelected from './ProductsSelected';

const productsDb = [
  {
    "id": 1,
    "category": "Pizza",
    "name": "Vesuvius",
    "topping": [
      "Tomat", "Ost", "Skinka"
    ],
    "price": 79,
    "rank": 3
  },
  {
    "id": 2,
    "category": "Pizza",
    "name": "Hawaii",
    "topping": [
      "Tomat", "Ost", "Skinka", "Ananas"
    ],
    "price": 79,
    "rank": 1
  },
  {
    "id": 3,
    "category": "Pizza",
    "name": "Parma",
    "topping": [
      "Tomat", "Ost", "Parmaskinka", "Oliver", "Färska basilika"
    ],
    "price": 89,
    "rank": 2
  },
  {
    "id": 4,
    "category": "Dryck",
    "name": "Coca-cola, 33cl",
    "price": 10
  },
  {
    "id": 5,
    "category": "Dryck",
    "name": "Loka citron, 33cl",
    "price": 10
  },
  {
    "id": 7,
    "category": "Tillbehör",
    "name": "Pizzasallad",
    "price": 0
  },
  {
    "id": 8,
    "category": "Tillbehör",
    "name": "Bröd och smör",
    "price": 10
  }
]

const ProductsSection = () => {
  const [products, setProducts] = useState(productsDb.map((el) => ({ ...el, isSelected: false })));//емуляція запиту на сервер
  const [count, setCount] = useState(0);

  const selectProduct = (id) => {//2
    setProducts(products.map((el) => {
      let isSelectedVal = false;
      let order = false;

      if (el.id === id) {
        isSelectedVal = !el.isSelected;
        if (isSelectedVal) {
          setCount((prev) => prev + 1);
          order = count;
        } else {
          setCount((prev) => prev - 1)
        }
      } else {
        isSelectedVal = el.isSelected;
        order = el.order;
      }

      return { ...el, isSelected: isSelectedVal, order }
    }));
  }


  return (
    <div>
      <h1>Product Section</h1>
      <ProductsList products={products} selectProduct={selectProduct} />
      <ProductsSelected products={products} selectProduct={selectProduct}/>
    </div>
  );
}

export default ProductsSection;
