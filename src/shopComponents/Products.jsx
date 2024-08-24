import React from 'react';
import { FaBasketShopping } from "react-icons/fa6";


const Products = ({ product , onAddToCart }) => {
    return (
        <>

        <img className='shop-map-img' src={product.image.url} alt={product.title} />
        <div className='shop-detailsall'>

            <div className='shop-map-details'>
                <h6>{product.name}</h6>
                <p className='shop-price'>{product.price.formatted_with_symbol}</p>
            </div>
            <div>
                <button onClick={() => onAddToCart(product.id, 1)} className='shop-cart' ><FaBasketShopping /></button>
            </div>

        </div>

        </>
    )
}

export default Products
