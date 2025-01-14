import { Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root'); // This is important for accessibility


export const ProjectCard = ({ title, company, imgUrl, details, id}) => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // const project = projects2.find(p => p.id === projectId);
  // console.log(project.id);

  const galleryRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return; // Add null check

    const handleMouseMove = (e) => {
      
      const { left, right } = gallery.getBoundingClientRect();
      const mouseX = e.clientX;

      if (mouseX > right - 200) {
        setScrollDirection('right');
      } else if (mouseX < left + 200) {
        setScrollDirection('left');
      } else {
        setScrollDirection(null);
      }
    };

    const handleMouseEnter = () => {
      window.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      setScrollDirection(null);
    };

    gallery.addEventListener('mouseenter', handleMouseEnter);
    gallery.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gallery.removeEventListener('mouseenter', handleMouseEnter);
      gallery.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const scrollInterval = setInterval(() => {
      if (scrollDirection === 'right') {
        gallery.scrollLeft += 25;
      } else if (scrollDirection === 'left') {
        gallery.scrollLeft -= 25;
      }
    }, 100); // Adjust the interval as needed

    return () => clearInterval(scrollInterval);
  }, [scrollDirection]);
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="helo" />
        <div className="proj-txtx"  >
          <h3 style={{ fontSize: '30px', marginBottom: '10px', 
                  fontWeight: '900' }} >{title}</h3>
          <h5>{company}</h5>
          <div className="proj-imgbx-linkbx"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="proj-imgbx-link"  onClick={openModal} style={{
                backgroundColor: 'var(--white)', color: 'var(--blue)', fontWeight:"550", fontSize:'12', cursor: 'pointer', 
                borderRadius: "12px", padding: "5px 15px", textDecoration: "none", width: '50%'
              }} >Learn More</div>
          </div>
          
        </div>
      </div>

      <Modal className='modal-main-content' isOpen={modalIsOpen} onRequestClose={closeModal} style={{
          content: {
            top: '50%', left: '50%', right: 'auto', bottom: 'auto',
            marginRight: '-50%', transform: 'translate(-50%, -50%)',
            width: '80%', maxHeight: '80%', overflow: 'auto', borderRadius: '30px', border: 'none',
            padding: '60px 100px', backgroundColor: 'var(--ice)',
          }
        }}>
        {/* <div style={{ display: 'flex', overflowX: 'scroll', marginTop: '-10px' }}>
          {details.images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} style={{ width: '300px', marginRight: '10px', borderRadius: '20px' }} />
          ))}
        </div> */}

        <div className="image-gallery" ref={galleryRef}>
          {details.images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>

        <h2 style={{ fontSize: '40px', margin: '20px 0 20px 0', color: 'var(--blue)',
                  fontWeight: '900', zIndex:'1000' }}>{title}</h2>
        <h3 style={{ fontSize: '20px', margin: '-50px 0 30px 0', color:'var(--wolf)', fontWeight: 'bold', 
          textTransform: 'uppercase', textAlign: 'right', zIndex:'1000' }}
          >{details.subtitle}</h3>
        <ul>
          {details.bulletPoints.map((point, index) => (
            <li key={index} style={{ fontSize: '18px', lineHeight:'1.3', marginBottom: '12px', color:'var(--brown)' }}>{point}</li>
          ))}
        </ul>
        <div>
          {details.buttons.map((button, index) => (
            <a className='external-links' key={index} href={button.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block', margin: '30px 0 10px 10px', color: 'var(--blue)', padding: '10px 20px', 
                border: '2px solid var(--blue)', borderRadius: '25px', textDecoration: 'none', backgroundColor: 'var(--white)',
              }}>{button.label}</a>
          ))}
        </div>
        
        <button onClick={closeModal} style={{
            position: 'absolute',  top: '20px',  right: '20px', 
            backgroundColor: 'var(--white)', color: 'var(--blue)', fontWeight:"550", fontSize:'12',
            borderRadius: "15px", padding: "8px 16px", textDecoration: "none", border: '2px solid var(--blue)',
            cursor: 'pointer', width: '150px'
          }}>Close</button>
      </Modal>

    </Col>
  )
}
