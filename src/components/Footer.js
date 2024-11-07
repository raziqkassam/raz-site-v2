import { Container, Row, Col } from "react-bootstrap";

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
            <p>Developed by: Raziq Kassam, 2024</p>
            <p><b>RAZILIENCE</b></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
