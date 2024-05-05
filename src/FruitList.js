import React from 'react';

function FruitList() {
  // 배열 데이터
  const fruits = ['사과 - 1000원', '바나나 - 1500원', '오렌지 - 2000원', '포도 - 2500원'];

  return (
    <div>
      <h1>상품 목록</h1>
      {/* 배열 요소를 매핑하여 리스트 생성 */}
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={fruit.id} > {fruit}</li>
        })}
      </ul>
    </div>
  );
}

export default FruitList;
//test about what is problem of error in Git Hub
//check out change
//resetting git origin
//why "There isn’t anything to compare." I don't know
//latest commit
//not up to date don't lie
//once again
//starting from first
//fruit list 123