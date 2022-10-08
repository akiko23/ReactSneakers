import './App.css';
import React from "react";
import CartBlock from "./components/Cart/CartBlock/CartBlock";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Favourites from "./components/Favourites/Favourites";
import Authorisation from "./components/User/Authorisation/Authorisation";
import HomePage from "./components/HomePage/HomePage";


const App = () => {
    const [cartItems, setCartItems] = React.useState([]);
    const [favouriteItems, setFavouriteItems] = React.useState([]);

    const [allPrice, setAllPrice] = React.useState(0);

    const addToCart = (obj) => {
        try{
            axios.post('https://6305daeadde73c0f844cf627.mockapi.io/items/cart', obj).then(() => {
                setCartItems((prev) => [...prev, obj])
            })
        }catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        try{
            axios.get('https://6305daeadde73c0f844cf627.mockapi.io/items/cart').then((r) => {
                setCartItems(r.data);
            })
        }catch (e) {
            console.log(e)
        }
    }, [])

    const removeCartItem = (id) => {
        try{
            axios.delete(`https://6305daeadde73c0f844cf627.mockapi.io/items/cart/${id}`).then(
                () => setCartItems((prev) => prev.filter((item) => item.id !== id))
            )

        }catch (e) {
            console.log(e)
        }
    }

    const setResult = (res) => {
        setAllPrice(res)
    }

    const trackScrollState = () => {
        let currentHref = window.location.href;

        const allowedPages = ['http://localhost:3000/', 'http://localhost:3000/cart']
        let onAllowedPage = (currentHref === allowedPages[0]) || (currentHref === allowedPages[1]);

        document.body.style.overflowY = onAllowedPage ? 'scroll' : 'clip';
    }

    document.body.addEventListener('click', () => {
        trackScrollState();
    })


    React.useEffect(() => {
        try{
            axios.get('https://6305daeadde73c0f844cf627.mockapi.io/items/favourites').then((r) => {
                setFavouriteItems(r.data);
            })
        }catch (e) {
            console.log(e)
        }
    }, [])

    const removeFavouriteItem = (id) => {
        try{
            axios.delete(`https://6305daeadde73c0f844cf627.mockapi.io/items/favourites/${id}`).then(() => {
                setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
            })
        }catch (e) {
            console.log(e)
        }
    }

    const addToFavourites = (obj={}) => {
        try{
            axios.post('https://6305daeadde73c0f844cf627.mockapi.io/items/favourites', obj).then(() => {
                    setFavouriteItems((prev) => [...prev, obj])
                }
            )
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Routes>
                <Route
                    path='/cart'
                    element={<CartBlock setResult={setResult} removeCartItem={removeCartItem} items={cartItems}/>}>
                </Route>
                <Route path='/auth' element={<Authorisation />}></Route>
                <Route path='/favourites' element={<Favourites removeFavouriteItem={removeFavouriteItem} items={favouriteItems} />}></Route>
            </Routes>
            <HomePage cartItems={cartItems} addToCart={addToCart} removeCartItem={removeCartItem} removeFavouriteItem={removeFavouriteItem} addToFavourites={addToFavourites} favouriteItems={favouriteItems} />
        </>

    );
}

export default App;
