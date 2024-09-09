import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CartItems = ({ item, onUpdateToCart, onRemoveFromCart }) => {
    const handleUpdateToCart = (lineItemId, quantity) => onUpdateToCart(lineItemId, quantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <Container>
            <Row className='text-head-items' key={item.id}>
                <Col md={6} sm={4}>
                    {item.image && <img className='image-item' src={item.image.url} alt={item.name} />}
                </Col>
                <Col md={6} sm={8} className='cart-details'>
                    <h4><span>Tittle:</span> {item.name}</h4>
                    <h4><span>Price:</span> {item.line_total && item.line_total.formatted_with_symbol}</h4>
                    <h4><span>Quantity:</span> {item.quantity}</h4>
                    <div className='quantity'>
                    <button onClick={() => handleUpdateToCart(item.id, item.quantity - 1)}><b>-</b></button>
                    <button onClick={() => handleUpdateToCart(item.id, item.quantity + 1)}><span>+</span></button>
                    </div>
                    <button className='btn-remove' onClick={() => handleRemoveFromCart(item.id)}><b>Remove</b></button>
                </Col>
            </Row> 
        </Container>
    );
};

export default CartItems;