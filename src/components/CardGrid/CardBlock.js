import CardModel from "./card/CardModel";
import React from "react";
import logo from '../img/logo.svg'
import axios from "axios";
import './CardBlock.css'
import {Route, Routes} from "react-router-dom";
import CardInfo from "../CardInfo/CardInfo";

const CardBlock = ({
                       onAddToCart,
                       removeCartItem,
                       itemsInCart,
                       favouriteItems,
                       onAddToFavourites,
                       onDeleteFromFavourites
                   }) => {
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    const handleClearSearchClick = () => {
        setSearchValue('')
    }

    React.useEffect(() => {
        axios.get('https://6305daeadde73c0f844cf627.mockapi.io/items/items').then((res) => {
            setItems(res.data)
        })
    }, [])

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value.toString())
    }

    const setFoundedStatus = (searchValue) => {
        let items2 = items.filter(item => item.title.toString().toLowerCase().includes(searchValue.toString().toLowerCase()));
        if (items2.length >= 1) {
            return searchValue ? `Результаты по запросу "${searchValue}"` : 'Все кроссовки';
        } else {
            return 'Нет результатов'
        }
    }

    const isInCart = (id) => {
        let boolRes = false;
        itemsInCart.map(
            (item) => {
                if (item.id === id) {
                    boolRes = true;
                }
            })
        return boolRes;
    }


    const itemInFavourites = (id) => {
        let res = false;
        favouriteItems.map(
            (item) => {
                if (item.id === id) {
                    res = true;
                }
            }
        )
        return res;
    }

    return (
        <>
            <Routes>
                {items.map((item) => (
                        <Route path={`/${item.id}`} element={
                                <CardInfo
                                    inCart={isInCart}
                                    onPlus={onAddToCart}
                                    fullPrice={item.fullPrice}
                                    addToFavourites={onAddToFavourites}
                                    itemInFavourites={itemInFavourites}
                                    deleteFromFavourites={onDeleteFromFavourites}
                                    removeCartItem={removeCartItem}
                                    id={item.id}
                                    title={item.title}
                                    imageUrl={item.imageUrl}
                                    price={item.price}
                                />
                            }>

                        </Route>
                    )
                )}
            </Routes>

            <div className='col-sm-11 mx-auto mt-4'>
                <div className='advert_image w-100'></div>
            </div>
            <div className="mx-auto col-sm-11 d-flex mt-5 mb-3 justify-content-between">
                <h3 className='mr-3'>{setFoundedStatus(searchValue.trim())}</h3>
                <form
                    className="form-inline my-auto position-relative align-content-center search_form form-control justify-content-between">
                    <input value={searchValue} onChange={onChangeSearch} className="w-75 searchInput mr-sm-2"
                           type="text"
                           placeholder="Поиск..."
                           aria-label="Search"/>
                    {searchValue ?
                        <a onClick={handleClearSearchClick} style={{cursor: "pointer"}}
                           className='disableSearchBlock position-relative'>
                            <img src='https://cdn-icons-png.flaticon.com/512/2723/2723639.png' width={20} height={20}
                                 alt="closeSearch"/>
                        </a> : undefined}
                </form>
            </div>
            <div className='mt-5 d-flex mx-3 flex-wrap'>
                {items.filter(item => item.title.toString().toLowerCase().trim().includes(searchValue.toString().toLowerCase().trim())).map((item) =>
                    (
                        <CardModel
                            key={item.title}
                            inCart={isInCart}
                            onPlus={onAddToCart}
                            fullPrice={item.fullPrice}
                            addToFavourites={onAddToFavourites}
                            itemInFavourites={itemInFavourites}
                            deleteFromFavourites={onDeleteFromFavourites}
                            removeCartItem={removeCartItem}
                            id={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                        />
                    )
                )}
            </div>
        </>
    )
}


export default CardBlock