import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './Components/appBar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Doctor from './Pages/About/Doctor';
import Overview from './Pages/About/Overview';
import Team from './Pages/About/Team';
import Vision from './Pages/About/Vision';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Founders from './Pages/About/Founders';
import ServicesDetails from './Pages/Services/ServicesDetails';
import BookService from './Pages/Services/BookService';
import BlogDisplay from './Pages/Blogs/BlogDisplay';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Router>
        <Switch>
          <Route exact path="/about-us" component={About} />

          <Route exact path="/services" component={Services} />
          <Route exact path="/services/:id" component={ServicesDetails} />
          <Route exact path="/book-service" component={BookService} />

          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={BlogDisplay} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact-us" component={Contact} />

          <Route exact path="/about-us/overview" component={Overview} />
          <Route exact path="/about-us/vision" component={Vision} />
          <Route exact path="/about-us/doctor" component={Doctor} />
          <Route exact path="/about-us/team" component={Team} />
          <Route exact path="/about-us/founders" component={Founders} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
