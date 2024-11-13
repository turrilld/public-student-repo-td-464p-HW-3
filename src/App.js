import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import './style.css';

import Home from './views/Home';
import List from './views/List';
import Population from './views/Population';
import GDP from './views/GDP';

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <ul className="navBar">
          <li>
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/list">
              List
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/population">
              Population
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/gdp">
              GDP
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home title="Home Page" />} />
        <Route path="/list" element={<List title="List Page" />} />
        <Route
          path="/population"
          element={<Population title="Population Page" />}
        />
        <Route path="/gdp" element={<GDP title="GDP Page" />} />
      </Routes>
    </Router>
  );
}
