import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Staff_leave_management_system"
              description="So, basically, this project contains three main modules i.e.- Staff, Hod, and registrar/admin. If any staff members need the leave, then they have to ask for the leave and their leave is accepted by Hod first and then by registrar , If Hod or registrar anyone of them cancels the leave then leave gets rejected. The same is for Hod also, if they want the leave then they have to ask permission from the registrar only.
We have also added various functionality like there were different types of leave and a limited number of leaves to be granted per month, also if there is medical leave then they have to submit the medical proof for that."
              ghLink="https://github.com/vrshah03/staff_leave_management"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Test Case Generation Using CEGs"
              description="This project focuses on automating the creation of Cause-Effect Graphs from Software Requirements Specification (SRS) documents. By extracting relevant information from SRS files, the system translates the requirements into visual cause-effect representations, which aids in better comprehension, analysis, and validation of system requirements."
              ghLink="https://github.com/vrshah03/MMP-2023"
                         
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
