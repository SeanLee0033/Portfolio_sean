import React from 'react';
import {
  Navigation,
  About,
  Skills,
  Work,
  Testimonials,
  Contact,
  Home,
} from './components';

const App = () => {
  return (
    <div style={{ background: '#181818' }}>
      <Navigation />
      <Home />
      <About />
      {/* <Skills /> */}
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;