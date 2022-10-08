import {Link} from "react-router-dom";
import menu from "../../resources/img/menu.png";
import favouriteAfter from "../../resources/img/favorite-after.png";
import React from "react";

const HeaderItems = (props) => {
    const setClassName = () => {
        return (props.widthSmall ? `d-flex flex-wrap my-auto align-items-center justify-content-around align-content-center w-25`
            : `hiddenMenuBlock ${props.displayNone} header__grid`)
    }
    return (
        <div
            id='allItems'
            className={setClassName()}>
            <div className='header__link' style={{textDecoration: "none"}}>
                <Link to='/cart'>
                    <div className="my-2 inner_icons">
                        <img style={{display: 'block'}}
                             className='mx-auto'
                             src={props.iconClick ? menu : 'https://cdn-icons-png.flaticon.com/512/4647/4647563.png'}
                             alt='ttt' width={35} height={35}/>
                        <span className='header__link_title'>Корзина</span>
                    </div>
                </Link>
            </div>
            <Link to={props.onFavouritesPage ? '/' : '/favourites'} className='header__link' href='#'>
                <div className="my-2 inner_icons">
                    {props.onFavouritesPage ?
                        <img
                            src='https://cdn-icons-png.flaticon.com/512/553/553416.png' height={35}
                            width={35} alt='home'/> :
                        <img
                            src={favouriteAfter}
                            alt='user_icon' height={35} width={35}/>
                    }

                    <span className='header__link_title'>{props.onFavouritesPage ? 'Главная' : 'Закладки'}</span>
                </div>
            </Link>
            <Link className='header__link' to={props.onAuthPage ? '/' : '/auth'}>
                <div className="my-2 inner_icons">
                    {props.onAuthPage ?
                        <img
                            src='https://cdn-icons-png.flaticon.com/512/553/553416.png' height={35}
                            width={35} alt='home'/> :
                        <img
                            src='https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
                            alt='user_icon'
                            width={35} height={35}/>
                    }
                    <span
                        className='header__link_title font-weight-normal'>{props.onAuthPage ? "Главная" : 'Профиль'}</span>
                </div>
            </Link>
        </div>
    )
}

export default HeaderItems