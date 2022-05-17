import React, { FC } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header:FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/newest/">Newest</Nav.Link>
        <Nav.Link as={NavLink} to="/post/">map</Nav.Link>
        <Nav.Link as={NavLink} to="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
    </header>
  );
};

export default Header;
