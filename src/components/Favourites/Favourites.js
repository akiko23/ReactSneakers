import './favourite.css'
import React from "react";
import {Link} from "react-router-dom";

const Favourites = ({removeFavouriteItem, closeFavourites,  items = []}) => {
    const handleRemoveFromFavouritesClick = (id) => {
        removeFavouriteItem(id);
    }
    return (
        <div className="overlay pb-5">
            <main className='p-3 settingsBlock col-sm-8'>
                <div className="text-center mb-4">
                    <a href="#" className="" onClick={closeFavourites}>
                        <img
                            src={'https://cdn-icons-png.flaticon.com/512/2732/2732657.png'}
                            width={40}
                            height={40}
                            alt=''/>
                    </a>
                    <h3 className='mt-2' style={{color: '#eee'}}>Here you can see your favourites &#128149;</h3>
                </div>
                <div className="col-sm-10 mx-auto d-flex justify-content-center my-auto h-50">
                    <div className="favouriteCarts pr-2">
                        {items.map((item) => (
                                <div className='mx-auto favouriteBlock shadow my-4 cu-p'>
                                    <Link to={`/${item.id}`}>
                                        <img className='w-100 boot_image' src={item.imageUrl}
                                             alt='prImg'/>
                                    </Link>
                                    <div className="borderBLock w-100 p-2 d-flex justify-content-between my-auto flex-wrap">
                                        <div className="textBlock h-100 w-75">
                                            <p className="title">{item.title}</p>
                                            <div className="price"><b>ЦЕНА: </b>{item.price}</div>
                                        </div>
                                        <a onClick={() => handleRemoveFromFavouritesClick(item.id)} href='#'
                                           className='productDeleteLink my-auto p-2'>
                                            <img src='https://cdn-icons-png.flaticon.com/512/2732/2732657.png' width={20}
                                                 height={20} alt=''/>
                                        </a>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </main>
        </div>
    )

}

export default Favourites