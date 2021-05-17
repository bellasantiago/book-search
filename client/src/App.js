import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Custom CSS
import './css/styles.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Saved from './pages/Saved'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Saved" component={Saved} />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
