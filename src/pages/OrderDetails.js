import React, { useState } from "react";
import "./OrderDetails.css";

function OrderDetails() {
  const [orderNumber, setOrderNumber] = useState(""); // State to store the order number entered by the user
  const [orderStatus, setOrderStatus] = useState(""); // State to store the order status
  const [orderItems, setOrderItems] = useState([]); // State to store the order items

  const orders = {
    12345: { status: 'Pending', items: [{ id: 1, name: "Item 1", quantity: 2 }] },
    54321: { status: 'Shipped', items: [{ id: 1, name: "Item 2", quantity: 1 }] }
    // Add more mock orders here...
  };

  const handleSearch = () => {
    if (orders[orderNumber]) {
      setOrderStatus(orders[orderNumber].status);
      setOrderItems(orders[orderNumber].items);
    } else {
      setOrderStatus("");
      setOrderItems([]);
      alert("No order found with this order number.");
    }
  };

  return (
    <div className="orderdetails">
      <h1 className="orderdetails-heading">Order Details</h1>
      <input
        type="text"
        placeholder="Enter Order Number"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
        className="search-bar"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      {orderStatus && (
        <>
          <p className="order-status">Order Status: {orderStatus}</p>
          <table className="order-items">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
