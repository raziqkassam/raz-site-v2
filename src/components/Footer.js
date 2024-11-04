import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import linkedin from "../assets/img/linkedin.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/raziqkassam/"><img src={linkedin} alt="Icon" /></a>
            </div>
            <p>Raziq Kassam, 2024</p>
            <p>RAZILIENCE</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
