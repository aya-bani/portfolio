import React from 'react';
import Navbar from './components/Navbar'; 
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import AssociativeExperience from './components/AssociativeExperience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <WorkExperience/>
      <AssociativeExperience/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
