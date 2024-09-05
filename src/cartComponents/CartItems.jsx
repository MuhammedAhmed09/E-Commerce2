import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CartItems = ({ item, onUpdateToCart, onRemoveFromCart }) => {
    const handleUpdateToCart = (lineItemId, quantity) => onUpdateToCart(lineItemId, quantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <Container>
            <table >
            <Row className='text-head-items' key={item.id}>
                <Col md={6} sm={4}>
                    {item.image && <img className='image-item' src={item.image.url} alt={item.name} style={{width:"100%"}} />}
                </Col>
                <Col md={6} sm={8}>
                    <h4>Tittle: {item.name}</h4>
                    <h3>Price: {item.line_total && item.line_total.formatted_with_symbol}</h3>
                    <h3>Quantity: {item.quantity}</h3>
                    <h3>
                    <button onClick={() => handleUpdateToCart(item.id, item.quantity - 1)}>-</button>
                    <button onClick={() => handleUpdateToCart(item.id, item.quantity + 1)}>+</button>
                    </h3>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </Col>
            </Row>
            </table>    
        </Container>
    );
};

export default CartItems;