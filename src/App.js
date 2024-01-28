import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import PizzaDashboard from "./Components/PizzaDashboard";

function App() {
  const [orders, setOrders] = useState([]);

  const handleOrderPlaced = (order) => {
    const newOrder = { ...order, id: Date.now() };
    setOrders([...orders, newOrder]);
  };

  const handleCancelOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  const handleMoveToNextStage = (orderId) => {
    // Implement logic to move to the next stage
  };

  const handleMoveToPicked = (orderId) => {
    // Implement logic to move to the picked stage
  };

  return (
    <div>
      <Form onOrderPlaced={handleOrderPlaced} />
      <PizzaDashboard 
      orders={orders}
      onCancelOrder={handleCancelOrder}
      onMoveToNextStage={handleMoveToNextStage}
      onMoveToPicked={handleMoveToPicked}
      />
    </div>
  );
}

export default App;
