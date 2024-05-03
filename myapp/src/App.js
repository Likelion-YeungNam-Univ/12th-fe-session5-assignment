import './App.css';

function App() {
  const products = [
    { id: 1, info: { name: "사과", price: 1000 } },
    { id: 2, info: { name: "바나나", price: 1500 } },
    { id: 3, info: { name: "오렌지", price: 2000 } },
    { id: 4, info: { name: "포도", price: 2500 } },
  ];

  // 해당 품목 name 알림 창 생성 함수
  function alertName(product) {
    alert(product.info.name);
  }

  return (
    <div className='content-container'>
      <h1>상품 목록</h1>
      <ul>
        {/* map() 이용하여 요소 생성 반복*/}
        {products.map((product) => (
            // key속성은 고유한 값인 id값으로 설정
            // 상품 클릭 시 해당 품목을 alertName()로 전달
            <li key={product.id} onClick={() => {alertName(product)}}>
              {product.info.name} - {product.info.price}원
            </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
