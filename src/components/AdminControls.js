import React, { useState } from 'react';
import axios from 'axios';

const AdminControls = () => {
  const [serverStatus, setServerStatus] = useState('');
  const [userData, setUserData] = useState('');

  const startServer = async () => {
    try {
      await axios.post('/api/admin/start');
      setServerStatus('Server started');
    } catch (error) {
      console.error('Error starting server:', error);
      setServerStatus('Error starting server');
    }
  };

  const resetUserData = async () => {
    try {
      await axios.post('/api/admin/reset');
      setUserData('User data reset');
    } catch (error) {
      console.error('Error resetting user data:', error);
      setUserData('Error resetting user data');
    }
  };

  return (
    <div>
      <h2>Admin Controls</h2>
      <div>
        <h3>Server Management</h3>
        <button onClick={startServer}>Start Server</button>
        <p>{serverStatus}</p>
      </div>
      <div>
        <h3>User Data Management</h3>
        <button onClick={resetUserData}>Reset User Data</button>
        <p>{userData}</p>
      </div>
    </div>
  );
};

export default AdminControls;