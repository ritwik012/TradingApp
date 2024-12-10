import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [tradingPerformance, setTradingPerformance] = useState({});
  const [activeStrategies, setActiveStrategies] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('/api/dashboard');
      setTradingPerformance(response.data.tradingPerformance);
      setActiveStrategies(response.data.activeStrategies);
      setRecentTransactions(response.data.recentTransactions);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Trading Performance</h3>
        {/* Display trading performance metrics */}
        <p>Total Revenue: {tradingPerformance.totalRevenue}</p>
        <p>Total Profit: {tradingPerformance.totalProfit}</p>
        {/* Add more performance metrics */}
      </div>
      <div>
        <h3>Active Strategies</h3>
        <ul>
          {activeStrategies.map((strategy) => (
            <li key={strategy.strategyNo}>Strategy {strategy.strategyNo}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Profit</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.symbol}</td>
                <td>{transaction.type}</td>
                <td>{transaction.quantity}</td>
                <td>{transaction.price}</td>
                <td>{transaction.profit}</td>
                <td>{transaction.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;