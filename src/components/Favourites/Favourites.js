import './favourite.css'
import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import {FavouriteItem} from "./FavouriteItem/FavouriteItem";

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
                            <FavouriteItem item={item} />
                        )
                    )}
                </div>
            </div>
        </>
    )

}

export default Favourites