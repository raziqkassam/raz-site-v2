import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import hb from '../assets/img/h2.jpg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner-screen" id="home">
      <Container className="banner">
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline"></span> */}
                <h1 >{`Raziq Kassam`} 
                    {/* <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span> */}
                </h1>
                  <p>
                  With experience across product design, software, and medical devices, I bring a unique ability to bridge the gap between <b>engineering and user-centered design.</b>
                  </p>
                  <p>
                  I am driven by a mission to <b>create impactful technologies</b> that improve lives, and I thrive in fast-paced and collaborative environments that push the boundaries of innovation.
                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <span className="banner-button">
                    <a href="mailto:raziq.kassam@gmail.com" style={{ textDecoration: 'none' }}>
                      <button className="vvd"><span>Let’s Connect</span></button>
                    </a>
                  </span>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
                {/* <div className={"animate__animated animate__zoomIn" }>
                  <img src={hb} alt="Hummingbird" className="banner-image" />
                </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
