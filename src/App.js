import React from 'react';
import './app.css';
import Header from './components/Header';
import Games from './components/Games';
import Blog from './components/Blog';
import Technologies from './components/Technologies';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <Header />
      <AboutUs/>
      <Technologies/>
      <Games/>
      <Blog/>
      <Contact />     
      <Footer/>
    </>
  );
}

export default App;
