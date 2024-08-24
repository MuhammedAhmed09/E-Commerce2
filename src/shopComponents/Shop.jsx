import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Products from './Products'


const Shop = ( { products, onAddToCart } ) => {
    
    return (
        <div className='shop'>

        <div className='shop-center'>
            <div className='shop-in'>
            <p>Shop</p>
            <a href='/'>Home </a>
            <span className='span'> / Shop</span>
        </div>

        </div>

        <Container className='shop-map'>

            <Row>
            { products.map((product) => (
                    <Col md={3} sm={12} key={product.id}>
                    <Products product={product} onAddToCart={onAddToCart}/>
                    </Col>
                ))}
            </Row>

        </Container>

        </div>
    )
}

export default Shop
