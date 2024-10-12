import React from "react";
import "./Services.css";
import Container from "react-bootstrap/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Services = () => {
  return (
    <Container id="services">
      <div class="container py-4">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">My Services</h1>
            <p class="col-md-8 fs-4">
              Creation of visually appealing and responsive websites using HTML,
              CSS, and JavaScript to ensure optimal performance across devices
              (desktops, tablets, and smartphones).
            </p>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              {" "}
              <button class="btn btn-outline-dark" type="button">
                Connect With Me
              </button>
            </AnchorLink>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3">
              <h2>Responsive Design</h2>
              <p>
                Ensuring that websites adapt seamlessly to different screen
                sizes and resolutions, providing an optimal user experience
                regardless of device type.
              </p>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
              {" "}
              <button class="btn btn-outline-light" type="button">
                Connect With Me
              </button>
            </AnchorLink>

            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Performance Optimization</h2>
              <p>
                Improving website speed and responsiveness by optimizing images,
                reducing unnecessary code, and utilizing techniques like lazy
                loading or code minification.
              </p>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
              {" "}
              <button class="btn btn-outline-dark" type="button">
                Connect With Me
              </button>
            </AnchorLink>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
