import React, { useState, useEffect } from "react";

const PizzaDashboard = ({ orders, onCancelOrder, onMoveToNextStage, onMoveToPicked }) => {
  const [timeInStages, setTimeInStages] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeInStages((prev) => {
        const updatedTime = {};
        Object.keys(prev).forEach((orderId) => {
          if (orders.some((order) => order.id === orderId)) {
            updatedTime[orderId] = prev[orderId] + 1;
          }
        });
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [orders]);

  return (
    <div>
      <h2>Pizza Dashboard</h2>
      <div>
        <h3>All Pizzas in Progress</h3>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Order ID:</strong> {order.id} | <strong>Remaining Time:</strong>{' '}
              {timeInStages[order.id]}s
              <button onClick={() => onMoveToNextStage(order.id)}>Next</button>
              <button onClick={() => onMoveToPicked(order.id)}>Picked</button>
              <button onClick={() => onCancelOrder(order.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      <h2>Main Section</h2>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total time spent (time from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{`Order Id: ${order.id}`}</td>
              <td>{order.stage}</td>
              <td>{`${Math.floor(timeInStages[order.id] / 60)} min ${timeInStages[order.id] % 60} sec`}</td>
              <td>
                {order.stage === 'Order Ready' ? (
                  'No action'
                ) : (
                  <button onClick={() => onMoveToNextStage(order.id)}>Next</button>
                )}
                {order.stage === 'Order In Making' && (
                  <button onClick={() => onCancelOrder(order.id)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Pizzas Delivered Today: {orders.length}</h3>
    </div>
  );
};

export default PizzaDashboard;
