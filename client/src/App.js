import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Coding from "./pages/Coding";
import Navbar from "./components/Navbar";
import Design from "./pages/Design";
import Jumbotron from "./components/Jumbotron";
import "./App.css"

// import logo from './logo.svg';

// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/coding" component={Coding} />
        <Route exact path="/design" component={Design} />
      </div>
    </Router>
  );
}

export default App;
