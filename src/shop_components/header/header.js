import logo from '../img/logo.svg'
import cart_icon from '../img/cart_icon.png'
import icon_user from '../img/icon_user.png'
import React from "react";
import menu from '../img/menu.png'
import favouriteAfter from '../img/favorite-after.png';
import axios from "axios";
import {
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import './header.css'


const HeaderBlock = (props) => {
    const getObjects = () => {
        axios.get('https://6305daeadde73c0f844cf627.mockapi.io/items/items').then((items) => {
            items.data.map((item) => {
                console.log(item.id)
            })
        });
    }

    return (
        <header className='gradient mx-0'>
            <div className='d-flex flex-wrap p-4 justify-content-between align-items-center my-0'>
                <div className='mx-0 mt-4 d-flex flex-wrap align-items-center my-auto'>
                    <img src={logo} alt='logo' width={50} height={40} className='mr-0'></img>
                    <ul className='list-unstyled my-0 ml-2'>
                        <li>
                            <h3 className='mb-0'>React Sneakers</h3>
                        </li>
                        <li>
                            <div
                                onClick={getObjects}
                                className='mt-0'
                            >
                                Магазин лучших кроссовок
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    className='d-flex flex-wrap ml-2 mt-2 align-items-center justify-content-between align-content-center'>
                    <div>
                        <div style={{textDecoration: "none"}}
                             className='d-flex mb-3 align-items-center mr-2'>
                            <Link to='/cart' className='pb-1 cu-p'>
                                <div className="cartIcon p-1">
                                    <img src={props.iconClick ? menu : cart_icon} alt='ttt' width={20} height={20}/>
                                </div>
                            </Link>
                            {props.allPrice ? <div className='user_price ml-1'>{props.allPrice} ₽</div> :
                                <div className='ml-2'></div>}
                        </div>


                    </div>
                    <a href='#' className='my-auto'>
                        <img onClick={props.openFavouritesClick} className='mb-3 mx-2' src={favouriteAfter}
                             alt='user_icon' height={20} width={20}/>
                    </a>
                    <a href='#' className='px-2 mb-3 ml-2'>
                        <img src={icon_user} alt='user_icon' height={20} width={20}/>
                    </a>
                </div>
            </div>
        </header>
    )
}
export default HeaderBlock

/*    <div className="mx-auto col-sm-8 d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark shadow-sm">
    <img src={logo} height="40"  width="40" alt="ss" className="my-0 d-inline-block align-top"></img>
    <div className="header_title my-0 mr-md-auto d-inline-block align-top text-light brand_name">ReactApp</div>
    <nav className="nav my-2 my-md-0 mr-4">
      <a className="nav__link p-2 text-light" href="my_app/src/shop_components/header/header#">Home</a>
      <a className="nav__link p-2 text-light" href="my_app/src/shop_components/header/header#">
              <img className="settings_logo" src={settings_logo} alt="ss" width="30" height="30" title="settings icons"></img>
              <div className="d-inline ml-1">Favourites</div>
      </a>
      <a className="nav__link p-2 text-light" href="my_app/src/shop_components/header/header#">Enterprise</a>
      <a className="support nav__link p-2 text-light" href="my_app/src/shop_components/header/header#">Support</a>
    </nav>
    <a className="btn btn-primary" href="my_app/src/shop_components/header/header#">Sign up</a>
  </div>*/