import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css"
import Navbar from "react-bootstrap/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll"


export const Navigationbar = () => {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary jutify-content-around mx-4">
      <Container fluid >
      <Navbar.Brand id="home" className="mx-4">AbhinavRana</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll " className="mx-4">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <AnchorLink className="anchor-link"  href="#home"><Nav.Link href="#action1" >Home</Nav.Link></AnchorLink>
            <AnchorLink className="anchor-link" offset={50} href="#about"><Nav.Link href="#action2">About Me</Nav.Link></AnchorLink>
            <AnchorLink className="anchor-link" offset={50} href="#services"><Nav.Link href="#action2">Services</Nav.Link></AnchorLink>
            <AnchorLink className="anchor-link" offset={50} href="#contact"><Nav.Link href="#action2">Contact</Nav.Link></AnchorLink>
          </Nav>
          <AnchorLink className="anchor-link" offset={50} href="#contact"><Button variant="dark">Connect With Me</Button></AnchorLink>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
