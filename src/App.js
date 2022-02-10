import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Detail/:id" element = {<Detail />} />
          <Route path ="/Login" element = {<Login />} />
          <Route path ="/" element = {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
