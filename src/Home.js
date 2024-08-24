import React from 'react'
import { Carousel, Col, Row, Container } from 'react-bootstrap'
import { Link,  } from 'react-router-dom';


const Home = () => {
    
    return (
        <>
        <div className='slide'>

            <Carousel>
                <Carousel.Item>
                    <img src={require('./Images/Home-default-1510-3.png')} className='w-100 image' alt="" />            <Carousel.Caption>
                    <p>the white</p>
                    <p>collection</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./Images/Home-default-1510-4.png')} className='w-100 image' alt="" />            <Carousel.Caption>
                    <p >the black</p>
                    <p>collection</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        <Container className='category'>
            <h2>Categories</h2>
            <Row>
                <Col lg={3} md={6} sm={12} >

                    <div className='cat-img'>

                        <Link>
                            <img src={require('./Images/cate-df-1_360x.jpg')} alt=''/>
                        </Link>

                    </div>
                    <div className='cat-details'>
                        <h5>Accessories</h5>
                        <h6>5 items</h6>

                    </div>

                </Col>
                <Col lg={3} md={6} sm={12}>

                    <div className='cat-img'>

                        <Link>
                            <img src={require('./Images/cate-df-2_360x.jpg')} alt=''/>
                        </Link>

                    </div>
                    <div className='cat-details'>
                        <h5>Bag Brand</h5>
                        <h6>5 items</h6>

                    </div>

                </Col>
                <Col lg={3} md={6} sm={12}>

                    <div className='cat-img'>

                        <Link>
                            <img src={require('./Images/cate-df-3_360x.jpg')} alt=''/>
                        </Link>

                    </div>
                    <div className='cat-details'>
                        <h5>Clothing</h5>
                        <h6>5 items</h6>

                    </div>

                </Col>
                <Col lg={3} md={6} sm={12}>

                    <div className='cat-img'>

                        <Link>
                            <img src={require('./Images/cate-df-4_360x.jpg')} alt=''/>
                        </Link>

                    </div>
                    <div className='cat-details'>

                        <h5>Shoes</h5>
                        <h6>5 items</h6>

                    </div>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home
