import React from 'react';
import Jay from '../assets/img/testimonials/Jay.jpeg';
import Jiasheng from '../assets/img/testimonials/Jiasheng.jpeg';
import Hojune from '../assets/img/testimonials/Hojune.png';

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="section">
        <div className="section__container">
          <h1>Testimonials</h1>
          <div className="testimonials">
            {/* <div className="testimonial">
              <img src={Hojune} alt="People" className="testimonial__avatar" />
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
            </div> */}

            <div className="testimonial">
              <div className="testimonial__speech-bubble">
                <p>
                  "Sean worked as a website developer intern at JSolution for 3 months. His work is always finished on time, and he always goes the extra mile to ensure the client requirements are met. He is a highly-skilled, willing to learn new things, and helpful team member with a positive attitude. Working with Sean has been a great experience for everyone at our company due to his team work."
                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/in/jiashenglujob/">
                    Jae Chung
                  </a>
                  / Founder @ JSolution
                </p>
              </div>
              <img src={Jay} alt="People" className="testimonial__avatar" />
            </div>

            <div className="testimonial">
              <img src={Jiasheng} alt="People" className="testimonial__avatar" />
              <div className="testimonial__speech-bubble">
                <p>
                  “It was a great pleasure to share many classes and worked on several projects with Sean at school. He was always accommodating, kind, and motivated. We worked on many projects and assignment together, and he is very patient and responsible. He is creative, smart, and is willing to help when you need it. Sean is the kind of person who does anything for the group’s benefit.”

                </p>
                <p className="name">
                  <a href="https://www.linkedin.com/in/jae-chung-56026384/">
                    Jiasheng Lu
                  </a>
                  / Frontend Developer @ Motiv
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
