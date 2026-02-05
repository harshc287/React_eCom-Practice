import React from 'react'
import Products from './Products'

const Dashboard = () => {
  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold">Dashboard</h1>
        <p className="text-muted mb-0">
          Browse, search and filter products
        </p>
      </div>

      {/* Products Section */}
      <Products />

    </div>
  )
}

export default Dashboard
