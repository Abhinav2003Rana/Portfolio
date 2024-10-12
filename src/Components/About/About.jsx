import React from "react";
import "./About.css";
import abhinav from "../../Assets/abhinav2.JPG";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";



export const About = () => {
  return (
    <Container id="about" fluid>
      <div className="abt">
        <h2>About Me</h2>
        <div className="about">
          <img src={abhinav} class="img-fluid" alt="" />

          {/* <img src={abhinav} alt="" /> */}
          <div className="rightabout">
            <p>
              A hardworking and diligent BTech student (EEE). I have always been
              fascinated by technical developments and have looked for
              opportunities to enhance my knowledge and gain experience about
              the same. I intend to look forward for opportunities that provide
              me such knowledge. I am consistently working on enhancing my
              technical and soft skills to stay relevant in the industry.
            </p>
            <a href="https://www.linkedin.com/in/abhinav-rana-087282256/">
              Linkdin
            </a>
            <a href="https://github.com/Abhinav2003Rana">Github</a>

            <p>HTML, CSS</p>
            <ProgressBar striped variant="dark" now={80} />
            <p>Javascript, React Js</p>
            <ProgressBar striped variant="dark" now={65} />
            <p> Python</p>
            <ProgressBar striped variant="dark" now={65} />
            <p>SQl</p>
            <ProgressBar striped variant="dark" now={75} />
          </div>
        </div>
      </div>
    </Container>
  );
};
