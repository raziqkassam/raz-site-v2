import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ExperienceCard";
import { projectData, workData, thirdData } from '../data/experienceData'; // Import the project data

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const sortedWorkData = workData.sort((a, b) => b.id - a.id);
  const sortedProjectData = projectData.sort((a, b) => b.id - a.id);
  const sortedThirdData = thirdData.sort((a, b) => b.id - a.id);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility >
              {/* {({ isVisible }) => */}
              <div >
                <h2 >Experience</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">{isMobile ? "Work" : "Work Experience"}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{isMobile ? "Projects" : "Personal Projects"}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{isMobile ? "Leadership" : "Leadership"}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          sortedWorkData.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          sortedProjectData.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          sortedThirdData.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              {/* } */}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp}></img> */}
      {/* <img className="skill-background-image"></img> Add this line */}
    </section>
  )
}
