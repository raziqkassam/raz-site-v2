import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/nobglogo.png';
import linkedin from '../assets/img/linkedin.png';
import { HashLink } from 'react-router-hash-link';
import '../App.css';


import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // close toggle menu
  }

  const scrollWithOffset = (el) => {
    const desktopYOffset = -100; // Adjust this value to match the height of your navbar on desktop
    const mobileYOffset = -230; // Adjust this value to match the height of your navbar on mobile
    
    const yOffset = window.innerWidth < 768 ? mobileYOffset : desktopYOffset; // Use mobile offset if screen width is less than 768px
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={expanded} >
        <Container>
          <Navbar.Brand href="/" className="logo">
            <img src={logo} alt="Logo" style={{ width: '90px', height: '85px', }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} smooth to="#home" style={{fontWeight:'bold'}} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('home')} scroll={el => scrollWithOffset(el)}>Home</Nav.Link>
              <Nav.Link as={HashLink} smooth to="#about" style={{fontWeight:'bold'}} className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('about')} scroll={el => scrollWithOffset(el)}>About</Nav.Link>
              <Nav.Link as={HashLink} smooth to="#projects" style={{fontWeight:'bold'}} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('projects')} scroll={el => scrollWithOffset(el)}>Experience</Nav.Link>
              {/* <Nav.Link as={HashLink} smooth to="#skills" style={{fontWeight:'bold'}} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('skills')} scroll={el => scrollWithOffset(el)}>Skills</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon" style={{ marginRight: '10px' }}>
              <a href="https://www.linkedin.com/in/raziqkassam/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              </div>              
              <a href="mailto:raziq.kassam@gmail.com?subject=Website%20Connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
