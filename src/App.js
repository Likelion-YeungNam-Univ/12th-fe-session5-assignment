  /* App.js */
  import './App.css';
  //app.css 를 연결해주기  
  
  function App() { //app 함수 정의  //컴포넌트 반환해주기 위해서 function을 써줘야함
   

    //상품 목록  products 로 선언 해주기 
    const products = [
    { id: 1, info: { name: "사과", price: 1000 } },
    { id: 2, info: { name: "바나나", price: 1500 } },
    { id: 3, info: { name: "오렌지", price: 2000 } },
    { id: 4, info: { name: "포도", price: 2500 } },
  ];


  //상품 클릭 시 
  const onClick = (name) => {
    alert(name); 
  //alert는 브라우저에 경고창처럼 나오게 하는데 그때 name을 뜨게 하는 것 
  };

  return( //return문이 JSX를 사용하여 사용자에게 보여질 UI 정의 
    <div className="App">
      <h1>상품 목록</h1>
      <ul>

        {products.map((fruit) => (
        
        <li id={fruit.id}>
            
            <span
              onClick={() => {
                onClick(fruit.info.name); //클릭했을때 과일의 정보인 이름 나오게
              }}
            >
              <span id="name">{fruit.info.name}</span> - {fruit.info.price}원
              
            </span>
        
          </li>
        ))}
      
      </ul>
  
    </div>
  );
 
  }
  

export default App;