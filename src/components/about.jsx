import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faMobile,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import SaitLogo from '../assets/img/educations/saitLogo.png';

const About = () => {
  return (
    <>
      <div id="about" className="section section__container">
        <h1>About me</h1>
        <div className="about__me">
          <p>
            Hello World
          </p>
        </div>

        <div className="about__majors">
          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
            </div>
            <div className="major__title">Front-end</div>
            <div className="major__description">
              HTML, CSS, JavaScript, SASS, Bootstrap, TypeScript
              <br />
              JSP, JSTL, React, Web APIs
            </div>
          </div>

          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faMobile} />
              </div>
            </div>
            <div className="major__title">Mobile</div>
            <div className="major__description">React Native</div>
          </div>

          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faServer} />
              </div>
            </div>
            <div className="major__title">Back-end</div>
            <div className="major__description">
              Java, JPA, NodeJS, Mongoose,
              <br />
              Sequelize, Rest APIs, GraphQL
            </div>
          </div>
        </div>

        <div className="about__jobs">
          <div className="job">
            <Image
              src={SaitLogo}
              alt="Sait"
              className="job__logo"
              id="job__logo"
            />
            <div className="job__description">
              <p className="job__name">
                <b>Southern Alberta Institute of Technology</b> <br /> Software
                Development
              </p>
              <p className="job__period">May 2020 - December 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
