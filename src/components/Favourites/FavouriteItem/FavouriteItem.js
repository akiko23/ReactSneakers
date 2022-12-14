import {Link} from "react-router-dom";
import React from "react";

export const FavouriteItem = ({item}) => {
    return (
        <div className='favourite_item shadow'>
            <Link to={`/${item.id}`}><img className='w-100 boot_image' height={156} src={item.imageUrl} alt=""/></Link>
            <div className="favourite_item_info pl-2 pb-2">
                <p className='pt-1 px-1 flex-wrap card_title'>
                    {item.title.toUpperCase()}
                </p>
                <div className="d-flex justify-content-between ml-1">
                    <div className="mb-1 prices">
                        <div className="text-muted">ЦЕНА:</div>
                        <section className='price_with_discount d-flex'>
                            <div className='text-danger font-weight-bold'>{item.price}₽</div>
                            <strike className="fullPrice ml-2">{item.fullPrice}₽</strike>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}