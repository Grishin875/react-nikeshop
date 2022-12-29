import styleHeader from './header.modules.css'

function Header() {
    return(
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
    );
}

export default Header;