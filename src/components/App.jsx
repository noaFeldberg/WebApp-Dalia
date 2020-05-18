import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
//import Slider from './Slider';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
              <NavBar />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/contact' component={Contact} />
              </Switch>
              <br/>
              <Footer />
            </div>
          </Router>
          
        );
    }
export default App;