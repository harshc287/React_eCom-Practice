import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, dispatch }) => {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <Link to="/dashboard">Back</Link>
      <h2>My Cart</h2>
      
      {cart.map(item => (
        <div
          key={item.id}
          className="card p-3 mb-3 d-flex flex-row justify-content-between align-items-center"
        >
          <div>
            <h5>{item.title}</h5>
            <p>₹ {item.price}</p>
          </div>

          {/* ➖ ➕ BUTTONS */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                dispatch({
                  type: "DECREASE_QTY",
                  payload: item.id
                })
              }
            >
              −
            </button>

            <strong>{item.quantity}</strong>

            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                dispatch({
                  type: "INCREASE_QTY",
                  payload: item.id
                })
              }
            >
              +
            </button>
          </div>

          <div>
            <strong>₹ {item.price * item.quantity}</strong>
          </div>
        </div>
      ))}

      <h4>Total: ₹ {total}</h4>

      {cart.length > 0 && (
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
