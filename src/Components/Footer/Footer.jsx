import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export const Footer = () => {
  return (
    <Container>
      <div className="foot">
        <div className="left-foot">
          <h3>AbhinavRana</h3>
          <p>I'm a frontend developer from Delhi India</p>
        </div>
        <Form className="right-foot">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control className="inp" type="email" placeholder="email" />
          </Form.Group>
          <button type="button" class="btn kk btn-dark">Subscribe</button>
        </Form>
      </div>
      <hr />
      <p className='para'>Copyright @2024 - All Right Reserved.</p>
    </Container>
  );
};
