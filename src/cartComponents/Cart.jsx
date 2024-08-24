import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';
import './Cart.css'

const Cart = ({ cart, onUpdateToCart, onRemoveFromCart, onEmptyCart }) => {
    const handleEmptyCart = () => onEmptyCart();

    const EmptyCart = () => (
        <div>
            <p>Your cart is currently empty.</p>
            <Link to="/Shop">
                <button>Back to Shop</button>
            </Link>
        </div>
    );

    const FilledCart = () => (
        <tbody>
            {cart.line_items.map((lineItem) => (
                <tr key={lineItem.id}>
                    <CartItems
                        item={lineItem}
                        onUpdateToCart={onUpdateToCart}
                        onRemoveFromCart={onRemoveFromCart}
                    />
                </tr>
            ))}
        </tbody>
    );


    return (
        <div className='box-cart'>
            <h3>Shopping Cart</h3>
            { typeof cart.line_items !== 'undefined' && cart.line_items.length ?
            (
            <div>
                <table>
                <thead>
                    <tr>
                    <th><p>PRODUCT DETAILS</p></th>
                    <th><p>UNIT PRICE</p></th>
                    <th><p>QUANTITY</p></th>
                    <th><p>AMOUNT</p></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <FilledCart />
                </tbody>
                </table>

                <button onClick={handleEmptyCart} className="mt-5">Empty Cart</button>
                </div>
                )
                :
                (
                <EmptyCart />
                )
                }
            </div>
    );
};

export default Cart;
