import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaBasketShopping } from "react-icons/fa6";



const NavBar = ({totalItems}) => {
    
    
    return (
        
        <Navbar expand="lg" className='navbar-bg'>
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                <Nav.Link href="/"><h5>Home</h5></Nav.Link>
                <Nav.Link href="/Shop"><h5>Shop</h5></Nav.Link>

                </Nav>
                <Nav className='nav-logo'>

                    <img src={require('../Images/logo-1_8505ef07-bee3-4d82-aaf7-dc2fdb2b7793.png')} alt="" />

                </Nav>
                <Nav className="ms-auto">
                    
                    <Nav.Link className='cart-icon' href="/Cart">
                    <FaBasketShopping />
                    {totalItems}
                    </Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default NavBar
