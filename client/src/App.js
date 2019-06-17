import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Coding from "./pages/Coding";
import Navbar from "./components/Navbar";
import Design from "./pages/Design";
import Graphics from "./pages/Graphics";
import UI from "./pages/UI";
import Comics from './pages/Comics';
import Presentations from "./pages/Presentations";
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
        <Route exact path="/graphics" component={Graphics} />
        <Route exact path="/presentations" component={Presentations} />
        <Route exact path="/ui" component={UI}></Route>
        <Route exact path="/comics" component={Comics} />
      </div>
    </Router>
  );
}

export default App;
