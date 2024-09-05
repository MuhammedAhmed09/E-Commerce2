import React from 'react'
import { Carousel, Col, Row, Container } from 'react-bootstrap'
import { Link,  } from 'react-router-dom';


const Home = () => {
    
    return (
        <>
        <div className='slide'>

            <Carousel>
                <Carousel.Item>
                    <img src={require('./Images/pexels-jaganjijo-8373456.jpg')} className='w-100 image' alt="" />            <Carousel.Caption>
                    <p>your fav</p>
                    <p>collection</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./Images/pexels-photo-9307093.jpg')} className='w-100 image' alt="" />            <Carousel.Caption>
                    <p >your fav</p>
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
                            <img src={require('./Images/matte_black_d0b1e2f2-1591-4969-a021-5cb9c1ab12f0.jpg')} style={{height:"350px"}} alt=''/>
                        </Link>

                    </div>
                    <div className='cat-details'>
                        <h5>Helmets</h5>
                        <h6>5 items</h6>

                    </div>

                </Col>
                <Col lg={3} md={6} sm={12}>

                    <div className='cat-img'>

                        <Link>
                            <img src={require('./Images/unlined_cruiser_0000s_0002_Layer_71.jpg')} style={{height:"350px"}} alt=''/>
                        </Link>

                    </div>
                    <div className='cat-details'>
                        <h5>Gloves Brand</h5>
                        <h6>5 items</h6>

                    </div>

                </Col>
                <Col lg={3} md={6} sm={12}>

                    <div className='cat-img'>

                        <Link>
                            <img src={require('./Images/LEATHER_MOTO_JACKET_BLACK_FLAT.jpg')} style={{height:"350px"}} alt=''/>
                        </Link>

                    </div>
                    <div className='cat-details'>
                        <h5>Jacket</h5>
                        <h6>5 items</h6>

                    </div>

                </Col>
                <Col lg={3} md={6} sm={12}>

                    <div className='cat-img'>

                        <Link>
                            <img src={require('./Images/pexels-jose-martin-segura-benites-1422456152-27352801.jpg')} style={{height:"350px"}} alt=''/>
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
