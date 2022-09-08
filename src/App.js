import './App.css';
import React from "react";
import CardBlock from "./shop_components/CardGrid/CardBlock";
import Header from "./shop_components/header/header";
import CartBlock from "./shop_components/Cart/CartBlock/CartBlock";
import axios from "axios";
import {Route, Routes, Link} from "react-router-dom";
import Favourites from "./shop_components/Settings/Favourites";


const App = () => {
    const [cartClick, setCartOpened] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([]);

    const [showFavourites, setShowFavourites] = React.useState(false);
    const [favouriteItems, setFavouriteItems] = React.useState([]);

    const [allPrice, setAllPrice] = React.useState(0);

    const handleCartClick = () => {
        setCartOpened(true);
    }

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
            axios.delete(`https://6305daeadde73c0f844cf627.mockapi.io/items/cart/${id}`)
            setCartItems((prev) => prev.filter((item) => item.id !== id))
        }catch (e) {
            console.log(e)
        }

        //cartItems.splice(cartItems.indexOf(obj), 1);
    }

    const openFavouritesClick = () => {
        setShowFavourites(!showFavourites);
    }

    React.useEffect(() => {
        try{
            axios.get('https://6305daeadde73c0f844cf627.mockapi.io/items/favourites').then((r) => {
                setFavouriteItems(r.data);
            })
        }catch (e) {
            console.log(e)
        }
    }, [])

    const setResult = (result) => {
        setAllPrice(result);
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

    const deleteFromFavourites = (id) => {
        try{
            axios.delete(`https://6305daeadde73c0f844cf627.mockapi.io/items/favourites/${id}`).then(() => {
                setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
            })
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='content_block'>
            <Routes>
                <Route
                    path='/cart'
                    element={<CartBlock setResult={setResult} removeCartItem={removeCartItem} items={cartItems} passedClick={() => {
                                setCartOpened(true)
                            }} />}>
                </Route>
            </Routes>
            {showFavourites ? <Favourites showFavourites={showFavourites} removeFavouriteItem={deleteFromFavourites} items={favouriteItems} closeFavourites={() => {setShowFavourites(!showFavourites)}} /> : null}
            <div className='main_block p-0 mx-auto col-sm-11 bg-light'>
                <Header allPrice={allPrice ? allPrice : 0} openFavouritesClick={openFavouritesClick} iconClick={cartClick} openCartClick={handleCartClick} />
                <CardBlock itemsInCart={cartItems} onAddToCart={addToCart}
                           removeCartItem={removeCartItem}
                           onAddToFavourites={addToFavourites}
                           onDeleteFromFavourites={deleteFromFavourites}
                           favouriteItems={favouriteItems}
                />
            </div>
        </div>

    );
}

export default App;
