import './favourite.css'
import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

const Favourites = ({removeFavouriteItem, items = []}) => {
    const handleRemoveFromFavouritesClick = (id) => {
        removeFavouriteItem(id);
    }
    return (
        <>
            <div className="text-center overlay-white">
                <Header/>
                <div className="favouriteItems px-5 mt-5">
                    {items.map((item) => (
                            <div className='favourite_item shadow'>
                                <Link to={`/${item.id}`}><img className='w-100 boot_image' height={156} src={item.imageUrl} alt=""/></Link>
                                <div className="favourite_item_info pl-2 pb-2">
                                    <p className='pt-1 px-1 flex-wrap card_title'>
                                        {item.title.toUpperCase()}
                                    </p>
                                    <div className="d-flex justify-content-between ml-1">
                                        <div className="mb-1 prices">
                                            <div className="text-muted">ЦЕНА:</div>
                                            <section className='price_with_discount d-flex justify-content-between'>
                                                <div className='text-danger font-weight-bold'>{item.price} ₽</div>
                                                <strike className="fullPrice font-weight-light">{item.fullPrice} ₽</strike>
                                            </section>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )

}

export default Favourites