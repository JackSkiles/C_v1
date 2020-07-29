import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer'
import firebase from './firebase'
import TimesList from './components/times-list'
import AddTimeEntryForm from './components/add-time-entry-form'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <TimesList />  
        <AddTimeEntryForm />
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
