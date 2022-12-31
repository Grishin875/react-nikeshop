import React from 'react';
import cardStyles from './card.modules.css'


function Card (props){
  const [isAdded, setIsAdded] = React.useState(false);

  const OnclickPlus = () => {
    setIsAdded(!isAdded );
  };
    return(
        <div className="card">
            <button className="favorite">
                <img width={25} src="/assets/icon/unliked.svg" alt="" className="unliked" />
            </button>
              <img  src={props.images} alt="Boots_image" className="img_card" />
              <div className="info_card">
                <p className="card_boots_info">{props.title}</p>
                <div className="bottom_card">
                  <div className="full_info_card_price">
                    <p className="price_boots_text">
                      Цена:
                    </p>
                    <p className="price_boots">
                      {props.price}₽
                    </p>
                  </div>
                  <div className="btn_plus">
                      <img onClick={OnclickPlus} src={isAdded ? '/assets/icon/btn-checked.svg' : '/assets/icon/plus.svg'} alt="Plus" className="plus_icon" />
                  </div>
                </div>
              </div>
            </div>
    );
}
export default Card;