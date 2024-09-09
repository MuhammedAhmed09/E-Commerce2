import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';
import './Cart.css'
import { Container, Row } from 'react-bootstrap';

const Cart = ({ cart, onUpdateToCart, onRemoveFromCart, onEmptyCart }) => {
    const handleEmptyCart = () => onEmptyCart();

    const EmptyCart = () => (
        <div className='empty'>
            <p>Your cart is currently empty.</p>
            <Link to="/Shop">
                <button className='btn-back'>Back to Shop</button>
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

    const cartAll = () => {
        if (cart.line_items && cart.line_items.length > 0) {
            return (
                <div className='cart--empty'>
                    <Row>
                        <FilledCart />
                    </Row>
                    <button onClick={handleEmptyCart} className="btn-empty">Empty Cart</button>
                </div>
            )
        } else if(cart.line_items && cart.line_items.length === 0){
            return <EmptyCart />
        } else {
            return <div className='loader'></div>
        }
    }

    
    return (
        <Container className='box-cart'>
            <p className='parghraph-head'>Shopping Cart</p>
            <div className="container">
                {cartAll()}
            </div>
        </Container>
    );
};

export default Cart;