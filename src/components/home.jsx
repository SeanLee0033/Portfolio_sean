import React from 'react';
import { Image } from 'react-bootstrap';
import { Button, Container } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import Profile from '../assets/img/home/profile1.png';

const Home = () => {
  return (
    <>
      <div id="home">
        <Container className="home__container">
          <Image src={Profile} className="home__avatar" />
          <h1 className="home__title">
            Welcome! <br /> I'm Sean Lee
          </h1>
          <div className="home__message">
            <Typewriter
              id="type"
              options={{
                strings: [
                  'A Software Developer, who likes to identify and solve problems',
                  'Solves problems to build effective and impactful software.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <Button className="home__contact" outline color="secondary">
            <a href="#contact">Contact Me</a>
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Home;
