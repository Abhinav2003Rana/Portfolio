import React from "react";
import "./Hero.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import abhinav from "../../Assets/abhinav2.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";



export const Hero = () => {
  return (
    <Container id="hero" fluid>
      <div className="container-fluid hero-cont">

        <img src={abhinav} alt="" className="img-fluid" />
        <h1>
          <span>I'm Abhinav Rana,</span> frontend developer based in India.
        </h1>
        <p>I am a frontend developer from Delhi , India</p>
        <div className="cont-btn">
        <AnchorLink className="anchor-link" offset={50} href="#contact"><Button variant="dark">Connect With Me</Button></AnchorLink>
          <Button variant="outline-dark">My Resume</Button>
        </div>
      </div>
    </Container>
  );
};
