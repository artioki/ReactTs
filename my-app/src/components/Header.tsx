import React, { FC } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header:FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={NavLink} to="/newest/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/newest/">Newest</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
    </header>
  );
};

export default Header;
