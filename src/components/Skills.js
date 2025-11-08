import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

import webdev from '../assets/img/skills/webdev.svg'; // Adjust the import based on your file structure
import data from '../assets/img/skills/data.svg'; // Adjust the import based on your file structure
import graphic from '../assets/img/skills/graphic.svg'; // Adjust the import based on your file structure
import research from '../assets/img/skills/research.svg'; // Adjust the import based on your file structure
import software from '../assets/img/skills/software.svg'; // Adjust the import based on your file structure
import cad from '../assets/img/skills/cad.svg'; // Adjust the import based on your file structure
import pm from '../assets/img/skills/pm.svg'; // Adjust the import based on your file structure

const SkillImage = styled.img`
  width: 60px;
  height: 60px;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const Skills = () => {
  return (
    <div className="skill col-12">
      <div className="skill-bx wow zoomIn">
        <h2>Skills</h2>
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p> */}
        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
          <div className="item">
            <SkillImage src={software} alt="Web Development" />
            <h5>Software Development</h5>
          </div>
          <div className="item">
            <SkillImage src={pm} alt="Project Management" />
            <h5>Project Management</h5>
          </div>
          <div className="item">
            <SkillImage src={webdev} alt="Web Development" />
            <h5>Web Development</h5>
          </div>
          <div className="item">
            <SkillImage src={cad} alt="Logo Design" />
            <h5>CAD Design</h5>
          </div>
          <div className="item">
            <SkillImage src={research} alt="User Research" />
            <h5>User Research</h5>
          </div>
          <div className="item">
            <SkillImage src={data} alt="Data Analytics" />
            <h5>Data Analytics</h5>
          </div>
          <div className="item">
            <SkillImage src={graphic} alt="Graphic Design" />
            <h5>Graphic Design</h5>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;