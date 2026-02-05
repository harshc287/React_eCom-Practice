import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { FaFilter } from "react-icons/fa";


const Products = () => {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [minPrice, setminPrice] = useState()
    const [maxPrice, setmaxPrice] = useState()
    const [brand, setBrand] = useState([])
    const [brandInput, setBrandInput] = useState("all")
    const [search, setSearch] = useState("")
    

    async function fetchProducts(){
        try{
        const res = await axios.get("https://dummyjson.com/products")
        setAllProducts(res.data.products)
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

    //search
    useEffect(()=> {
      const filtered = products.filter((p) => 
      p.title.toLowerCase().includes(search.toLowerCase())
      )
      setAllProducts(filtered)
    },[search] )

    //filter by price
    function handleFilterByPrice(){
      const filterByPrice = products.filter((p) => {
        return p.price >= minPrice && p.price <=maxPrice
        
      })
      setAllProducts(filterByPrice)
    }

    //filter by Brands
    function getBrandNames(){
      const b = products.map((p) => p.brand)
        const uniqueBrands = [...new Set(b)]
        setBrand(uniqueBrands)
      
    }

    useEffect(() => {
      getBrandNames()
    }, [products])

    function handleFilterByBrand(){
        if (brandInput === "all") {
    setAllProducts(products) // show all products again
    return
  }
      const filterByBrand = products.filter((p) => {
        return p.brand === brandInput
      })
      setAllProducts(filterByBrand)
    }
    console.log("brandInput:", brandInput)



    if(loading) return <h3 className='text-center mt-4'>Loading...</h3>
    if(error) return <h3 className='text-danger text-center'>{error}</h3>



  return (
    <div className="container mt-4">
<div className="card p-3 mb-4">
  <div className="row g-3 align-items-end">

    {/* PRICE FILTER */}
    <div className="col-md-3">
      <label className="form-label">Min Price</label>
      <input
        type="range"
        min={0}
        max={50}
        className="form-range"
        onChange={(e) => setminPrice(e.target.value)}
      />
      <small>₹ {minPrice || 0}</small>
    </div>

    <div className="col-md-3">
      <label className="form-label">Max Price</label>
      <input
        type="range"
        min={0}
        max={500}
        className="form-range"
        onChange={(e) => setmaxPrice(e.target.value)}
      />
      <small>₹ {maxPrice || 500}</small>
    </div>

    <div className="col-md-2">
      <button
        className="btn btn-primary w-100"
        onClick={handleFilterByPrice}
      >
        <FaFilter /> Price
      </button>
    </div>

    {/* BRAND FILTER */}
    <div className="col-md-2">
      <label className="form-label">Brand</label>
      <select
        value={brandInput}
        className="form-select"
        onChange={(e) => setBrandInput(e.target.value)}
      >
        <option value="all">All Brands</option>
        {brand?.map((bName) => (
          <option key={bName} value={bName}>
            {bName}
          </option>
        ))}
      </select>
    </div>

    <div className="col-md-2">
      <button
        className="btn btn-secondary w-100"
        onClick={handleFilterByBrand}
      >
        Apply
      </button>
    </div>

    {/* SEARCH */}
    <div className="col-md-12">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

  </div>
</div>

      <h2 className="mb-4">Products</h2>
      <div className="row">
        {allProducts.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <Card prod={prod} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
