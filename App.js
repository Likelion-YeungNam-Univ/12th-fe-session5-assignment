import React from 'react';
import './App.css';

const products = [
  { id: 1, info: { name: "사과", price: 1000 } },
  { id: 2, info: { name: "바나나", price: 1500 } },
  { id: 3, info: { name: "오렌지", price: 2000 } },
  { id: 4, info: { name: "포도", price: 2500 } },
];

function App() {
  const handleClick = (productName) => {
    alert(`선택한 상품: ${productName}`);
  };

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={() => handleClick(product.info.name)}>
            {product.info.name} - {product.info.price}원
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
