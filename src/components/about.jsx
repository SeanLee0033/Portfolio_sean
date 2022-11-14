import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faLaptopCode,
  faMobile,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import SaitLogo from '../assets/img/educations/saitLogo.png';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <>
      <div id="about" className="section section__container">
        <h1>Skills</h1>
        <div className="about__me">
          <p>
            My greatest skill I believe is the ability to quickly learn new skills,
            <br />
            accurately identify and solve problems.
          </p>
        </div>

        <div className="about__majors">
          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faReact} />
              </div>
            </div>
            <div className="major__title">Front-end</div>
            <div className="major__description">
              React, TypeScript, SASS, Bootstrap
              <br />
              HTML, CSS, JavaScript, Jquery
              <br />
              Post CSS, Tailwind CSS
            </div>
          </div>

          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
            </div>
            <div className="major__title">Back-end</div>
            <div className="major__description">
              Java, Node.js, Express.js
              <br />
              Apollo GraphQL
            </div>
          </div>

          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faDatabase} />
              </div>
            </div>
            <div className="major__title">
              Database,
              <br />
              hosting platform
            </div>
            <div className="major__description">
              Oracle SQL, MySQL, MongoDB
              <br />
              Github Pages, AWS
            </div>
          </div>

          <div className="major">
            <div className="major__icon">
              <div>
                <FontAwesomeIcon icon={faServer} />
              </div>
            </div>
            <div className="major__title">
              Test,
              <br />
              Project Management
            </div>
            <div className="major__description">
              Jest, Cypress
              <br />
              Git, Jira
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
