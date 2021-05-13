import React from "react";
// Custom CSS
import './css/styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Search 
          title="Search"
          id="Search"
          />
          <Results />
          <Footer />
    </div>
  );
}

export default App;
