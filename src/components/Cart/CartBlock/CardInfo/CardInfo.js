import React from "react";
import {Link} from "react-router-dom";
import fv from '../../../resources/img/favorite-after.png'

const CardInfo = ({title, imageUrl, price, onPlus, fullPrice, removeCartItem, itemInFavourites, id, inCart, deleteFromFavourites, addToFavourites}) => {
    const [itemInCart, setItemInCart] = React.useState(false);
    const [inFavourites, setInFavourites] = React.useState(false);

    React.useEffect(() => {
        setItemInCart(inCart(id))
        setInFavourites(itemInFavourites(id))
    })
    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    // const onClose = () => {
    //     let cardInfo = document.querySelector('.cardInfoBlock')
    //
    //     try {
    //         cardInfo.classList.contains('cardInfoBlock') ? cardInfo.classList.replace('cardInfoBlock',  'closedCardInfo') : cardInfo.classList.replace('closedCardInfo',  'cardInfoBlock')
    //     }catch (e) {
    //         console.log(cardInfo.classList)
    //     }
    //
    //
    //     sleep(600)
    // }

    const handleAddToCartClick = () => {
        inCart(id);
        onPlus({title, imageUrl, price, id});
    }

    const handleRemoveFromCartClick = () => {
        removeCartItem(id);
    }

    const handleAddToFavouritesClick = () => {
        addToFavourites({id, imageUrl, title, price});
    }

    const handleRemoveFromFavouritesClick = () => {
        deleteFromFavourites(id);
    }

    const handleVisualClickOnClose = () => {
        let cardInfoBlock = document.querySelector('.mainSelection').firstChild;
        cardInfoBlock.classList.replace('cardInfoBlock', 'closedCardInfoBlock')
    }


    return (
        <div className="overlay">
            <div className='mainSelection text-dark w-100 justify-content-center'>
                <main className='p-5 cardInfoBlock bg-light hidden w-50 mx-auto d-flex justify-content-between'>
                    <div className='d-flex justify-content-center h-100 w-100'>
                        <div className="boot_image  h-100 mr-5 d-flex">
                            <img className="my-auto" src={imageUrl} width={250} height={220} alt=''/>
                            <img onClick={inFavourites ? handleRemoveFromFavouritesClick : handleAddToFavouritesClick} className= "my-auto cardInfoFavourite"
                                 src={inFavourites ? fv : 'https://cdn-icons-png.flaticon.com/512/7607/7607010.png'} alt="user_icon"
                                 height="28" width="28"/>
                        </div>
                        <section>
                            <div className="br-and-title">
                                <h4 style={{fontWeight: 600}}>{title}</h4>
                            </div>
                            <div className="line"></div>
                            <div className="pt-4">
                                <h5>Финальная цена</h5>
                                <div className="d-flex">
                                    <h4 style={{color: 'red'}}>{price}₽</h4>
                                    <strike style={{fontWeight: 400, fontSize: 16}}
                                            className='ml-2'>{fullPrice}₽</strike>
                                </div>
                                <div className="mt-4">
                                    {itemInCart ? <button onClick={handleRemoveFromCartClick} className='btn btn-secondary p-2 my-auto'>Убрать из корзины</button> : <button onClick={handleAddToCartClick} className='btn btn-success p-2 my-auto'>Добавить в корзину</button>}
                                </div>
                            </div>
                        </section>
                    </div>
                        <Link to='/' className='linkToMainPageFromCardInfo' onClick={handleVisualClickOnClose}>
                            <a className='backToHomePage'>
                                <img src="https://cdn-icons-png.flaticon.com/512/2732/2732657.png" width="25" height="25"
                                     alt=""/>
                            </a>
                        </Link>
                </main>
            </div>

        </div>
    )
}

export default CardInfo
