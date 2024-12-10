import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignalManagement = () => {
  const [signals, setSignals] = useState([]);
  const [newSignal, setNewSignal] = useState({
    variant: '',
    symbol: '',
    exchange: '',
    transactionType: '',
    productType: '',
    orderType: '',
    quantity: 0,
    price: 0,
    profitPer: 0,
    strategyNo: 0,
    broker: ''
  });

  useEffect(() => {
    fetchSignals();
  }, []);

  const fetchSignals = async () => {
    try {
      const response = await axios.get('/api/signals');
      setSignals(response.data);
    } catch (error) {
      console.error('Error fetching signals:', error);
    }
  };

  const createSignal = async () => {
    try {
      await axios.post('/api/signals', newSignal);
      setNewSignal({
        variant: '',
        symbol: '',
        exchange: '',
        transactionType: '',
        productType: '',
        orderType: '',
        quantity: 0,
        price: 0,
        profitPer: 0,
        strategyNo: 0,
        broker: ''
      });
      fetchSignals();
    } catch (error) {
      console.error('Error creating signal:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewSignal({ ...newSignal, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Signal Management</h2>
      <form onSubmit={createSignal}>
        {/* Input fields for newSignal */}
        <button type="submit">Create Signal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Variant</th>
            <th>Symbol</th>
            {/* Add columns for other signal fields */}
          </tr>
        </thead>
        <tbody>
          {signals.map((signal) => (
            <tr key={signal.id}>
              <td>{signal.variant}</td>
              <td>{signal.symbol}</td>
              {/* Add cells for other signal fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignalManagement;