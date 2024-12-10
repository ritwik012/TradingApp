import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

// Components
import Dashboard from './components/Dashboard';
import SignalManagement from './components/SignalManagement';
import OrderMonitoring from './components/OrderMonitoring';
import Notifications from './components/Notifications';
import AdminControls from './components/AdminControls';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/signals">Signal Management</Link>
            </li>
            <li>
              <Link to="/orders">Order Monitoring</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/admin">Admin Controls</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signals" element={<SignalManagement />} />
          <Route path="/orders" element={<OrderMonitoring />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/admin" element={<AdminControls />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;