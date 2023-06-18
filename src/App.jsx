import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import React from 'react';
const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 green-gradient'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-60'>
        <Navbar />
        <Hero />
      </div>
      <div className='relative z-0'>
        <About />
        <Experience />
        <Tech />
      
        <Works />
      
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    
    </BrowserRouter>    
  )
}

export default App
