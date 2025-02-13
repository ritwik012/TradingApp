import React, { useState,useEffect } from 'react';
import axios from 'axios';

const SignalManagement = () => {
  const [newSignal, setNewSignal] = useState({
    symbol: '',
    price: 0
  });

  const [responseData, setResponseData] = useState(null);


  const handleInputChange = (e) => {
    setNewSignal({ ...newSignal, [e.target.name]: e.target.value });
  };
  const sendSignal = async (e) => {
    e.preventDefault();
  
    if (!newSignal.symbol || newSignal.price <= 0) {
      alert("Please enter a valid symbol and price.");
      return;
    }
  
    try {
      const response = await axios.post(
        " https://129a-103-190-13-24.ngrok-free.app/api/sample/request",
        newSignal,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      setResponseData(response.data);
    } catch (error) {
      console.error("Error sending signal:", error);
      alert("Failed to send signal. Please try again.");
    }
  };
  
  return (
    <div>
      <h2>Signal Management</h2>
      <form onSubmit={sendSignal}>
        <input 
          type="text" 
          name="symbol" 
          value={newSignal.symbol} 
          onChange={handleInputChange} 
          placeholder="Enter Symbol" 
          required 
        />
        <input 
          type="number" 
          name="price" 
          value={newSignal.price} 
          onChange={handleInputChange} 
          placeholder="Enter Price" 
          required 
        />
        <button type="submit">Send Signal</button>
      </form>

      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )} 
      
    </div>
  );
};

export default SignalManagement;
