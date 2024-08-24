import React from 'react'
import { Container, Col, Nav, Row } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='foot-up' >
        <Container className='footer'>
        <Row>
            <Col lg={2}>
            <h3>Company</h3>
            <h6>About Us</h6>
            <h6>Contact</h6>
            <h6>Store Locations</h6>
            <h6>Careers</h6>
            </Col>
            <Col lg={2}>
            <h3>Help</h3>
            <h6>Order Trecking</h6>
            <h6>FAQ's</h6>
            <h6>Privacy policy</h6>
            <h6>Terms & Conditions</h6>
            </Col>
            <Col lg={3}>
            <h3>Follow Us</h3>
            <h6>And get Free Shipping on all your orders!</h6>
            <Nav>
                <Nav.Link className='foot-icon' href='#facebook'><p><FaFacebookF /></p></Nav.Link>
                <Nav.Link className='foot-icon' href='#twitter'><p><FaXTwitter /></p></Nav.Link>
                <Nav.Link className='foot-icon' href='#pinterest'><p><FaPinterestP /></p></Nav.Link>
            </Nav>
            </Col>
            <Col lg={5}>
            <h3>Sign up now & get 10% off</h3>
            <h6>Be the first to know about our new arrivals and exclusive offers.</h6>
            <Nav className='inputs'>
            <input className='input-email' type="email" placeholder='Your email address' />
            <input className='input-submit' type="submit"/>
            </Nav>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Footer
