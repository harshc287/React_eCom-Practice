import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductsInfo = () => {
  const { id } = useParams()   
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

//   const navigate = useNavigate()

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

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>

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
    </div>
  )
}

export default ProductsInfo
