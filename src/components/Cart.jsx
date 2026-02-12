import React from 'react'

const cart = ({cart, dispatch}) => {

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  )
  return (
    <>
    <div className="container mt-4">
      <h2>My cart</h2>
      {cart.map(item => (
      <div key={item.id} className="card p-3 mb-3">
          <h5>{item.title}</h5>
          <p>Price: ₹ {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          
        <button className='btn, btn-danger'
          onClick={()=>
            dispatch({
              type:"REMOVE_FROM_CART",
              payload: item.id
            })
          }>Remove
          
        </button>

          </div>
      ))}
      <h4>Total: Rp {total}</h4>
      {cart.length > 0 && (
        <button className='btn btn-warning'
        onClick={()=> dispatch({type: "CLEAR_CART"})}>Clear Cart
        </button>
      )}
    </div>
    </>
  )
}

export default cart
