import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Header.css'; // Assuming you create a custom CSS file for additional styles

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href="/" className="font-weight-bold">HotelFinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-4">
                        <Nav.Link href="/cart" className="text-white">Cart</Nav.Link>
                        <Nav.Link href="/profile" className="text-white">Profile</Nav.Link>
                    </Nav>
                    <Form inline className="d-flex w-50">
                        <FormControl type="text" placeholder="Search hotels" className="mr-sm-2 w-75" />
                        <Button variant="outline-success" className="w-25">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
