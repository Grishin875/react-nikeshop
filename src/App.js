import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="cart_overlay">
        <cart className="wrapper_cart">
          <h5 className="cart_heading">
            Корзина товаров:
          </h5>
          <div className="carts_items">
            <div className="private_carts">
              <div className="private_img_carts">
                <img src="/assets/img/nike_dunk.jpg" alt="Nike Dunk" className="carts_img" />
              </div>
              <div className="private_info_carts">
                  <h4 className="heading_boots">
                    Nike Dunk black and white
                  </h4>
                  <p className="price_cart">
                    4999₽
                  </p>
              </div>
            </div>
          </div>
        </cart>
      </div>
      <Header/>
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
