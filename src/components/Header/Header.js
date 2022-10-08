import logo from '../../resources/img/logo.svg'
import React from "react";
import menu from '../../resources/img/menu.png'

import {Link} from "react-router-dom";
import './header.css'
import HeaderItems from "./HeaderItems/HeaderItems";


const HeaderBlock = (props) => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [currentLocation, setCurrentLocation] = React.useState(window.location.href);

    const [hiddenMenuStatus, setHiddenMenuStatus] = React.useState(false);

    // const getObjects = () => {
    //     axios.get('https://6305daeadde73c0f844cf627.mockapi.io/items/items').then((items) => {
    //         items.data.map((item) => {
    //             console.log(item.id)
    //         })
    //     });
    // }

    const onPage = (pageName) => {
        return (currentLocation === `http://localhost:3000/${pageName}`);
    }


    const handleMenuIconClick = () => {
        setHiddenMenuStatus(!hiddenMenuStatus);
    }

    setInterval(() => {
        setWindowWidth(window.innerWidth);
        setCurrentLocation(window.location.href)
    }, 500)

    const widthSmall = () => {
        return (windowWidth <= 1000)
    };

    return (
        widthSmall() ?
            <header onClick={props.handleScrollClick} style={onPage('auth') ? {borderRadius: 0, color: 'white'} : {
                borderRadius: '20px 20px 0 0',
                color: 'white'
            }} className={hiddenMenuStatus ? 'hiddenMenuBlock bg-dark mx-0 mb-2' : ' bg-dark mx-0'}>
                <div className='d-flex flex-wrap bg-dark p-4 justify-content-between align-items-center my-0'>
                    <Link to='/'>
                        <div style={{textDecoration: 'none', color: 'white'}}
                             className='mx-0 mt-4 dec-none d-flex flex-wrap align-items-center my-auto'>
                            <img src={logo} alt='logo' width={50} height={40} className='mr-0'></img>
                            <ul className='list-unstyled my-0 ml-2'>
                                <li>
                                    <span className='mb-0 font-weight-bold fs-30'>React Sneakers</span>
                                </li>
                                <li>
                                <span

                                    className='mt-0'
                                >
                                    Магазин лучших кроссовок
                                </span>
                                </li>
                            </ul>
                        </div>
                    </Link>
                    <div className="text-center cu-p">
                        <img className={hiddenMenuStatus ? 'showMenuImg' : "mt-4"} onClick={handleMenuIconClick} src={menu} alt='menu' width={25} height={25}/>
                        {hiddenMenuStatus ? <HeaderItems props={props} onFavouritesPage={onPage('favourites')} onAuthPage={onPage('auth')} /> : <HeaderItems props={props} onFavouritesPage={onPage('favourites')} onAuthPage={onPage('auth')} displayNone={'header__grid-off'} />}
                    </div>
                </div>
            </header>
            :
            <header style={{borderRadius: 0, color: 'white'}} className='bg-dark mx-0'>
                <div className='d-flex flex-wrap p-4 justify-content-between align-items-center my-0'>
                    <Link to='/'>
                        <div style={{textDecoration: 'none', color: 'white'}}
                             className='mx-0 mt-4 dec-none d-flex flex-wrap align-items-center my-auto'>
                            <img src={logo} alt='logo' width={50} height={40} className='mr-0'></img>
                            <ul className='list-unstyled my-0 ml-2'>
                                <li>
                                    <span className='mb-0 font-weight-bold fs-30'>React Sneakers</span>
                                </li>
                                <li>
                                <span

                                    className='mt-0'
                                >
                                    Магазин лучших кроссовок
                                </span>
                                </li>
                            </ul>
                        </div>
                    </Link>
                    <HeaderItems widthSmall={widthSmall} props={props} onFavouritesPage={onPage('favourites')} onAuthPage={onPage('auth')}/>
                </div>
            </header>
    )
}
export default HeaderBlock

/*    <div className="mx-auto col-sm-8 d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark shadow-sm">
    <img src={logo} height="40"  width="40" alt="ss" className="my-0 d-inline-block align-top"></img>
    <div className="header_title my-0 mr-md-auto d-inline-block align-top text-light brand_name">ReactApp</div>
    <nav className="nav my-2 my-md-0 mr-4">
      <a className="nav__link p-2 text-light" href="my_app/src/components/Header/Header#">Home</a>
      <a className="nav__link p-2 text-light" href="my_app/src/components/Header/Header#">
              <img className="settings_logo" src={settings_logo} alt="ss" width="30" height="30" title="settings icons"></img>
              <div className="d-inline ml-1">Favourites</div>
      </a>
      <a className="nav__link p-2 text-light" href="my_app/src/components/Header/Header#">Enterprise</a>
      <a className="support nav__link p-2 text-light" href="my_app/src/components/Header/Header#">Support</a>
    </nav>
    <a className="btn btn-primary" href="my_app/src/components/Header/Header#">Sign up</a>
  </div>*/