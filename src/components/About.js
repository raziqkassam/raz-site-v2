import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Ensure this line is present to import the CSS file
import cow from '../assets/img/test.jpg';
import skydive from '../assets/img/skydive.jpg';


const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const personalImages = [
    cow,
    skydive,
    // Add more images as needed
  ];

  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="order-md-1 order-2">
            <div className="about-personal-content">
            <div className="personal">
                <h2>About Me</h2>
                <p>I thrive at the <b>intersection of technology and human-centered design</b>, bridging diverse fields to create solutions that are both functional and transformative.</p>
                <p>I am chasing my dream to improve lives, whether through advancing medical technologies or designing experiences that spark communities.</p>
                <p>I am fueled by my curiosity, and constant desire to achieve greatness.</p>
                <p>I also love music, watching movies, taking pictures, and traveling the world!</p>
                {/* Add more personal interests as needed */}
              </div>
            </div>
            <div className="about-education-content">
              <div className="education">
                <h2>University of Waterloo</h2>
                <p>I graduated with a BASc in Honours <b>Biomedical Engineering</b>, with Distinction.</p>
                <p>I competed on the Men's Varsity Squash Team, and got involved as a Co-captain, Team Leader, and Athletics Mentor.</p>
                <p>I spent one semester abroad at Tampere University in Finland, focused on Medicine and Health Technology systems.</p>
                {/* Add more education details as needed */}
              </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="order-md-0 order-1">
            {/* left third section */}
          </Col>
          <Col xs={12} md={3} className="order-md-2 order-3">
            <Carousel className='slideshow'>
              {personalImages.map((src, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={src}
                    alt={`Personal ${index + 1}`}
                    onClick={() => handleShow(index)}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg" centered className="custom-modal">
        <Modal.Header closeButton className="custom-modal-header">
          {/* <Modal.Title>Image Gallery</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
            {/* {[...educationImages, ...personalImages].map((src, index) => ( */}
            {[...personalImages].map((src, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={src} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
            <button onClick={handleClose} style={{
            backgroundColor: 'var(--white)', color: 'var(--blue)', fontWeight:"550", fontSize:'12',
            borderRadius: "12px", padding: "8px 16px", textDecoration: "none",
            cursor: 'pointer', width: '150px', zIndex: '1000'
          }}>Close</button>
        </Modal.Footer>
      </Modal>

    </section>
  );
};

export default About;