import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';
import './Cart.css'
import { Col, Row } from 'react-bootstrap';

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
                    <Row className='text-head-cart'>
                        <Col lg={4} className='img-name'>
                            <p>PRODUCT</p>
                            <p>DETAILS</p>
                        </Col>
                        <Col lg={3}><p>UNIT PRICE</p></Col>
                        <Col lg={2}><p>QUANTITY</p></Col>
                        <Col lg={3}><p>AMOUNT</p></Col>
                    </Row>
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
