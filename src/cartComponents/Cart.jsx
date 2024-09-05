import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';
import './Cart.css'
import { Row } from 'react-bootstrap';

const Cart = ({ cart, onUpdateToCart, onRemoveFromCart, onEmptyCart }) => {
    const handleEmptyCart = () => onEmptyCart();

    const EmptyCart = () => (
        <div className='empty'>
            <p>Your cart is currently empty.</p>
            <Link to="/Shop">
                <button className='btn-empty'>Back to Shop</button>
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
            <p className='parghraph-head'>Shopping Cart</p>
            { typeof cart.line_items !== 'undefined' && cart.line_items.length ?
            (
            <div>
                <div>
                    <Row>
                        <FilledCart />
                    </Row>
                </div>

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
