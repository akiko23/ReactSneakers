import CardItem from "./CardItem/CardItem";
import React from "react";
import axios from "axios";
import './cards.css'
import {Route, Routes} from "react-router-dom";
import CardInfo from "./CardItem/CardItemInfo/CardInfo";

const Cards = ({
                   onAddToCart,
                   removeCartItem,
                   cartItems,
                   favouriteItems,
                   onAddToFavourites,
                   removeFavouriteItem
               }) => {
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    const [currentImg, setCurrentImg] = React.useState(1)

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
        cartItems.map(
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

    const plusSlides = (val) => {
        if (currentImg <= 3) {
            setCurrentImg(currentImg + val);
        }
        if (currentImg <= 0) {
            setCurrentImg(3);
        }
        if (currentImg > 3) {
            setCurrentImg(1);
        }
    }

    const currentSlide = (val) => {
        const dots = document.getElementsByClassName('dot')

        if (0 < currentImg <= 3) {
            for (let dot of dots) {
                if (parseInt(dot.getAttribute("data-n")) === currentImg) {
                    dot.classList.add('activeSlide')
                } else {
                    dot.classList.remove('activeSlide')
                }
            }
            return (val === currentImg)
        }
    }

    return (
        <>
            <Routes>
                <Route path={`:id`} element={
                    items.map((item) => (
                        <CardInfo
                            key={item.id}
                            inCart={isInCart}
                            onPlus={onAddToCart}
                            fullPrice={item.fullPrice}
                            addToFavourites={onAddToFavourites}
                            itemInFavourites={itemInFavourites}
                            deleteFromFavourites={removeFavouriteItem}
                            removeCartItem={removeCartItem}
                            id={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                        />
                    ))
                }>

                </Route>

                )
                )}
            </Routes>
            <div className='mt-4 col-sm-12'>
                <div className="slideshow-container">
                    {currentSlide(1) ? <div data-n={3} className="mySlides text-center fade">
                        <div className="numberText">3/3</div>
                        <div className="text">text</div>
                    </div> : undefined}
                </div>
                <br/>
                <div style={{textAlign: "center"}}>
                <span data-n={1} className="dot" onClick={() => {
                    setCurrentImg(1)
                }}></span>
                    <span data-n={2} className="dot" onClick={() => {
                        setCurrentImg(2)
                    }}></span>
                    <span data-n={3} className="dot" onClick={() => {
                        setCurrentImg(3)
                    }}></span>
                </div>
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
                            <img src='https://cdn-icons-png.flaticon.com/512/2723/2723639.png' width={20}
                                 height={20}
                                 alt="closeSearch"/>
                        </a> : undefined}
                </form>
            </div>
            <div className='mt-5 d-flex mx-3 flex-wrap'>
                {items.filter(item => item.title.toString().toLowerCase().trim().includes(searchValue.toString().toLowerCase().trim())).map((item) =>
                    (
                        <CardItem
                            key={item.id}
                            inCart={isInCart}
                            onPlus={onAddToCart}
                            fullPrice={item.fullPrice}
                            addToFavourites={onAddToFavourites}
                            itemInFavourites={itemInFavourites}
                            deleteFromFavourites={removeFavouriteItem}
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


export default Cards