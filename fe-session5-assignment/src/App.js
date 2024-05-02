import "./App.css";
import React from "react";
function App() {
  //과일 배열 선언
  const fruits = [
    { id: 1, info: { name: "사과", price: 1000 } },
    { id: 2, info: { name: "바나나", price: 1500 } },
    { id: 3, info: { name: "오렌지", price: 2000 } },
    { id: 4, info: { name: "포도", price: 2500 } },
  ];
  
  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
       
      </ul>
    </div>
  );
}

export default App;
