function App() {
  return (
    <div className="container">
      <header>      
        <div  className="left_header">
          <div className="left_header_logo">
            <img width={70} height={70}src="/assets/img/logo_header.jpg" alt="logo" className="logo" />
          </div>
          <div className="left_header_info">
            <h1 className="name_shop">NikeShop</h1>
            <p className="boots_shop">Магазин реплекационных кросовок</p>
          </div>
        </div>
        <ul className="right_header">
          <li className="price">   
            <img width={25} src="/assets/icon/icon_cart.png" alt="cart" className="cart_price" />
            <span className="full_price">1230 рублей</span>     
          </li>
          <li>
            <img width={25} src="/assets/icon/icon_profile.png" alt="profile" className="profile" />
          </li>
        </ul>
      </header>
      <div className="main">
        <div className="heading_main">
          <h2 className="full_model_boots">Все модели кроссовок:</h2>
        </div>
        <div className="full_card_block">
            <div className="card">
              <img  src="/assets/img/nike_dunk.jpg" alt="" className="img_card" />
              <div className="info_card">
                <p className="card_boots_info">Nike Dunk black and white</p>
                <ul className="full_info_card_price">
                  <li className="price_boots_text">
                    Цена:
                  </li>
                  <li className="price_boots">
                    4999₽
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img  src="/assets/img/nike_dunk_sb.jpg" alt="" className="img_card" />
              <div className="info_card">
                <p className="card_boots_info">Nike Dunk SB gray and white</p>
                <ul className="full_info_card_price">
                  <li className="price_boots_text">
                    Цена:
                  </li>
                  <li className="price_boots">
                    4999₽
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img  src="/assets/img/nike_air_max_plus.jpg" alt="" className="img_card" />
              <div className="info_card">
                <p className="card_boots_info">Nike air max Tn Plus Hyper Blue</p>
                <ul className="full_info_card_price">
                  <li className="price_boots_text">
                    Цена:
                  </li>
                  <li className="price_boots">
                    5499₽
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img  src="/assets/img/nike_dunk.jpg" alt="" className="img_card" />
              <div className="info_card">
                <p className="card_boots_info">Nike Dunk black and white</p>
                <ul className="full_info_card_price">
                  <li className="price_boots_text">
                    Цена:
                  </li>
                  <li className="price_boots">
                    4999₽
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
