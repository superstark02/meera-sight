import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AppBar from './Components/appBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <BrowserRouter>
        <Route path="/home" component={Home} />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
