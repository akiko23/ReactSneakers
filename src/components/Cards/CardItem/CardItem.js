import '../cards.css'
import React from "react";
import favouriteBefore from '../../../resources/img/favourite-before.png';
import favouriteAfter from '../../../resources/img/favorite-after.png';
import {Link} from "react-router-dom";

const CardItem = ({title, imageUrl, price, onPlus, fullPrice, removeCartItem, itemInFavourites, id, inCart, deleteFromFavourites, addToFavourites}) => {
    const handleCartClick = () => {
        if (inCart(id)) {
            removeCartItem(id);
        }
        else{
            onPlus({title, imageUrl, price, id});
        }
    }

    const handleFavouritesClick = () => {
        if (itemInFavourites(id)) {
            deleteFromFavourites(id);
        }
        else {
            addToFavourites({id, imageUrl, title, price});
        }
    }

    return (
            <div id={id} className='mb-5 boot shadow d-inline-block position-relative h-100'>
                <div className="d-flex ad justify-content-between overflow-auto">
                    <div className="product_image_block">
                        <Link to={`${id}`}>
                            <a href="#" className="productImageHref">
                                <img className='boot_image' src={imageUrl} alt='ss' width={204} height={160}/>
                            </a>
                        </Link>
                    </div>
                    <div className="circle py-2" onClick={handleFavouritesClick}>
                        <img width={30} height={31} src={itemInFavourites(id) ? favouriteAfter : 'https://cdn-icons-png.flaticon.com/512/7607/7607010.png'} alt='' />
                    </div>
                </div>
                <p className='pt-1 px-1 flex-wrap card_title'>
                    {title.toUpperCase()}
                </p>
                <div className="d-flex justify-content-between ml-1">
                    <div className="mb-1 prices">
                        <div className="text-muted">ЦЕНА:</div>
                        <section className='price_with_discount d-flex justify-content-between'>
                            <div className='text-danger font-weight-bold'>{price} ₽</div>
                            <strike className="fullPrice font-weight-light">{fullPrice} ₽</strike>
                        </section>
                    </div>
                    <button
                        className={inCart(id) ? 'btn btn-success my-auto mr-1' : 'btn btn-secondary my-auto mr-1'}
                        onClick={handleCartClick}
                    >
                        {inCart(id) ? '✓' : '+'}
                    </button>
                </div>
            </div>

    )
}

export default CardItem