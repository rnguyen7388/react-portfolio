import React from 'react';
import Nav from "./components/Nav";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Nav/>
      <Route exact path="/react-portfolio/" component={About}/>
      <Route exact path="/react-portfolio/portfolio" component={Portfolio}/>
      <Route exact path="/react-portfolio/contact" component={Contact}/>
    </Router>
  );
}

export default App;