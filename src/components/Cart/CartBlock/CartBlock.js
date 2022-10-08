import '../cart.css'
import CartItem from "./CartItem/CartItem";
import React from "react";
import shoppingCart from '../../../resources/img/shoppingСart.png'
import {Link, Route, Routes} from "react-router-dom";

const CartBlock = ({cartClick, removeCartItem, items = [], setResult}) => {
    const [allPrice, setAllPrice] = React.useState([])

    let prices = [];

    const getAllPrice = (result) => {
        setResult(result);
        setAllPrice(result);
    }

    return (
        <>
            {items.length ?
                <div id='overlay' className='overlay d-flex align-items-end w-100 flex-column'>
                    <div className="toHideCart" onClick={cartClick}></div>
                    <div id='cartBlock' className="cartBlock bg-light h-100 pb-5 flex-column">
                        <div className="mx-3 topBlock d-flex justify-content-between flex-wrap">
                            <h3 className="my-3">Корзина</h3>
                            <Link to='/' className='my-auto'>
                                <a href='#'>
                                    <img
                                        src={'https://cdn-icons-png.flaticon.com/512/2732/2732657.png'}
                                        width={25}
                                        height={25}
                                        alt=''/>
                                </a>
                            </Link>

                        </div>
                        <div className="allCarts">
                            {items.map((obj) => (
                                <CartItem prices={prices} getAllPrice={getAllPrice}
                                          id={obj.id}
                                          removeCartItem={removeCartItem}
                                          title={obj.title} price={obj.price}
                                          imageUrl={obj.imageUrl}
                                />
                            ))}
                        </div>
                        <div className="bottomBlock w-25">
                            <div className="mx-3">
                                <div className="d-flex justify-content-between">
                                    <div className="text-muted">Итого:</div>
                                    <b>{allPrice ? allPrice : 0} руб</b>
                                </div>
                                <div className="allPrice d-flex justify-content-between">
                                    <div className="text-muted">Налог 5%</div>
                                    <b>{Math.round(allPrice / 100 * 5)} руб</b>
                                </div>
                                <div className="pay">
                                    <a className='btn btn-success w-100 mt-3'>Оплатить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className='overlay position-fixed d-flex align-items-end w-100 flex-column'>
                    <div className="toHideCart" onClick={cartClick}></div>
                    <div className="cartBlock bg-light h-100 pb-5 flex-column">
                        <div className="mx-3 h-100 topBlock d-flex justify-content-between flex-wrap">
                            <h3 className="my-3">Корзина</h3>
                            <Link to='/' className='my-4'>
                                <a>
                                    <img
                                        src={'https://cdn-icons-png.flaticon.com/512/2732/2732657.png'}
                                        width={25}
                                        height={25}
                                        alt=''/>
                                </a>
                            </Link>
                            <div className='w-100 container text-center'>
                                <img src={shoppingCart} alt='' width={60} height={60} className='mb-3 noProductsImage'/>
                                <h3 className='my-auto'>Корзина пустая</h3>
                                <div className='text-black-50 my-2 font-weight-normal'>Для того, чтобы в корзине
                                    появились
                                    товары, необходимо их добавить
                                </div>
                                <Link to='/'>
                                    <button className='btn btn-success w-100 mt-3'>
                                        Вернуться назад
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default CartBlock
