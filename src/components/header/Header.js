import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

import React from 'react'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash} /> Movie Review Service
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/watchList" className="nav-link">Watch List</NavLink>
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header