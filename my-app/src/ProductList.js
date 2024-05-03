import React from 'react';

function ProductList() {
   // 배열 데이터
   const products = [
    { id: 1, info: { name: "사과", price: 1000 } },
    { id: 2, info: { name: "바나나", price: 1500 } },
    { id: 3, info: { name: "오렌지", price: 2000 } },
    { id: 4, info: { name: "포도", price: 2500 } },
  ];

  return (
      <div>
      <h1>상품 목록</h1>
      <ul>
        {products.map((product)=>(
          <li 
          onClick={() => {
            alertName(product.info.name);
          }}
          key={product.id}>{product.info.name} - {product.info.price}원</li>
        ))}
        </ul>
    </div>
  );
}

const alertName = (name) => {
  alert(name);
}

export default ProductList;