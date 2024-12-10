import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderMonitoring = () => {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    broker: '',
    productType: '',
    orderType: ''
  });

  useEffect(() => {
    fetchOrders();
  }, [filters]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders', { params: filters });
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Order Monitoring</h2>
      <div>
        <h3>Filters</h3>
        <form>
          <label>
            Broker:
            <input type="text" name="broker" value={filters.broker} onChange={handleFilterChange} />
          </label>
          <label>
            Product Type:
            <input type="text" name="productType" value={filters.productType} onChange={handleFilterChange} />
          </label>
          <label>
            Order Type:
            <input type="text" name="orderType" value={filters.orderType} onChange={handleFilterChange} />
          </label>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.symbol}</td>
              <td>{order.type}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.status}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderMonitoring;