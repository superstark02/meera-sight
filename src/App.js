import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './Components/appBar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Overview from './Pages/About/Overview';
import Vision from './Pages/About/Vision';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Router>
        <Switch>
          <Route exact path="/about-us" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/about-us/overview" component={Overview} />
          <Route exact path="/about-us/vision" component={Vision} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
