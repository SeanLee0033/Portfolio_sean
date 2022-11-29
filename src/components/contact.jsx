import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const thisYear = () => new Date().getFullYear();

  return (
    <>
      <div id="contact" className="section">
        <h1 className="contact__title">Contact me</h1>
        <div className="contact__links">
          <a
            href="mailto:seanlee0033@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>

          <a
            href="https://github.com/SeanLee0033"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>

          <a
            href="https://www.linkedin.com/in/sean-lee-a96a0b251/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
        <p className="contact__rights">
          Copyright &copy; <span>{thisYear()}</span> Sean Portfolio
        </p>
      </div>
    </>
  );
};

export default Contact;
