import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    async function fetchProducts(){
        try{
        const res = await axios.get("https://dummyjson.com/products")
        
        setProducts(res.data.products)
        }catch(err){
            setError("Failed to load Products")
        }finally{
            setLoading(false)
        }
        
    }

    useEffect(()=> {
        fetchProducts()
    },[])

    if(loading) return <h3 className='text-center mt-4'>Loading...</h3>
    if(error) return <h3 className='text-danger text-center'>{error}</h3>



  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <Card prod={prod} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
