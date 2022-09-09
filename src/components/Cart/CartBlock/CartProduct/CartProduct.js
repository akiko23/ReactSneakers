import '../../cart.css'
import crossSign from '../../../img/trash.png'
import React from "react";
import {Link} from "react-router-dom";


const CartProduct = ({price, title, prices, imageUrl, removeCartItem, getAllPrice, id}) => {
    let [count, setCount] = React.useState(1);

    const plus = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    React.useEffect(() => {
        let result = 0
        prices.push(parseInt(price) * count)

        if (prices.length > 0) {
            prices.map((price) => {
                result += price;
            })
            getAllPrice(result)
        }
    })

    const minus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='cartProductBlock mx-auto shadow d-flex flex-wrap justify-content-between my-4 col-10'>
            <Link to={`/${id}`}>
                <img className='py-2 boot_image' style={{borderRadius: 10}} src={imageUrl} width={120} height={128}
                     alt='prImg'/>
            </Link>
            <div className='text-center d-flex my-auto'>
                <button className='btn btn-success' onClick={plus}>+</button>
                <h6 className='ml-2 my-auto'>{count}</h6>
                <button className='btn btn-success ml-2' onClick={minus}>-</button>
            </div>
            <div className="borderBLock w-100 d-flex justify-content-between my-auto flex-wrap">
                <div className="textBlock h-100 w-50">
                    <p className="title mb-0">{title}</p>
                    <div className='mt-2'><b>ЦЕНА: </b>{parseInt(price) * count} ₽</div>
                </div>
                <a onClick={() => removeCartItem(id)} className='productDeleteLink cu-p my-auto ml-0'>
                    <img src='https://cdn-icons-png.flaticon.com/512/2732/2732657.png' width={20} height={20} alt=''/>
                </a>
            </div>
        </div>
    )
}

export default CartProduct
