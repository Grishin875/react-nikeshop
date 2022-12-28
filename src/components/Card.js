function Card (){
    return(
        <div className="card">
            <button className="favorite">
                <img width={25} src="/assets/icon/unliked.svg" alt="" className="unliked" />
            </button>
              <img  src="/assets/img/nike_dunk.jpg" alt="" className="img_card" />
              <div className="info_card">
                <p className="card_boots_info">Nike Dunk black and white</p>
                <div className="bottom_card">
                  <div className="full_info_card_price">
                    <p className="price_boots_text">
                      Цена:
                    </p>
                    <p className="price_boots">
                      4999₽
                    </p>
                  </div>
                  <div className="btn_plus">
                    <button className="plus_block">
                      <img src="/assets/icon/plus.svg" alt="Plus" className="plus_icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
    );
}
export default Card;