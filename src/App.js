import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <>
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
