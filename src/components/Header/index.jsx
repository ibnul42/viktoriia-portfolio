import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <h3
            className="ml12"
            style={{
              fontWeight: 400,
              fonstSize: "1.2em",
              letterSpacing: "0.1em",
            }}
          >
            Viktoriia Honcharova
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Link to='/' className="link_style" > Home </Link>
            <Link to='/about' className="link_style" > About me </Link>

          </Nav>
          {/* <Nav xs={12} className="d-flex flex-row " >
            <Nav.Link href="#" >
              <i >
                <AiFillGithub size="30px" />
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i>
                <AiFillTwitterCircle size="30px" />
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i>
                <BsFacebook size="30px" />
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i>
                <AiFillInstagram size="30px" />
              </i>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
