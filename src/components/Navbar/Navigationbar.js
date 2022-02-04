import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Navigationbar(){
    return( 
        <Navbar bg="transparent" expand="lg">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar">
                    <ul className="nav-links">
                        <Link to="/" className="home">
                            <li>Home</li>
                        </Link>
                        <Link to="/about" className="about">
                            <li>About</li>
                        </Link>
                        <Link to="/contact" className="contact">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

// function Navbar() {
//     return (
//         <Nav className="me-auto">
//                         <Nav.Link href="#home" className="home">
//                             Home
//                         </Nav.Link>
//                         <Nav.Link href="#about" className="about">
//                             About
//                         </Nav.Link>
//                         <Nav.Link href="#contact" className="contact">
//                             Contact
//                         </Nav.Link>
//                 </Nav>
// );
// }

export default Navigationbar;
