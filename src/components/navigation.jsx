import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Container,
  Form,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo1 from '../assets/img/logo1.gif';
import logo2 from '../assets/img/logo2.gif';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= document.documentElement.clientHeight * 0.3) {
      setScrollNav(true);
    } else if (window.innerWidth > 450) {
      setScrollNav(false);
    }
  };

  const handleToggle = () => {
    if (window.innerWidth < 1000) {
      setIsOpen(!isOpen);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setScrollNav(true);
    }
    window.addEventListener('scroll', changeNav);
  }, [isOpen]);

  return (
    <>
      {scrollNav ? (
        <Navbar
          id="nav"
          dark
          expand="lg"
          className="sticky-top"
          style={{ backgroundColor: 'black' }}
        >
          <Container>
            <NavbarBrand href="#home">
              <img
                className="logo"
                src={logo1}
                alt="logo"
                style={{ width: '65px', height: '35px', marginBottom: '0px' }}
              />

            </NavbarBrand>
            <NavbarToggler onClick={handleToggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav
                className="d-flex"
                navbar
                style={{ fontWeight: 'bold' }}
                onClick={handleToggle}
              >
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#home" className="text-decoration-none">
                      <div id="nav__item">Home</div>
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#about" className="text-decoration-none">
                      Skills
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#work" className="text-decoration-none">
                      Projects
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink
                      href="#testimonials"
                      className="text-decoration-none"
                    >
                      Testimonials
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#contact" className="text-decoration-none">
                      Contact
                    </NavLink>
                  </Form>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          id="nav"
          dark
          expand="lg"
          className="sticky-top"
          style={{ backgroundColor: 'transparent' }}
        >
          <Container>
            <NavbarBrand href="#home">
              <img
                className="logo"
                src={logo2}
                alt="logo"
                style={{ width: '65px', height: '34px', marginBottom: '0px' }}
              />
            </NavbarBrand>
            <NavbarToggler onClick={handleToggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav
                className="d-flex"
                navbar
                style={{ fontWeight: 'bold' }}
                onClick={handleToggle}
              >
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#home" className="text-decoration-none">
                      <div id="nav__item">Home</div>
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#about" className="text-decoration-none">
                      Skills
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#work" className="text-decoration-none">
                      Projects
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink
                      href="#testimonials"
                      className="text-decoration-none"
                    >
                      Testimonials
                    </NavLink>
                  </Form>
                </NavItem>
                <NavItem>
                  <Form className="col p-1">
                    <NavLink href="#contact" className="text-decoration-none">
                      Contact
                    </NavLink>
                  </Form>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      )
      }
    </>
  );
};

export default Navigation;
