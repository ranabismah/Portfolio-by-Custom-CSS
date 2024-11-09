
// src/app/page.tsx


import Hero from './components/Hero'; // Import Hero component
import About from './components/About'; // Import About component


import Contact from './components/Contact';

const HomePage = () => {
  return (
    <div>
     
      <Hero />    {/* Render the Hero section */}
      <About />   {/* Render the About section */}
      <Contact/>
     
    </div>
  );
};

export default HomePage;
