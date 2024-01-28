import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({onOrderPlaced}) => {
  const [order, setOrder] = useState({
    type: "Veg",
    size: "Medium",
    base: "Thin",
  });
  const notify = () => toast("Not taking any order for now");
  let totalOrders = 0;

  const handleInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (totalOrders >= 10) {
      return { notify };
    } else {
      onOrderPlaced(order);
    }
  };

  return (
    <>
      <h2>Place Pizza Order</h2>
      <form>
        <label htmlFor="type">Types of Pizza</label>
        <select name="type" value={order.type} onChange={handleInputChange}>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
        <label htmlFor="size">SIZE</label>
        <select name="size" value={order.size} onChange={handleInputChange}>
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <label htmlFor="base">BASE</label>
        <select name="base" value={order.base} onChange={handleInputChange}>
          <option value="thin">Thin</option>
          <option value="thick">Thick</option>
        </select>
        <button type="button" onClick={handleSubmit}>
          Place Order
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
