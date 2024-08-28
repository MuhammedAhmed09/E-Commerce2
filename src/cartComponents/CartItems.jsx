import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CartItems = ({ item, onUpdateToCart, onRemoveFromCart }) => {
    const handleUpdateToCart = (lineItemId, quantity) => onUpdateToCart(lineItemId, quantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <table className="cart-item">
            <div>
            <Row className='text-head-items' key={item.id}>
            <Col  lg={4}>
                <div className='img-name'>
                    {item.image && <img className='image-item' src={item.image.url} alt={item.name} />}
                    <p>{item.name}</p>
                </div>
            </Col>
            <Col lg={3}>
                <p>{item.line_total && item.line_total.formatted_with_symbol}</p>
            </Col>
            <Col lg={2}>
                {item.quantity}
            </Col>
            <Col lg={3}>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                <p>
                <button onClick={() => handleUpdateToCart(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => handleUpdateToCart(item.id, item.quantity + 1)}>+</button>
                </p>
            </Col>
            </Row>
            </div>
        </table>
    );
};

export default CartItems;