import React from 'react';
import man from '../assets/img/testimonials/man.png';
import woman from '../assets/img/testimonials/teacherW.png';

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="section">
        <div className="section__container">
          <h1>Testimonials</h1>
          <h3>See what they say about me</h3>
          <div className="testimonials">
            <div className="testimonial">
              <img src={woman} alt="People" className="testimonial__avatar" />
              <div className="testimonial__speech-bubble">
                <p>
                  “Description”
                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/">
                    Woman
                  </a>{' '}
                  / Fullstack Developer
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__speech-bubble">
                <p>
                  “Description”
                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/">
                    Man
                  </a>{' '}
                  / Senior Software Developer
                </p>
              </div>
              <img src={man} alt="People" className="testimonial__avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
