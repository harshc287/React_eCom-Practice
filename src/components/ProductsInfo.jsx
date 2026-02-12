import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { cartReducer, initialCartState } from '../reducer/cartReducer'

const ProductsInfo = ({dispatch}) => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)


    const navigate = useNavigate()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${id}`
        )
        setProduct(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  function handleAddToCart(){
      console.log("Button Clicked");
    const cartProduct ={
      id: product.id, 
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage
    }
    console.log("Dispatching:", cartProduct);
    dispatch({type: "ADD_TO_CART", 
      payload: cartProduct
    })
    navigate("/cart")
  }

  // function handleAddToCart(){
  //   const cartProduct = {
  //     id:product.id,
  //     title: product.title,
  //     price: product.price,
  //     discountPercentage: product.discountPercentage
  //   }
  //   console.log(cartProduct)

  // }

if (loading) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

//add corosal to images and add badge for the stock 
//add min to max && max to min

  return (
    <div className="container mt-4">
      {/* <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ⬅ Back
      </button> */}
      <Link to='/dashboard'>Back</Link>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="img-fluid mb-3"
      />
      <p>{product.description}</p>
      <h4>Price: ${product.price}</h4>
      <p  className="me-5">
          <span className={`
        badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}` 
        }>Stock: </span> {product.stock} </p>
        {product.availabilityStatus}

        <button className="btn btn-primary"  onClick={handleAddToCart}> Add to cart</button>
    </div>
    
  )
}

export default ProductsInfo
