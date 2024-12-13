import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';

// Components import
import Dashboard from './components/Dashboard';
import SignalManagement from './components/SignalManagement';
import OrderMonitoring from './components/OrderMonitoring';
import Notifications from './components/Notifications';
import AdminControls from './components/AdminControls';

const App = () => {
  return (
    <Router>
      <nav>
        <div className="navbar-container">
          <div className="logo">
            <div className="logo-icon">📈</div>
            TradePro
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signals" className="nav-link" activeClassName="active">Signals</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders" className="nav-link" activeClassName="active">Orders</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/notifications" className="nav-link" activeClassName="active">Notifications</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin" className="nav-link" activeClassName="active">Admin</NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-cta">Trade Now</a>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/signals" element={<SignalManagement />} />
        <Route path="/orders" element={<OrderMonitoring />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin" element={<AdminControls />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;