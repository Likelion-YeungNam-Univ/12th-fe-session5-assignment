import './App.css';

function List(){
  const products = [
    { id: 1, info: { name: "사과", price: 1000 } },
    { id: 2, info: { name: "바나나", price: 1500 } },
    { id: 3, info: { name: "오렌지", price: 2000 } },
    { id: 4, info: { name: "포도", price: 2500 } },
  ];
  
  const listItemClick = (listItem) => {
    alert(listItem);
  }

  const lists = products.map((list)=>
    <ul>
      <li key="list.id" onClick={() => listItemClick(list.info.name)}><span>{list.info.name}</span> - {list.info.price}원</li>
    </ul>
  )

  return (
    lists
  );
}

function App() {
  return (
    <div>
      <h1>상품목록</h1>
      <List></List>
    </div>
  );
}

export default App;
