import React from 'react';
import {
  Navigation,
  About,
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
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;