import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />  
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} /> 
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
