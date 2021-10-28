import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

function NavbarTest() {
    return (
        <div>
           
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                <Navbar.Brand href="#"><img src="assets/logo2.png" alt="" /></Navbar.Brand>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default NavbarTest
