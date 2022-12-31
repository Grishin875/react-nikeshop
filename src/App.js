import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import React from "react";

const boots_new=[
  {
    title:"Nike Dunk Black and White",
    price:"4999",
    images:"/assets/img/nike_dunk.jpg"
  },
  {
    title:"Nike Dunk SB Black and White",
    price:"4999",
    images:"/assets/img/nike_dunk_sb.jpg"
  },
  {
    title:"Nike air max Tn Plus Blue and Black",
    price:"5490",
    images:"/assets/img/nike_air_max_plus.jpg"
  },
];
function App() {
  const [cartOpen, setCartOpen] = React.useState(false);


  return (
    <div className="container">
      {cartOpen ? <Cart closeCart = {() => setCartOpen(false)}/>  : null }
      <Header clickCart = {() => setCartOpen(true)}  />
      <div className="main">
        <div className="heading_main">
          <div className="block_model_boots">
            <h2 className="full_model_boots">Все модели кроссовок:</h2>
          </div>
          <div className="search_model_boots">
            <img src="/assets/icon/search_icon.png" alt="search" className="icon_search" />
            <input placeholder="Поиск..." className="search" />
          </div>
        </div>
        <div className="full_card_block">
            {boots_new.map((obj)=>(
              <Card title={obj.title} price={obj.price} images={obj.images}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
