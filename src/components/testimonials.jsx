import React from 'react';
import Jay from '../assets/img/testimonials/Jay.jpeg';

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="section">
        <div className="section__container">
          <h1>Testimonials</h1>
          <div className="testimonials">
            <div className="testimonial">
              <img src={Jay} alt="People" className="testimonial__avatar" />
              <div className="testimonial__speech-bubble">
                <p>
                  "Sean worked as a website developer intern at JSolution for 3 months. His work is always finished on time, and he always goes the extra mile to ensure the client requirements are met. He is a highly-skilled, willing to learn new things, and helpful team member with a positive attitude. Working with Sean has been a great experience for everyone at our company due to his team work."
                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/in/jae-chung-56026384/">
                    Jae Chung
                  </a>
                  / Founder @ JSolution
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__speech-bubble">
                <p>
                  "Sean worked as a website developer intern at JSolution for 3 months. His work is always finished on time, and he always goes the extra mile to ensure the client requirements are met. He is a highly-skilled, willing to learn new things, and helpful team member with a positive attitude. Working with Sean has been a great experience for everyone at our company due to his team work."
                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/in/jae-chung-56026384/">
                    Jae Chung
                  </a>
                  / Founder @ JSolution
                </p>
              </div>
              <img src={Jay} alt="People" className="testimonial__avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
