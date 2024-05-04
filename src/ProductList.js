const ProductList = () => {
    const products = [
        { id: 1, info: { name: "사과", price: 1000 } },
        { id: 2, info: { name: "바나나", price: 1500 } },
        { id: 3, info: { name: "오렌지", price: 2000 } },
        { id: 4, info: { name: "포도", price: 2500 } },
    ];


    let showFruitName = (item) => {
        alert(item.info.name);
    }

    return(
        <ul>
        { products.map(item => {
            return <li key={item.id} onClick={() => showFruitName(item)}>{item.info.name} - {item.info.price}</li>
        }) }
      </ul>
    )
}

export default ProductList;