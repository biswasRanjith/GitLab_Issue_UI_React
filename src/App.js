import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import  Navbar from "./components/navbar.component";
import home from "./components/home.component"
import project from "./components/project.component"


function App() {
  return (
    <Router>
      <div className="container">
  <Navbar />
  <br />
   
  <Route path = "/" component={home} />
  <Route path = "/project" component={project } />
      </div>
    </Router>

   
  );
}

export default App;