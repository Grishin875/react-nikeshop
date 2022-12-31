import cartStyle from './cart.modules.css'

function Cart(props) {
    return(
        <div className="cart_overlay">
        <div className="wrapper_cart">
          <h5 className="cart_heading">
            Корзина товаров:
            <img onClick={props.closeCart} src="/assets/icon/btn-remove.svg" alt="Close_cart" className="close_cart" />
          </h5>
          <div className="cart_items">
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
              <img src="/assets/icon/btn-remove.svg" alt="remove" className="remove" />
            </div>
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
              <img src="/assets/icon/btn-remove.svg" alt="remove" className="remove" />
            </div>
          </div>
          <div className="block_place_an_order">
            <div className="block_delivery">
              <p className="place_an_order_heading">Доставка :</p>
              <p className="block_price">Бесплатная</p>
            </div>
            <div className="block_place">
              <p className="place_an_order_heading">Итого :</p>
              <p className="block_price">23490₽</p>
            </div>
            <button className="btn_delivery">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    );
}

export default  Cart;