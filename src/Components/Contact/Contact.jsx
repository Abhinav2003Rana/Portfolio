import React from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import email from "../../Assets/email.png";
import phone from "../../Assets/phone.png";
import location from "../../Assets/location.png";

export const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d7486804-13b3-4d9d-ba19-4547637c766a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };




  return (
    <Container id="contact">
      <div className="contact">
        <h2>Get in touch</h2>
        <div className="contact-cnt">
          <div className="left-c">
            <h3>Let's Talk</h3>
            <p>
              I'm currently available to take on new projects, so feel free to
              send me message about anything that you want me to work on. You
              can contact ant time.
            </p>
            <div className="icons">
              <img src={email} alt="" />
              <p>2003ranaabhinav@gmail.com</p>
            </div>
            <div className="icons">
              <img src={phone} alt="" />
              <p>+91 9289609276</p>
            </div>
            <div className="icons">
              <img src={location} alt="" />
              <p>Delhi, India</p>
            </div>
          </div>
          <div className="right-c">
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="gg">Your Name</Form.Label>
                <Form.Control placeholder="name" />
                <Form.Label className="gg">Email address</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="gg">Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="dark" className="gh" type="submit">
                Submit Now
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};
