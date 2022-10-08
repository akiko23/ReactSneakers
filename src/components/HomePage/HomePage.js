import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import React from "react";
// import {useDispatch, useSelector} from "react-redux";

const HomePage = ({favouriteItems, addToFavourites, cartItems, removeCartItem, addToCart, removeFavouriteItem}) => {
    // const dispatch = useDispatch();
    // let cash = useSelector((state) => state.cash)
    //
    // const addCash = (payload) => {
    //     dispatch({type: 'ADD_CASH', payload: payload})
    // }
    //
    // const remCash = (payload) => {
    //     dispatch({type: 'REM_CASH', payload: payload})
    // }

    return (
        <div className='main_block p-0 mx-auto bg-light'>
            {/*<button onClick={() => addCash(2)}>+</button>*/}
            {/*<button onClick={() => remCash(4)}>-</button>*/}
            {/*<h1>{cash}</h1>*/}
            <Header />
            <Cards cartItems={cartItems}
                   onAddToCart={addToCart}
                   removeCartItem={removeCartItem}
                   onAddToFavourites={addToFavourites}
                   removeFavouriteItem={removeFavouriteItem}
                   favouriteItems={favouriteItems}
            />
        </div>
    )
}

export default HomePage