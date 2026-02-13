import React, { useEffect, useState } from 'react'
import Products from './Products'
import Header from '../components/Header'


const Dashboard = ({user}) => {
  // const [loggedUser, setLoggedUser] = useState('')
  // useEffect(()=>{
  //   setLoggedUser(user)
  // },[])
  return (
    <>
    <Header />
    <div className="container-fluid p-4 bg-light min-vh-100">
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold">Dashboard</h1>
        <p className="text-muted mb-0">
          Browse, search and filter products
        </p>
        {/* <p>{loggedUser && (<span>{loggedUser.name}</span>) }Welcome User: </p> */}
        <p>Welcome User : {user?.name}</p>
      </div>
      
      
      

      {/* Products Section */}
      <Products />

    </div>
    </>
  )
}

export default Dashboard
